/** Public Remote boundary types for the cluster Agent filesystem service. */
/** How a cluster Agent is addressed across instances. */
export type AgentMode = 'single' | 'multi' | 'any';
/** Persisted agent properties (name + prompt + mode + space). */
export interface AgentProperties {
    name: string;
    prompt: string;
    mode: AgentMode;
    /** Whether this Agent's on-disk "space" (folder) is enabled and injected. */
    spaceEnabled: boolean;
}
/** Synced canvas node: id plus its bound Agent class (null when unbound). */
export interface GraphNodeSync {
    id: string;
    agentId: string | null;
}
/** Synced canvas edge: directed flow between two nodes. */
export interface GraphEdgeSync {
    from: string;
    to: string;
    direction: 'none' | 'single' | 'double';
}
//# sourceMappingURL=types.d.ts.map