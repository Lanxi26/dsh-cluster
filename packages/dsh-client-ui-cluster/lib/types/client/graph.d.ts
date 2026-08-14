/** Graph model and geometry helpers for the cluster canvas. */
export type GridSize = 'small' | 'medium' | 'large';
export type EdgeDirection = 'none' | 'single' | 'double';
export interface GraphNode {
    id: string;
    x: number;
    y: number;
    label: string;
    /** Runtime session ids entered from this node (not part of the txt shape). */
    instances: string[];
    /** Bound Agent id (an id from the Agent list); part of the txt shape. */
    agentId: string | null;
}
export interface GraphEdge {
    id: string;
    from: string;
    to: string;
    direction: EdgeDirection;
}
/** How a cluster Agent is addressed across instances. */
export type AgentMode = 'single' | 'multi' | 'any';
/** A user-defined Agent definition (name + prompt + mode + space), not yet linked to sessions. */
export interface AgentDef {
    id: string;
    name: string;
    prompt: string;
    mode: AgentMode;
    spaceEnabled: boolean;
}
/** Node footprint in canvas px (fixed for now). */
export declare const NODE_WIDTH = 120;
export declare const NODE_HEIGHT = 48;
/** Grid step in px per preset. */
export declare const GRID_PX: Record<GridSize, number>;
/** The center of a node in canvas coordinates. */
export declare function nodeCenter(node: GraphNode): {
    x: number;
    y: number;
};
/** Snap a coordinate to the nearest grid line (identity when step <= 1). */
export declare function snap(value: number, step: number): number;
/**
 * The two border points of an edge between two nodes: the center-to-center
 * direction is clipped at each node's rectangle so arrowheads stay visible
 * beside the node instead of hidden under it.
 */
export declare function edgePoints(a: GraphNode, b: GraphNode): {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};
/** A serialized graph snapshot (round-trips through a txt file). */
export interface GraphSnapshot {
    nodes: GraphNode[];
    edges: GraphEdge[];
    /** Agent definitions (name/prompt/mode/space), carried from v2 onward. */
    agents: AgentDef[];
}
/** Serialize the graph shape plus its Agent definitions to pretty-printed JSON (instances are runtime-only, omitted). */
export declare function serializeGraph(nodes: readonly GraphNode[], edges: readonly GraphEdge[], agents: readonly AgentDef[]): string;
/** Parse txt content back into a graph snapshot; throws on invalid input. */
export declare function parseGraph(text: string): GraphSnapshot;
//# sourceMappingURL=graph.d.ts.map