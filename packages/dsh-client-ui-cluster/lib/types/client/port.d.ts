/** Client↔apply graph port: session-navigation callbacks the canvas consumes. */
import type { AgentMode } from './graph.ts';
export interface ClusterGraphPort {
    /**
     * Create-and-open a fresh conversation for a node, returning its session id.
     * `workspaceId` comes from the framework `useWorkspaces` hook; when absent
     * the native New Session flow runs and the id is unavailable (`null`).
     */
    enterNode: (workspaceId: string | undefined) => Promise<string | null>;
    /** Open an existing conversation (native session navigation). */
    openSession: (sessionId: string) => void;
    /** Create the on-disk directory for a new Agent (Host filesystem). */
    createAgentDir: (id: string, name: string) => Promise<void>;
    /** Persist an Agent's properties to its `agent.json` (Host filesystem). */
    saveAgentFile: (id: string, props: {
        name: string;
        prompt: string;
        mode: AgentMode;
        spaceEnabled: boolean;
    }) => Promise<void>;
    /** Open an Agent's on-disk space (folder) in the OS file explorer. */
    openAgentSpace: (id: string) => Promise<string>;
    /** Delete an Agent's directory (Host filesystem). */
    deleteAgentDir: (id: string) => Promise<void>;
    /** Report that a session (instance) belongs to an Agent class. */
    reportBinding: (sessionId: string, agentId: string) => Promise<void>;
    /** Sync the canvas graph (nodes + edges) to the Host flow-policy authority. */
    syncGraph: (nodes: Array<{
        id: string;
        agentId: string | null;
    }>, edges: Array<{
        from: string;
        to: string;
        direction: 'none' | 'single' | 'double';
    }>) => Promise<void>;
}
//# sourceMappingURL=port.d.ts.map