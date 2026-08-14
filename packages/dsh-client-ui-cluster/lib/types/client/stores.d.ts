/** Cluster-mode store: canvas open/closed state plus the node-graph editor state. */
import { type EngineStoreHandle } from '@deepseek-ai/dsh-client-runtime/client';
import { type AgentDef, type AgentMode, type GraphEdge, type GraphNode, type GridSize } from './graph.ts';
type ClusterState = {
    open: boolean;
    nodes: GraphNode[];
    edges: GraphEdge[];
    selectedNodeId: string | null;
    selectedEdgeId: string | null;
    connectMode: boolean;
    connectSourceId: string | null;
    menuNodeId: string | null;
    enterMode: boolean;
    expandMode: boolean;
    expandTargetId: string | null;
    registerMode: boolean;
    registerTargetId: string | null;
    renameMode: boolean;
    renameTargetId: string | null;
    gridEnabled: boolean;
    gridSize: GridSize;
    nodeSeq: number;
    edgeSeq: number;
    agents: AgentDef[];
    agentSeq: number;
    agentsBarOpen: boolean;
};
type ClusterActions = {
    setOpen: (d: ClusterState, open: boolean) => void;
    addNode: (d: ClusterState, cx: number, cy: number) => void;
    moveNode: (d: ClusterState, id: string, x: number, y: number) => void;
    deleteNode: (d: ClusterState, id: string) => void;
    deleteEdge: (d: ClusterState, id: string) => void;
    deleteSelection: (d: ClusterState) => void;
    selectNode: (d: ClusterState, id: string) => void;
    selectEdge: (d: ClusterState, id: string) => void;
    clearSelection: (d: ClusterState) => void;
    toggleConnectMode: (d: ClusterState) => void;
    startConnect: (d: ClusterState, id: string) => void;
    cancelConnect: (d: ClusterState) => void;
    pickConnectNode: (d: ClusterState, id: string) => void;
    cycleEdgeDirection: (d: ClusterState, id: string) => void;
    openMenu: (d: ClusterState, id: string) => void;
    closeMenu: (d: ClusterState) => void;
    toggleGrid: (d: ClusterState) => void;
    setGridSize: (d: ClusterState, size: GridSize) => void;
    loadGraph: (d: ClusterState, nodes: GraphNode[], edges: GraphEdge[]) => void;
    loadAgents: (d: ClusterState, agents: AgentDef[]) => void;
    addInstance: (d: ClusterState, nodeId: string, sessionId: string) => void;
    toggleEnterMode: (d: ClusterState) => void;
    toggleExpandMode: (d: ClusterState) => void;
    openInstanceList: (d: ClusterState, nodeId: string) => void;
    closeInstanceList: (d: ClusterState) => void;
    toggleRegisterMode: (d: ClusterState) => void;
    openRegisterList: (d: ClusterState, nodeId: string) => void;
    closeRegisterList: (d: ClusterState) => void;
    toggleRenameMode: (d: ClusterState) => void;
    openRenameInput: (d: ClusterState, nodeId: string) => void;
    closeRenameInput: (d: ClusterState) => void;
    renameNode: (d: ClusterState, id: string, label: string) => void;
    bindAgentToNode: (d: ClusterState, nodeId: string, agentId: string | null) => void;
    addAgent: (d: ClusterState, id: string, name: string, prompt: string, mode: AgentMode) => void;
    deleteAgent: (d: ClusterState, id: string) => void;
    updateAgent: (d: ClusterState, id: string, patch: Partial<Pick<AgentDef, 'name' | 'prompt' | 'mode' | 'spaceEnabled'>>) => void;
    setAgentsBarOpen: (d: ClusterState, open: boolean) => void;
};
/**
 * Create the cluster-mode store handle. One handle is shared by the sidebar
 * action and the canvas entry, so the open/closed state stays in sync across
 * both; the graph state rides the same store and therefore survives opening
 * and closing the canvas.
 * @returns the store handle (spec + type + identity + factory in one).
 */
export declare function createClusterStore(): EngineStoreHandle<ClusterState, ClusterActions>;
export {};
//# sourceMappingURL=stores.d.ts.map