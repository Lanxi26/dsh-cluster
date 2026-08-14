/**
 * Model-facing cluster tools: `cluster_view` lists the live agent instances an
 * agent can interact with, and `cluster_send` messages one of them through the
 * native session inbox (reusing `Agent.followup`), so the target sees it as an
 * ordinary user message prefixed with its origin.
 * @module @lanxi266/dsh-tool-cluster
 */
import type { Context } from '@deepseek-ai/cordis';
export declare const name = "tool-cluster";
export declare const inject: string[];
/**
 * Register the two tools.
 * @param ctx - Host context carrying the tools and agents services.
 */
export declare function apply(ctx: Context): void;
//# sourceMappingURL=index.d.ts.map