import { readFileSync } from "node:fs";
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { join } from "node:path";
import { Remote, TypertRemoteService } from "@deepseek-ai/dsh-typert-protocol";
import { dshHomePath } from "@deepseek-ai/dsh-home-paths";
//#region lib/types/index.js
/**
* Host-side filesystem service for cluster Agent definitions. Each Agent is a
* directory under `$DSH_HOME/cluster-agents/<id>` holding an `agent.json`.
* Exposed to the browser through the typert Remote seam so the client UI can
* create/save/delete agents on disk.
* @module @lanxi266/dsh-cluster-agent-fs
*/
var __runInitializers = function(thisArg, initializers, value) {
	var useValue = arguments.length > 2;
	for (var i = 0; i < initializers.length; i++) value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
	return useValue ? value : void 0;
};
var __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
	function accept(f) {
		if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
		return f;
	}
	var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
	var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
	var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
	var _, done = false;
	for (var i = decorators.length - 1; i >= 0; i--) {
		var context = {};
		for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
		for (var p in contextIn.access) context.access[p] = contextIn.access[p];
		context.addInitializer = function(f) {
			if (done) throw new TypeError("Cannot add initializers after decoration has completed");
			extraInitializers.push(accept(f || null));
		};
		var result = (0, decorators[i])(kind === "accessor" ? {
			get: descriptor.get,
			set: descriptor.set
		} : descriptor[key], context);
		if (kind === "accessor") {
			if (result === void 0) continue;
			if (result === null || typeof result !== "object") throw new TypeError("Object expected");
			if (_ = accept(result.get)) descriptor.get = _;
			if (_ = accept(result.set)) descriptor.set = _;
			if (_ = accept(result.init)) initializers.unshift(_);
		} else if (_ = accept(result)) if (kind === "field") initializers.unshift(_);
		else descriptor[key] = _;
	}
	if (target) Object.defineProperty(target, contextIn.name, descriptor);
	done = true;
};
/** Filesystem-backed Agent registry with Remote methods for the browser. */
let ClusterAgentFsService = (() => {
	let _classSuper = TypertRemoteService;
	let _instanceExtraInitializers = [];
	let _create_decorators;
	let _save_decorators;
	let _delete_decorators;
	let _reportBinding_decorators;
	let _openAgentSpace_decorators;
	let _syncGraph_decorators;
	return class ClusterAgentFsService extends _classSuper {
		static {
			const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
			_create_decorators = [Remote("create")];
			_save_decorators = [Remote("save")];
			_delete_decorators = [Remote("delete")];
			_reportBinding_decorators = [Remote("reportBinding")];
			_openAgentSpace_decorators = [Remote("openAgentSpace")];
			_syncGraph_decorators = [Remote("syncGraph")];
			__esDecorate(this, null, _create_decorators, {
				kind: "method",
				name: "create",
				static: false,
				private: false,
				access: {
					has: (obj) => "create" in obj,
					get: (obj) => obj.create
				},
				metadata: _metadata
			}, null, _instanceExtraInitializers);
			__esDecorate(this, null, _save_decorators, {
				kind: "method",
				name: "save",
				static: false,
				private: false,
				access: {
					has: (obj) => "save" in obj,
					get: (obj) => obj.save
				},
				metadata: _metadata
			}, null, _instanceExtraInitializers);
			__esDecorate(this, null, _delete_decorators, {
				kind: "method",
				name: "delete",
				static: false,
				private: false,
				access: {
					has: (obj) => "delete" in obj,
					get: (obj) => obj.delete
				},
				metadata: _metadata
			}, null, _instanceExtraInitializers);
			__esDecorate(this, null, _reportBinding_decorators, {
				kind: "method",
				name: "reportBinding",
				static: false,
				private: false,
				access: {
					has: (obj) => "reportBinding" in obj,
					get: (obj) => obj.reportBinding
				},
				metadata: _metadata
			}, null, _instanceExtraInitializers);
			__esDecorate(this, null, _openAgentSpace_decorators, {
				kind: "method",
				name: "openAgentSpace",
				static: false,
				private: false,
				access: {
					has: (obj) => "openAgentSpace" in obj,
					get: (obj) => obj.openAgentSpace
				},
				metadata: _metadata
			}, null, _instanceExtraInitializers);
			__esDecorate(this, null, _syncGraph_decorators, {
				kind: "method",
				name: "syncGraph",
				static: false,
				private: false,
				access: {
					has: (obj) => "syncGraph" in obj,
					get: (obj) => obj.syncGraph
				},
				metadata: _metadata
			}, null, _instanceExtraInitializers);
			if (_metadata) Object.defineProperty(this, Symbol.metadata, {
				enumerable: true,
				configurable: true,
				writable: true,
				value: _metadata
			});
		}
		constructor(ctx) {
			super(ctx, "clusterAgentFs");
			this.loadGraph();
		}
		/** Runtime instance → Agent-class mapping (sessions report in on entry). */
		bindings = (__runInitializers(this, _instanceExtraInitializers), /* @__PURE__ */ new Map());
		/** Last cluster-activity time per instance (epoch ms). */
		lastActivity = /* @__PURE__ */ new Map();
		/** Synced canvas graph: node id → Agent class (null when unbound). */
		graphNodes = /* @__PURE__ */ new Map();
		/** Synced canvas edges: the authoritative flow policy. */
		graphEdges = [];
		root() {
			return dshHomePath("cluster-agents");
		}
		sanitize(id) {
			const cleaned = id.replace(/[^a-zA-Z0-9_-]/g, "_");
			return cleaned === "" ? "agent" : cleaned;
		}
		dir(id) {
			return join(this.root(), this.sanitize(id));
		}
		graphFile() {
			return join(this.root(), "graph.json");
		}
		/** Restore the persisted canvas graph, or leave it empty when none/invalid. */
		loadGraph() {
			try {
				const raw = readFileSync(this.graphFile(), "utf8");
				const data = JSON.parse(raw);
				if (data === null || typeof data !== "object" || !Array.isArray(data.nodes) || !Array.isArray(data.edges)) return;
				this.graphNodes.clear();
				for (const rawNode of data.nodes) {
					const node = rawNode;
					if (typeof node.id !== "string") continue;
					this.graphNodes.set(node.id, typeof node.agentId === "string" ? node.agentId : null);
				}
				this.graphEdges = data.edges.filter((rawEdge) => {
					const edge = rawEdge;
					return typeof edge.from === "string" && typeof edge.to === "string" && (edge.direction === "none" || edge.direction === "single" || edge.direction === "double");
				});
			} catch {}
		}
		/** Persist the synced canvas graph so it survives a `dsh web` restart. */
		async persistGraph() {
			const data = {
				nodes: [...this.graphNodes].map(([id, agentId]) => ({
					id,
					agentId
				})),
				edges: this.graphEdges
			};
			await mkdir(this.root(), { recursive: true });
			await writeFile(this.graphFile(), JSON.stringify(data, null, 2), "utf8");
		}
		/**
		* Create an agent directory with an initial `agent.json`.
		* @param id - stable agent id (directory name, sanitized).
		* @param name - initial display name.
		* @returns the agent id.
		*/
		async create(id, name) {
			const dir = this.dir(id);
			await mkdir(dir, { recursive: true });
			await writeFile(join(dir, "agent.json"), JSON.stringify({
				id,
				name,
				prompt: "",
				mode: "any",
				spaceEnabled: false
			}, null, 2), "utf8");
			return id;
		}
		/**
		* Save agent properties into its `agent.json` (creating the dir if needed).
		* @param id - stable agent id (directory name, sanitized).
		* @param props - name, prompt, mode and space toggle to persist.
		* @returns the agent id.
		*/
		async save(id, props) {
			const dir = this.dir(id);
			await mkdir(dir, { recursive: true });
			await writeFile(join(dir, "agent.json"), JSON.stringify({
				id,
				name: props.name,
				prompt: props.prompt,
				mode: props.mode,
				spaceEnabled: props.spaceEnabled
			}, null, 2), "utf8");
			return id;
		}
		/**
		* Delete an agent directory and its contents.
		* @param id - stable agent id (directory name, sanitized).
		* @returns the agent id.
		*/
		async delete(id) {
			await rm(this.dir(id), {
				recursive: true,
				force: true
			});
			return id;
		}
		/**
		* Record which Agent class a running instance (session) belongs to.
		* @param sessionId - the instance's session id.
		* @param agentId - the Agent class id.
		* @returns the session id.
		*/
		async reportBinding(sessionId, agentId) {
			this.bindings.set(sessionId, agentId);
			this.lastActivity.set(sessionId, Date.now());
			return sessionId;
		}
		/**
		* Resolve an instance's Agent class, or null when unbound.
		* @param sessionId - the instance's session id.
		* @returns the Agent class id, or null.
		*/
		classOf(sessionId) {
			return this.bindings.get(sessionId) ?? null;
		}
		/**
		* List the Agent classes on disk (each directory under the cluster-agents
		* root with a readable `agent.json`): directory id + persisted name/prompt.
		* @returns one entry per class; empty when the root is missing.
		*/
		async listAgents() {
			const result = [];
			try {
				const entries = await readdir(this.root(), { withFileTypes: true });
				for (const entry of entries) {
					if (!entry.isDirectory()) continue;
					const meta = this.classMeta(entry.name);
					if (meta === null) continue;
					result.push({
						id: entry.name,
						...meta
					});
				}
			} catch {}
			return result;
		}
		/**
		* Read an Agent class's persisted properties (`agent.json`), or null when the
		* file is missing or malformed. Synchronous so prompt-assembly providers can
		* resolve a class's persona without yielding.
		* @param agentId - the Agent class id.
		* @returns the persisted name + prompt, or null.
		*/
		classMeta(agentId) {
			try {
				const raw = readFileSync(join(this.dir(agentId), "agent.json"), "utf8");
				const parsed = JSON.parse(raw);
				if (parsed === null || typeof parsed !== "object") return null;
				const mode = parsed.mode === "single" || parsed.mode === "multi" ? parsed.mode : "any";
				return {
					name: typeof parsed.name === "string" && parsed.name.trim() !== "" ? parsed.name : "default",
					prompt: typeof parsed.prompt === "string" ? parsed.prompt : "",
					mode,
					spaceEnabled: parsed.spaceEnabled === true
				};
			} catch {
				return null;
			}
		}
		/**
		* The absolute on-disk directory of an Agent class (its "space").
		* @param agentId - the Agent class id.
		* @returns the absolute directory path.
		*/
		agentDirPath(agentId) {
			return this.dir(agentId);
		}
		/**
		* Open an Agent class's directory in the operating system file explorer.
		* @param id - stable agent id (directory name, sanitized).
		* @returns the opened absolute directory path.
		*/
		async openAgentSpace(id) {
			const dir = this.dir(id);
			await mkdir(dir, { recursive: true });
			spawn(process.platform === "win32" ? "explorer.exe" : process.platform === "darwin" ? "open" : "xdg-open", [dir], {
				stdio: "ignore",
				detached: true
			}).unref();
			return dir;
		}
		/**
		* Resolve an Agent class's display name, or "default" when unknown/missing.
		* @param agentId - the Agent class id.
		* @returns the display name (fallback "default").
		*/
		className(agentId) {
			return this.classMeta(agentId)?.name ?? "default";
		}
		/**
		* Record cluster activity for an instance.
		* @param sessionId - the instance's session id.
		*/
		touch(sessionId) {
			this.lastActivity.set(sessionId, Date.now());
		}
		/**
		* The instance's last cluster-activity time, or null when unknown.
		* @param sessionId - the instance's session id.
		* @returns epoch ms, or null.
		*/
		lastActiveAt(sessionId) {
			return this.lastActivity.get(sessionId) ?? null;
		}
		/**
		* Whether the canvas graph allows `from → to` (self-flow always allowed).
		* @param from - source Agent class id.
		* @param to - target Agent class id.
		* @returns true when the flow is allowed.
		*/
		allowFlow(from, to) {
			if (from === to) return true;
			if (this.graphEdges.length === 0) return true;
			for (const edge of this.graphEdges) {
				const a = this.graphNodes.get(edge.from);
				const b = this.graphNodes.get(edge.to);
				if (edge.direction !== "none" && a === from && b === to) return true;
				if (edge.direction === "double" && a === to && b === from) return true;
			}
			return false;
		}
		/**
		* Replace the synced canvas graph: nodes (id + class) and edges (flow policy).
		* @param nodes - node id → Agent class bindings.
		* @param edges - directed flow edges.
		* @returns the number of synced edges.
		*/
		async syncGraph(nodes, edges) {
			this.graphNodes.clear();
			for (const node of nodes) this.graphNodes.set(node.id, node.agentId);
			this.graphEdges = edges;
			await this.persistGraph();
			return edges.length;
		}
	};
})();
//#endregion
export { ClusterAgentFsService, ClusterAgentFsService as default };
