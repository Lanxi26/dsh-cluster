import type { InjectFace, PropsLocale, PropsRuntime, PropsStore } from '@deepseek-ai/dsh-client-ui-slots';
import type { createClusterStore } from './stores.ts';
import type { ClusterGraphPort } from './port.ts';
/** Full action props: sidebar owner state, the shared store, and locale. */
export type ClusterActionProps = PropsRuntime<'sidebar.footer.action'> & PropsStore<ReturnType<typeof createClusterStore>> & PropsLocale<'cluster'> & InjectFace<ClusterGraphPort>;
/**
 * The foot action button: a four-node cluster glyph, with the label shown
 * only while the sidebar renders wide content.
 */
export declare function ClusterAction({ wide, useStore, actions, t, syncGraph }: ClusterActionProps): import("react").JSX.Element;
//# sourceMappingURL=ClusterAction.d.ts.map