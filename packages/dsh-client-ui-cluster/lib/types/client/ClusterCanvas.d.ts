import type { InjectFace, PropsLocale, PropsRuntime, PropsStore } from '@deepseek-ai/dsh-client-ui-slots';
import type { createClusterStore } from './stores.ts';
import type { ClusterGraphPort } from './port.ts';
/** Full canvas props: runtime hooks, the shared store, locale, and the session port. */
export type ClusterCanvasProps = PropsRuntime<'shell.overlay'> & PropsStore<ReturnType<typeof createClusterStore>> & PropsLocale<'cluster'> & InjectFace<ClusterGraphPort>;
/**
 * The canvas: a node-graph editor with drag, connect, direction cycling, grid
 * snapping, txt export/load, and per-node agent entry (nodes open native
 * conversations). Nodes and edges live in the shared store so the graph
 * survives closing and reopening the canvas.
 */
export declare function ClusterCanvas({ useStore, actions, t, useWorkspaces, enterNode, openSession, createAgentDir, saveAgentFile, deleteAgentDir, openAgentSpace, reportBinding, syncGraph }: ClusterCanvasProps): import("react").JSX.Element | null;
//# sourceMappingURL=ClusterCanvas.d.ts.map