/**
 * Package-owned invariant companion for `@lanxi266/dsh-cluster-agent-fs`.
 * @module @lanxi266/dsh-cluster-agent-fs/invariant
 */
const PACKAGE_NAME = '@lanxi266/dsh-cluster-agent-fs';
/** Cordis companion plugin name. */
export const name = 'cluster-agent-fs-invariant';
/** Service required before the companion can reserve package ownership. */
export const inject = ['invariants'];
/**
 * No runtime invariant: a pure filesystem-sidecar service whose write/delete
 * paths are asserted by package tests; it owns no cross-plugin mutable state
 * and emits no cordis events.
 */
const install = () => { };
/**
 * Register this package's invariant companion.
 * @param ctx - Cordis context carrying the invariant service.
 * @returns the installed registration's disposer after setup succeeds.
 */
export const apply = (ctx) => Promise.resolve(ctx.invariants.register(PACKAGE_NAME, install));
/* jscpd:ignore-end */
//# sourceMappingURL=invariant.js.map