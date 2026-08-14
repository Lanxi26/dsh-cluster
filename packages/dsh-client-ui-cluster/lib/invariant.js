//#region lib/types/invariant.js
/**
* Package-owned invariant companion for `@lanxi266/dsh-client-ui-cluster`.
* @module @lanxi266/dsh-client-ui-cluster/invariant
*/
const PACKAGE_NAME = "@lanxi266/dsh-client-ui-cluster";
/** Cordis companion plugin name. */
const name = "client-ui-cluster-invariant";
/** Service required before the companion can reserve package ownership. */
const inject = ["invariants"];
/**
* No runtime invariant: a pure-consumer presentation plugin that emits no
* cordis events and owns no cross-plugin mutable state; its open/closed view
* state lives in a package-local store and its interaction behavior is
* asserted by this package's component specs.
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
