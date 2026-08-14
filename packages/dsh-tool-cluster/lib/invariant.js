//#region lib/types/invariant.js
/**
* Package-owned invariant companion for `@lanxi266/dsh-tool-cluster`.
* @module @lanxi266/dsh-tool-cluster/invariant
*/
const PACKAGE_NAME = "@lanxi266/dsh-tool-cluster";
/** Cordis companion plugin name. */
const name = "tool-cluster-invariant";
/** Service required before the companion can reserve package ownership. */
const inject = ["invariants"];
/**
* No runtime invariant: a pure tool registration whose schema and message
* delivery are asserted by this package's tests; it owns no cross-plugin
* mutable state and emits no cordis events of its own.
*/
const install = () => {};
/**
* Register this package's invariant companion.
* @param ctx - Cordis context carrying the invariant service.
* @returns the installed registration's disposer after setup succeeds.
*/
const apply = (ctx) => Promise.resolve(ctx.invariants.register(PACKAGE_NAME, install));
//#endregion
export { apply, inject, name };
