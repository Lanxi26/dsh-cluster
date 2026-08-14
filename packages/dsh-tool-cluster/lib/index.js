import { randomUUID } from "node:crypto";
import { defineTool } from "@deepseek-ai/dsh-tools";
import { createUserMessage } from "@deepseek-ai/dsh-llm";
import { SessionId } from "@deepseek-ai/dsh-session";
//#region lib/types/index.js
/**
* Model-facing cluster tools: `cluster_view` lists the live agent instances an
* agent can interact with, and `cluster_send` messages one of them through the
* native session inbox (reusing `Agent.followup`), so the target sees it as an
* ordinary user message prefixed with its origin.
* @module @lanxi266/dsh-tool-cluster
*/
const name = "tool-cluster";
const inject = [
	"tools",
	"agents",
	"clusterAgentFs",
	"systemPrompt"
];
/** Format the origin prefix that rides in front of a cross-instance message. */
function prefix(sourceLabel, message) {
	return `【此消息来自 ${sourceLabel}】\n${message}`;
}
/** Format an epoch-ms timestamp as 24-hour `HH:mm` local time. */
function formatTime(ms) {
	const d = new Date(ms);
	return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}
/** Human label per Agent addressing mode. */
const MODE_LABEL = {
	single: "单例",
	multi: "多例",
	any: "随意"
};
/** Guidance shown at the end of every `cluster_view` result. */
const MODE_HINT = "\n\n模式说明：\n- 单例 Agent：用 cluster_view 找到其最近的运行中会话，再用 cluster_send 发送。\n- 多例 Agent：直接用 cluster_spawn 新建实例并投递。\n- 随意：两者皆可。";
/**
* Register the two tools.
* @param ctx - Host context carrying the tools and agents services.
*/
function apply(ctx) {
	ctx.effect(() => ctx.systemPrompt.section({
		name: "cluster-agent-persona",
		order: -50,
		text: (context) => {
			const agent = context.agent;
			if (agent === void 0) return "";
			const classId = ctx.clusterAgentFs.classOf(agent.id);
			if (classId === null) return "";
			const meta = ctx.clusterAgentFs.classMeta(classId);
			if (meta === null) return "";
			const lines = [];
			lines.push(meta.prompt.trim() === "" ? `你是 ${meta.name}。` : `你是 ${meta.name}，${meta.prompt}`);
			lines.push("你正在工作流中，请使用 cluster_view 来确保你的信息流向正确；如果 cluster_view 里只显示你自己（没有其他可投递的 Agent），说明你是最后一环，直接产出最终结果即可，不要再 cluster_send/cluster_spawn。");
			if (meta.spaceEnabled) lines.push(`你的身份空间是【${ctx.clusterAgentFs.agentDirPath(classId)}】，请先浏览身份空间。`);
			return `【Agent 设定】\n${lines.join("\n")}`;
		}
	}), "tool-cluster: cluster-agent-persona");
	ctx.effect(() => ctx.tools.register(defineTool({
		name: "cluster_view",
		description: "查看当前集群里所有运行中的 Agent 实例（会话）和 Agent 类别（含单例/多例/随意模式），供你决定用 cluster_send（单例）还是 cluster_spawn（多例）投递。",
		parameters: {},
		output: {
			schema: { type: "string" },
			render(_args, value) {
				return [{
					type: "text",
					text: String(value)
				}];
			}
		},
		async execute(_args, exec) {
			const me = exec.agent?.id;
			const callerClass = exec.agent === void 0 ? null : ctx.clusterAgentFs.classOf(exec.agent.id);
			const canSee = (targetClass) => callerClass === null || targetClass !== null && ctx.clusterAgentFs.allowFlow(callerClass, targetClass);
			const agents = ctx.agents.list().filter((agent) => canSee(ctx.clusterAgentFs.classOf(agent.id)));
			const lines = [];
			for (const agent of agents) {
				const classId = ctx.clusterAgentFs.classOf(agent.id);
				const cls = classId === null ? "未分类" : ctx.clusterAgentFs.className(classId);
				const createdAt = formatTime(agent.session.header.createdAt);
				const lastActive = formatTime(ctx.clusterAgentFs.lastActiveAt(agent.id) ?? agent.session.header.createdAt);
				const cur = agent.id === me ? "（当前）" : "";
				lines.push(`- ${agent.id}｜${cls}｜创建 ${createdAt}｜活跃 ${lastActive}｜${agent.status}${cur}`);
			}
			const instanceSection = agents.length === 0 ? "当前没有运行中的 Agent 实例。" : `运行中的 Agent 实例：\n${lines.join("\n")}`;
			const classes = (await ctx.clusterAgentFs.listAgents()).filter((c) => canSee(c.id));
			let classSection = "";
			if (classes.length > 0) classSection = `\n\nAgent 类别：\n${classes.map((c) => `- ${c.name}（${c.id}）｜${MODE_LABEL[c.mode]}`).join("\n")}`;
			return `${instanceSection}${classSection}${MODE_HINT}`;
		}
	})), "tool-cluster: cluster_view");
	ctx.effect(() => ctx.tools.register(defineTool({
		name: "cluster_send",
		description: "给某个运行中的 Agent 实例（会话）发送消息。消息会以「此消息来自xxx」的前缀，作为一条用户消息投递到目标会话的收件箱，目标 Agent 会像收到用户消息一样处理它。",
		parameters: {
			targetSessionId: {
				type: "string",
				required: true,
				description: "目标实例的会话 id（可用 cluster_view 查到）。"
			},
			message: {
				type: "string",
				required: true,
				description: "要发送的消息内容。"
			}
		},
		output: {
			schema: { type: "string" },
			render(_args, value) {
				return [{
					type: "text",
					text: String(value)
				}];
			}
		},
		async execute(args, exec) {
			const sourceId = exec.agent?.id;
			if (sourceId === void 0) return "无调用方会话，无法确定源 Agent 类别。";
			const sourceClass = ctx.clusterAgentFs.classOf(sourceId);
			const targetClass = ctx.clusterAgentFs.classOf(args.targetSessionId);
			if (sourceClass === null || targetClass === null) return "源或目标实例未绑定 Agent 类别，信息流未授权（deny-by-default）。请先给节点注册 Agent 并进入节点。";
			const targetMeta = ctx.clusterAgentFs.classMeta(targetClass);
			if (targetMeta?.mode === "multi") return `「${targetMeta.name}」是多例模式，请用 cluster_spawn 新建实例。`;
			if (!await ctx.clusterAgentFs.allowFlow(sourceClass, targetClass)) return `信息流约束拒绝：不允许「${sourceClass}」→「${targetClass}」。`;
			const target = ctx.agents.get(args.targetSessionId);
			if (target === void 0) return `目标实例 ${args.targetSessionId} 未运行，无法投递。用 cluster_view 查看当前运行中的实例。`;
			target.followup(createUserMessage({
				content: [{
					type: "text",
					text: prefix(sourceClass, args.message)
				}],
				source: { kind: "user" }
			}));
			ctx.clusterAgentFs.touch(sourceId);
			ctx.clusterAgentFs.touch(args.targetSessionId);
			return `已向实例 ${args.targetSessionId} 发送消息。`;
		}
	})), "tool-cluster: cluster_send");
	ctx.effect(() => ctx.tools.register(defineTool({
		name: "cluster_spawn",
		description: "为某个 Agent 类别新建一个实例（会话），并投递首条消息。每次调用都新建，实例无长期记忆；新实例的人设来自该类别在 agent.json 里的 prompt。",
		parameters: {
			targetAgentId: {
				type: "string",
				required: true,
				description: "目标 Agent 类别 id（可用 cluster_view 的「Agent 类别」查到）。"
			},
			message: {
				type: "string",
				required: true,
				description: "要发送的首条消息内容。"
			}
		},
		output: {
			schema: { type: "string" },
			render(_args, value) {
				return [{
					type: "text",
					text: String(value)
				}];
			}
		},
		async execute(args, exec) {
			const source = exec.agent;
			if (source === void 0) return "无调用方会话，无法确定源 Agent 类别。";
			const sourceClass = ctx.clusterAgentFs.classOf(source.id);
			if (sourceClass === null) return "源实例未绑定 Agent 类别，信息流未授权（deny-by-default）。请先给节点注册 Agent 并进入节点。";
			const targetClass = args.targetAgentId;
			const targetMeta = ctx.clusterAgentFs.classMeta(targetClass);
			if (targetMeta === null) return `目标类别 ${targetClass} 不存在。用 cluster_view 查看「Agent 类别」。`;
			if (targetMeta.mode === "single") return `「${targetMeta.name}」是单例模式，请用 cluster_send 发送到其最近的运行中会话。`;
			if (!ctx.clusterAgentFs.allowFlow(sourceClass, targetClass)) return `信息流约束拒绝：不允许「${sourceClass}」→「${targetClass}」。`;
			const sessionId = SessionId(`session-${randomUUID()}`);
			const handle = await ctx.agents.create({
				sessionId,
				agentOptions: { ...source.options },
				...source.session.header.cwd === void 0 ? {} : { meta: { cwd: source.session.header.cwd } },
				setup: (childCtx) => {
					childCtx.get("agentPresets")?.composeFrom(childCtx, source.ctx);
				}
			});
			await ctx.clusterAgentFs.reportBinding(handle.agent.id, targetClass);
			handle.agent.followup(createUserMessage({
				content: [{
					type: "text",
					text: prefix(sourceClass, args.message)
				}],
				source: { kind: "user" }
			}));
			ctx.clusterAgentFs.touch(source.id);
			return `已为类别 ${targetClass} 新建实例 ${String(handle.agent.id)} 并投递消息。`;
		}
	})), "tool-cluster: cluster_spawn");
}
//#endregion
export { apply, inject, name };
