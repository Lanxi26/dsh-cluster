/**
 * Host-side filesystem service for cluster Agent definitions. Each Agent is a
 * directory under `$DSH_HOME/cluster-agents/<id>` holding an `agent.json`.
 * Exposed to the browser through the typert Remote seam so the client UI can
 * create/save/delete agents on disk.
 * @module @lanxi266/dsh-cluster-agent-fs
 */
import type { Context } from '@deepseek-ai/cordis';
import { TypertRemoteService } from '@deepseek-ai/dsh-typert-protocol';
import type { AgentProperties, GraphEdgeSync, GraphNodeSync } from './types.ts';
export type * from './types.ts';
declare module '@deepseek-ai/cordis' {
    interface Context {
        clusterAgentFs: ClusterAgentFsService;
    }
}
/** Filesystem-backed Agent registry with Remote methods for the browser. */
export declare class ClusterAgentFsService extends TypertRemoteService {
    constructor(ctx: Context);
    /** Runtime instance → Agent-class mapping (sessions report in on entry). */
    private readonly bindings;
    /** Last cluster-activity time per instance (epoch ms). */
    private readonly lastActivity;
    /** Synced canvas graph: node id → Agent class (null when unbound). */
    private readonly graphNodes;
    /** Synced canvas edges: the authoritative flow policy. */
    private graphEdges;
    private root;
    private sanitize;
    private dir;
    private graphFile;
    /** Restore the persisted canvas graph, or leave it empty when none/invalid. */
    private loadGraph;
    /** Persist the synced canvas graph so it survives a `dsh web` restart. */
    private persistGraph;
    /**
     * Create an agent directory with an initial `agent.json`.
     * @param id - stable agent id (directory name, sanitized).
     * @param name - initial display name.
     * @returns the agent id.
     */
    create(id: string, name: string): Promise<string>;
    /**
     * Save agent properties into its `agent.json` (creating the dir if needed).
     * @param id - stable agent id (directory name, sanitized).
     * @param props - name, prompt, mode and space toggle to persist.
     * @returns the agent id.
     */
    save(id: string, props: AgentProperties): Promise<string>;
    /**
     * Delete an agent directory and its contents.
     * @param id - stable agent id (directory name, sanitized).
     * @returns the agent id.
     */
    delete(id: string): Promise<string>;
    /**
     * Record which Agent class a running instance (session) belongs to.
     * @param sessionId - the instance's session id.
     * @param agentId - the Agent class id.
     * @returns the session id.
     */
    reportBinding(sessionId: string, agentId: string): Promise<string>;
    /**
     * Resolve an instance's Agent class, or null when unbound.
     * @param sessionId - the instance's session id.
     * @returns the Agent class id, or null.
     */
    classOf(sessionId: string): string | null;
    /**
     * List the Agent classes on disk (each directory under the cluster-agents
     * root with a readable `agent.json`): directory id + persisted name/prompt.
     * @returns one entry per class; empty when the root is missing.
     */
    listAgents(): Promise<Array<{
        id: string;
    } & AgentProperties>>;
    /**
     * Read an Agent class's persisted properties (`agent.json`), or null when the
     * file is missing or malformed. Synchronous so prompt-assembly providers can
     * resolve a class's persona without yielding.
     * @param agentId - the Agent class id.
     * @returns the persisted name + prompt, or null.
     */
    classMeta(agentId: string): AgentProperties | null;
    /**
     * The absolute on-disk directory of an Agent class (its "space").
     * @param agentId - the Agent class id.
     * @returns the absolute directory path.
     */
    agentDirPath(agentId: string): string;
    /**
     * Open an Agent class's directory in the operating system file explorer.
     * @param id - stable agent id (directory name, sanitized).
     * @returns the opened absolute directory path.
     */
    openAgentSpace(id: string): Promise<string>;
    /**
     * Resolve an Agent class's display name, or "default" when unknown/missing.
     * @param agentId - the Agent class id.
     * @returns the display name (fallback "default").
     */
    className(agentId: string): string;
    /**
     * Record cluster activity for an instance.
     * @param sessionId - the instance's session id.
     */
    touch(sessionId: string): void;
    /**
     * The instance's last cluster-activity time, or null when unknown.
     * @param sessionId - the instance's session id.
     * @returns epoch ms, or null.
     */
    lastActiveAt(sessionId: string): number | null;
    /**
     * Whether the canvas graph allows `from → to` (self-flow always allowed).
     * @param from - source Agent class id.
     * @param to - target Agent class id.
     * @returns true when the flow is allowed.
     */
    allowFlow(from: string, to: string): boolean;
    /**
     * Replace the synced canvas graph: nodes (id + class) and edges (flow policy).
     * @param nodes - node id → Agent class bindings.
     * @param edges - directed flow edges.
     * @returns the number of synced edges.
     */
    syncGraph(nodes: GraphNodeSync[], edges: GraphEdgeSync[]): Promise<number>;
}
export default ClusterAgentFsService;
//# sourceMappingURL=index.d.ts.map