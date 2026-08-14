/** Cluster-mode surface: a sidebar foot action and a frame-wide node-graph canvas. */
import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client';
import { type ClusterKey } from './locales.ts';
export type { ClusterActionProps } from './ClusterAction.tsx';
export type { ClusterCanvasProps } from './ClusterCanvas.tsx';
export type { ClusterKey } from './locales.ts';
export type { ClusterGraphPort } from './port.ts';
declare module '@deepseek-ai/dsh-client-ui-slots' {
    interface LocaleNamespaceMap {
        /** Cluster-mode surface copy. */
        cluster: ClusterKey;
    }
}
/** Services required by the cluster-mode surface. */
export declare const inject: string[];
/**
 * Register the sidebar foot action and the frame-wide canvas overlay. Both
 * entries share one store handle so the button and the canvas agree on the
 * open/closed state; the canvas also receives a session-navigation port that
 * turns nodes into agents the user can enter as native conversations.
 * @param ctx - Client root context.
 */
export declare function apply(ctx: ClientContext): void;
//# sourceMappingURL=index.d.ts.map