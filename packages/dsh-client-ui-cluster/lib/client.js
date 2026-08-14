window.__ModuleLoader__.load({
	id: "@lanxi266/dsh-client-ui-cluster",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let react_jsx_runtime = require("react/jsx-runtime");
		let _deepseek_ai_dsh_client_runtime_client = require("@deepseek-ai/dsh-client-runtime/client");
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/core.js
		var _a$1;
		function $constructor(name, initializer, params) {
			function init(inst, def) {
				if (!inst._zod) Object.defineProperty(inst, "_zod", {
					value: {
						def,
						constr: _,
						traits: /* @__PURE__ */ new Set()
					},
					enumerable: false
				});
				if (inst._zod.traits.has(name)) return;
				inst._zod.traits.add(name);
				initializer(inst, def);
				const proto = _.prototype;
				const keys = Object.keys(proto);
				for (let i = 0; i < keys.length; i++) {
					const k = keys[i];
					if (!(k in inst)) inst[k] = proto[k].bind(inst);
				}
			}
			const Parent = params?.Parent ?? Object;
			class Definition extends Parent {}
			Object.defineProperty(Definition, "name", { value: name });
			function _(def) {
				var _a;
				const inst = params?.Parent ? new Definition() : this;
				init(inst, def);
				(_a = inst._zod).deferred ?? (_a.deferred = []);
				for (const fn of inst._zod.deferred) fn();
				return inst;
			}
			Object.defineProperty(_, "init", { value: init });
			Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
				if (params?.Parent && inst instanceof params.Parent) return true;
				return inst?._zod?.traits?.has(name);
			} });
			Object.defineProperty(_, "name", { value: name });
			return _;
		}
		var $ZodAsyncError = class extends Error {
			constructor() {
				super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
			}
		};
		var $ZodEncodeError = class extends Error {
			constructor(name) {
				super(`Encountered unidirectional transform during encode: ${name}`);
				this.name = "ZodEncodeError";
			}
		};
		(_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
		const globalConfig = globalThis.__zod_globalConfig;
		function config(newConfig) {
			if (newConfig) Object.assign(globalConfig, newConfig);
			return globalConfig;
		}
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/util.js
		function getEnumValues(entries) {
			const numericValues = Object.values(entries).filter((v) => typeof v === "number");
			return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
		}
		function jsonStringifyReplacer(_, value) {
			if (typeof value === "bigint") return value.toString();
			return value;
		}
		function cached(getter) {
			return { get value() {
				{
					const value = getter();
					Object.defineProperty(this, "value", { value });
					return value;
				}
				throw new Error("cached value already set");
			} };
		}
		function nullish(input) {
			return input === null || input === void 0;
		}
		function cleanRegex(source) {
			const start = source.startsWith("^") ? 1 : 0;
			const end = source.endsWith("$") ? source.length - 1 : source.length;
			return source.slice(start, end);
		}
		function floatSafeRemainder(val, step) {
			const ratio = val / step;
			const roundedRatio = Math.round(ratio);
			const tolerance = Number.EPSILON * Math.max(Math.abs(ratio), 1);
			if (Math.abs(ratio - roundedRatio) < tolerance) return 0;
			return ratio - roundedRatio;
		}
		const EVALUATING = /* @__PURE__*/ Symbol("evaluating");
		function defineLazy(object, key, getter) {
			let value = void 0;
			Object.defineProperty(object, key, {
				get() {
					if (value === EVALUATING) return;
					if (value === void 0) {
						value = EVALUATING;
						value = getter();
					}
					return value;
				},
				set(v) {
					Object.defineProperty(object, key, { value: v });
				},
				configurable: true
			});
		}
		function assignProp(target, prop, value) {
			Object.defineProperty(target, prop, {
				value,
				writable: true,
				enumerable: true,
				configurable: true
			});
		}
		function mergeDefs(...defs) {
			const mergedDescriptors = {};
			for (const def of defs) Object.assign(mergedDescriptors, Object.getOwnPropertyDescriptors(def));
			return Object.defineProperties({}, mergedDescriptors);
		}
		function esc(str) {
			return JSON.stringify(str);
		}
		function slugify(input) {
			return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
		}
		const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
		function isObject(data) {
			return typeof data === "object" && data !== null && !Array.isArray(data);
		}
		const allowsEval = /* @__PURE__*/ cached(() => {
			if (globalConfig.jitless) return false;
			if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
			try {
				new Function("");
				return true;
			} catch (_) {
				return false;
			}
		});
		function isPlainObject(o) {
			if (isObject(o) === false) return false;
			const ctor = o.constructor;
			if (ctor === void 0) return true;
			if (typeof ctor !== "function") return true;
			const prot = ctor.prototype;
			if (isObject(prot) === false) return false;
			if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
			return true;
		}
		function shallowClone(o) {
			if (isPlainObject(o)) return { ...o };
			if (Array.isArray(o)) return [...o];
			if (o instanceof Map) return new Map(o);
			if (o instanceof Set) return new Set(o);
			return o;
		}
		const propertyKeyTypes = /* @__PURE__*/ new Set([
			"string",
			"number",
			"symbol"
		]);
		function escapeRegex(str) {
			return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}
		function clone(inst, def, params) {
			const cl = new inst._zod.constr(def ?? inst._zod.def);
			if (!def || params?.parent) cl._zod.parent = inst;
			return cl;
		}
		function normalizeParams(_params) {
			const params = _params;
			if (!params) return {};
			if (typeof params === "string") return { error: () => params };
			if (params?.message !== void 0) {
				if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
				params.error = params.message;
			}
			delete params.message;
			if (typeof params.error === "string") return {
				...params,
				error: () => params.error
			};
			return params;
		}
		function optionalKeys(shape) {
			return Object.keys(shape).filter((k) => {
				return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
			});
		}
		const NUMBER_FORMAT_RANGES = {
			safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
			int32: [-2147483648, 2147483647],
			uint32: [0, 4294967295],
			float32: [-34028234663852886e22, 34028234663852886e22],
			float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
		};
		function pick(schema, mask) {
			const currDef = schema._zod.def;
			const checks = currDef.checks;
			if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const newShape = {};
					for (const key in mask) {
						if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						newShape[key] = currDef.shape[key];
					}
					assignProp(this, "shape", newShape);
					return newShape;
				},
				checks: []
			}));
		}
		function omit(schema, mask) {
			const currDef = schema._zod.def;
			const checks = currDef.checks;
			if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const newShape = { ...schema._zod.def.shape };
					for (const key in mask) {
						if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						delete newShape[key];
					}
					assignProp(this, "shape", newShape);
					return newShape;
				},
				checks: []
			}));
		}
		function extend(schema, shape) {
			if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
			const checks = schema._zod.def.checks;
			if (checks && checks.length > 0) {
				const existingShape = schema._zod.def.shape;
				for (const key in shape) if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
			}
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const _shape = {
					...schema._zod.def.shape,
					...shape
				};
				assignProp(this, "shape", _shape);
				return _shape;
			} }));
		}
		function safeExtend(schema, shape) {
			if (!isPlainObject(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const _shape = {
					...schema._zod.def.shape,
					...shape
				};
				assignProp(this, "shape", _shape);
				return _shape;
			} }));
		}
		function merge(a, b) {
			if (a._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
			return clone(a, mergeDefs(a._zod.def, {
				get shape() {
					const _shape = {
						...a._zod.def.shape,
						...b._zod.def.shape
					};
					assignProp(this, "shape", _shape);
					return _shape;
				},
				get catchall() {
					return b._zod.def.catchall;
				},
				checks: b._zod.def.checks ?? []
			}));
		}
		function partial(Class, schema, mask) {
			const checks = schema._zod.def.checks;
			if (checks && checks.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const oldShape = schema._zod.def.shape;
					const shape = { ...oldShape };
					if (mask) for (const key in mask) {
						if (!(key in oldShape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						shape[key] = Class ? new Class({
							type: "optional",
							innerType: oldShape[key]
						}) : oldShape[key];
					}
					else for (const key in oldShape) shape[key] = Class ? new Class({
						type: "optional",
						innerType: oldShape[key]
					}) : oldShape[key];
					assignProp(this, "shape", shape);
					return shape;
				},
				checks: []
			}));
		}
		function required(Class, schema, mask) {
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const oldShape = schema._zod.def.shape;
				const shape = { ...oldShape };
				if (mask) for (const key in mask) {
					if (!(key in shape)) throw new Error(`Unrecognized key: "${key}"`);
					if (!mask[key]) continue;
					shape[key] = new Class({
						type: "nonoptional",
						innerType: oldShape[key]
					});
				}
				else for (const key in oldShape) shape[key] = new Class({
					type: "nonoptional",
					innerType: oldShape[key]
				});
				assignProp(this, "shape", shape);
				return shape;
			} }));
		}
		function aborted(x, startIndex = 0) {
			if (x.aborted === true) return true;
			for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
			return false;
		}
		function explicitlyAborted(x, startIndex = 0) {
			if (x.aborted === true) return true;
			for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue === false) return true;
			return false;
		}
		function prefixIssues(path, issues) {
			return issues.map((iss) => {
				var _a;
				(_a = iss).path ?? (_a.path = []);
				iss.path.unshift(path);
				return iss;
			});
		}
		function unwrapMessage(message) {
			return typeof message === "string" ? message : message?.message;
		}
		function finalizeIssue(iss, ctx, config) {
			const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
			const { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
			rest.path ?? (rest.path = []);
			rest.message = message;
			if (ctx?.reportInput) rest.input = _input;
			return rest;
		}
		function getLengthableOrigin(input) {
			if (Array.isArray(input)) return "array";
			if (typeof input === "string") return "string";
			return "unknown";
		}
		function issue(...args) {
			const [iss, input, inst] = args;
			if (typeof iss === "string") return {
				message: iss,
				code: "custom",
				input,
				inst
			};
			return { ...iss };
		}
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/errors.js
		const initializer$1 = (inst, def) => {
			inst.name = "$ZodError";
			Object.defineProperty(inst, "_zod", {
				value: inst._zod,
				enumerable: false
			});
			Object.defineProperty(inst, "issues", {
				value: def,
				enumerable: false
			});
			inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
			Object.defineProperty(inst, "toString", {
				value: () => inst.message,
				enumerable: false
			});
		};
		const $ZodError = $constructor("$ZodError", initializer$1);
		const $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
		function flattenError(error, mapper = (issue) => issue.message) {
			const fieldErrors = {};
			const formErrors = [];
			for (const sub of error.issues) if (sub.path.length > 0) {
				fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
				fieldErrors[sub.path[0]].push(mapper(sub));
			} else formErrors.push(mapper(sub));
			return {
				formErrors,
				fieldErrors
			};
		}
		function formatError(error, mapper = (issue) => issue.message) {
			const fieldErrors = { _errors: [] };
			const processError = (error, path = []) => {
				for (const issue of error.issues) if (issue.code === "invalid_union" && issue.errors.length) issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
				else if (issue.code === "invalid_key") processError({ issues: issue.issues }, [...path, ...issue.path]);
				else if (issue.code === "invalid_element") processError({ issues: issue.issues }, [...path, ...issue.path]);
				else {
					const fullpath = [...path, ...issue.path];
					if (fullpath.length === 0) fieldErrors._errors.push(mapper(issue));
					else {
						let curr = fieldErrors;
						let i = 0;
						while (i < fullpath.length) {
							const el = fullpath[i];
							if (!(i === fullpath.length - 1)) curr[el] = curr[el] || { _errors: [] };
							else {
								curr[el] = curr[el] || { _errors: [] };
								curr[el]._errors.push(mapper(issue));
							}
							curr = curr[el];
							i++;
						}
					}
				}
			};
			processError(error);
			return fieldErrors;
		}
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/parse.js
		const _parse = (_Err) => (schema, value, _ctx, _params) => {
			const ctx = _ctx ? {
				..._ctx,
				async: false
			} : { async: false };
			const result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) throw new $ZodAsyncError();
			if (result.issues.length) {
				const e = new ((_params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
				captureStackTrace(e, _params?.callee);
				throw e;
			}
			return result.value;
		};
		const _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
			const ctx = _ctx ? {
				..._ctx,
				async: true
			} : { async: true };
			let result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) result = await result;
			if (result.issues.length) {
				const e = new ((params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
				captureStackTrace(e, params?.callee);
				throw e;
			}
			return result.value;
		};
		const _safeParse = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				async: false
			} : { async: false };
			const result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) throw new $ZodAsyncError();
			return result.issues.length ? {
				success: false,
				error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			} : {
				success: true,
				data: result.value
			};
		};
		const safeParse$1 = /* @__PURE__*/ _safeParse($ZodRealError);
		const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				async: true
			} : { async: true };
			let result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) result = await result;
			return result.issues.length ? {
				success: false,
				error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			} : {
				success: true,
				data: result.value
			};
		};
		const safeParseAsync$1 = /* @__PURE__*/ _safeParseAsync($ZodRealError);
		const _encode = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _parse(_Err)(schema, value, ctx);
		};
		const _decode = (_Err) => (schema, value, _ctx) => {
			return _parse(_Err)(schema, value, _ctx);
		};
		const _encodeAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _parseAsync(_Err)(schema, value, ctx);
		};
		const _decodeAsync = (_Err) => async (schema, value, _ctx) => {
			return _parseAsync(_Err)(schema, value, _ctx);
		};
		const _safeEncode = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _safeParse(_Err)(schema, value, ctx);
		};
		const _safeDecode = (_Err) => (schema, value, _ctx) => {
			return _safeParse(_Err)(schema, value, _ctx);
		};
		const _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _safeParseAsync(_Err)(schema, value, ctx);
		};
		const _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
			return _safeParseAsync(_Err)(schema, value, _ctx);
		};
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/regexes.js
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link cuid2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const cuid = /^[cC][0-9a-z]{6,}$/;
		const cuid2 = /^[0-9a-z]+$/;
		const ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
		const xid = /^[0-9a-vA-V]{20}$/;
		const ksuid = /^[A-Za-z0-9]{27}$/;
		const nanoid = /^[a-zA-Z0-9_-]{21}$/;
		/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
		const duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
		/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
		const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
		/** Returns a regex for validating an RFC 9562/4122 UUID.
		*
		* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
		const uuid = (version) => {
			if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
			return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
		};
		/** Practical email validation */
		const email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
		const _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
		function emoji() {
			return new RegExp(_emoji$1, "u");
		}
		const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
		const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
		const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
		const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
		const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
		const base64url = /^[A-Za-z0-9_-]*$/;
		const httpProtocol = /^https?$/;
		const e164 = /^\+[1-9]\d{6,14}$/;
		const dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
		const date$1 = /*@__PURE__*/ new RegExp(`^${dateSource}$`);
		function timeSource(args) {
			const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
			return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
		}
		function time$1(args) {
			return new RegExp(`^${timeSource(args)}$`);
		}
		function datetime$1(args) {
			const time = timeSource({ precision: args.precision });
			const opts = ["Z"];
			if (args.local) opts.push("");
			if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
			const timeRegex = `${time}(?:${opts.join("|")})`;
			return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
		}
		const string$1 = (params) => {
			const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
			return new RegExp(`^${regex}$`);
		};
		const integer = /^-?\d+$/;
		const number$1 = /^-?\d+(?:\.\d+)?$/;
		const boolean$1 = /^(?:true|false)$/i;
		const lowercase = /^[^A-Z]*$/;
		const uppercase = /^[^a-z]*$/;
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/checks.js
		const $ZodCheck = /*@__PURE__*/ $constructor("$ZodCheck", (inst, def) => {
			var _a;
			inst._zod ?? (inst._zod = {});
			inst._zod.def = def;
			(_a = inst._zod).onattach ?? (_a.onattach = []);
		});
		const numericOriginMap = {
			number: "number",
			bigint: "bigint",
			object: "date"
		};
		const $ZodCheckLessThan = /*@__PURE__*/ $constructor("$ZodCheckLessThan", (inst, def) => {
			$ZodCheck.init(inst, def);
			const origin = numericOriginMap[typeof def.value];
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
				if (def.value < curr) if (def.inclusive) bag.maximum = def.value;
				else bag.exclusiveMaximum = def.value;
			});
			inst._zod.check = (payload) => {
				if (def.inclusive ? payload.value <= def.value : payload.value < def.value) return;
				payload.issues.push({
					origin,
					code: "too_big",
					maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
					input: payload.value,
					inclusive: def.inclusive,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckGreaterThan = /*@__PURE__*/ $constructor("$ZodCheckGreaterThan", (inst, def) => {
			$ZodCheck.init(inst, def);
			const origin = numericOriginMap[typeof def.value];
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
				if (def.value > curr) if (def.inclusive) bag.minimum = def.value;
				else bag.exclusiveMinimum = def.value;
			});
			inst._zod.check = (payload) => {
				if (def.inclusive ? payload.value >= def.value : payload.value > def.value) return;
				payload.issues.push({
					origin,
					code: "too_small",
					minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
					input: payload.value,
					inclusive: def.inclusive,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckMultipleOf = /*@__PURE__*/ $constructor("$ZodCheckMultipleOf", (inst, def) => {
			$ZodCheck.init(inst, def);
			inst._zod.onattach.push((inst) => {
				var _a;
				(_a = inst._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
			});
			inst._zod.check = (payload) => {
				if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
				if (typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0) return;
				payload.issues.push({
					origin: typeof payload.value,
					code: "not_multiple_of",
					divisor: def.value,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckNumberFormat = /*@__PURE__*/ $constructor("$ZodCheckNumberFormat", (inst, def) => {
			$ZodCheck.init(inst, def);
			def.format = def.format || "float64";
			const isInt = def.format?.includes("int");
			const origin = isInt ? "int" : "number";
			const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.format = def.format;
				bag.minimum = minimum;
				bag.maximum = maximum;
				if (isInt) bag.pattern = integer;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (isInt) {
					if (!Number.isInteger(input)) {
						payload.issues.push({
							expected: origin,
							format: def.format,
							code: "invalid_type",
							continue: false,
							input,
							inst
						});
						return;
					}
					if (!Number.isSafeInteger(input)) {
						if (input > 0) payload.issues.push({
							input,
							code: "too_big",
							maximum: Number.MAX_SAFE_INTEGER,
							note: "Integers must be within the safe integer range.",
							inst,
							origin,
							inclusive: true,
							continue: !def.abort
						});
						else payload.issues.push({
							input,
							code: "too_small",
							minimum: Number.MIN_SAFE_INTEGER,
							note: "Integers must be within the safe integer range.",
							inst,
							origin,
							inclusive: true,
							continue: !def.abort
						});
						return;
					}
				}
				if (input < minimum) payload.issues.push({
					origin: "number",
					input,
					code: "too_small",
					minimum,
					inclusive: true,
					inst,
					continue: !def.abort
				});
				if (input > maximum) payload.issues.push({
					origin: "number",
					input,
					code: "too_big",
					maximum,
					inclusive: true,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckMaxLength = /*@__PURE__*/ $constructor("$ZodCheckMaxLength", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
				if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (input.length <= def.maximum) return;
				const origin = getLengthableOrigin(input);
				payload.issues.push({
					origin,
					code: "too_big",
					maximum: def.maximum,
					inclusive: true,
					input,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckMinLength = /*@__PURE__*/ $constructor("$ZodCheckMinLength", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
				if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (input.length >= def.minimum) return;
				const origin = getLengthableOrigin(input);
				payload.issues.push({
					origin,
					code: "too_small",
					minimum: def.minimum,
					inclusive: true,
					input,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckLengthEquals = /*@__PURE__*/ $constructor("$ZodCheckLengthEquals", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.minimum = def.length;
				bag.maximum = def.length;
				bag.length = def.length;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				const length = input.length;
				if (length === def.length) return;
				const origin = getLengthableOrigin(input);
				const tooBig = length > def.length;
				payload.issues.push({
					origin,
					...tooBig ? {
						code: "too_big",
						maximum: def.length
					} : {
						code: "too_small",
						minimum: def.length
					},
					inclusive: true,
					exact: true,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckStringFormat = /*@__PURE__*/ $constructor("$ZodCheckStringFormat", (inst, def) => {
			var _a, _b;
			$ZodCheck.init(inst, def);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.format = def.format;
				if (def.pattern) {
					bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
					bag.patterns.add(def.pattern);
				}
			});
			if (def.pattern) (_a = inst._zod).check ?? (_a.check = (payload) => {
				def.pattern.lastIndex = 0;
				if (def.pattern.test(payload.value)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: def.format,
					input: payload.value,
					...def.pattern ? { pattern: def.pattern.toString() } : {},
					inst,
					continue: !def.abort
				});
			});
			else (_b = inst._zod).check ?? (_b.check = () => {});
		});
		const $ZodCheckRegex = /*@__PURE__*/ $constructor("$ZodCheckRegex", (inst, def) => {
			$ZodCheckStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				def.pattern.lastIndex = 0;
				if (def.pattern.test(payload.value)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "regex",
					input: payload.value,
					pattern: def.pattern.toString(),
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckLowerCase = /*@__PURE__*/ $constructor("$ZodCheckLowerCase", (inst, def) => {
			def.pattern ?? (def.pattern = lowercase);
			$ZodCheckStringFormat.init(inst, def);
		});
		const $ZodCheckUpperCase = /*@__PURE__*/ $constructor("$ZodCheckUpperCase", (inst, def) => {
			def.pattern ?? (def.pattern = uppercase);
			$ZodCheckStringFormat.init(inst, def);
		});
		const $ZodCheckIncludes = /*@__PURE__*/ $constructor("$ZodCheckIncludes", (inst, def) => {
			$ZodCheck.init(inst, def);
			const escapedRegex = escapeRegex(def.includes);
			const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
			def.pattern = pattern;
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.includes(def.includes, def.position)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "includes",
					includes: def.includes,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckStartsWith = /*@__PURE__*/ $constructor("$ZodCheckStartsWith", (inst, def) => {
			$ZodCheck.init(inst, def);
			const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
			def.pattern ?? (def.pattern = pattern);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.startsWith(def.prefix)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "starts_with",
					prefix: def.prefix,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckEndsWith = /*@__PURE__*/ $constructor("$ZodCheckEndsWith", (inst, def) => {
			$ZodCheck.init(inst, def);
			const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
			def.pattern ?? (def.pattern = pattern);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.endsWith(def.suffix)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "ends_with",
					suffix: def.suffix,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckOverwrite = /*@__PURE__*/ $constructor("$ZodCheckOverwrite", (inst, def) => {
			$ZodCheck.init(inst, def);
			inst._zod.check = (payload) => {
				payload.value = def.tx(payload.value);
			};
		});
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/doc.js
		var Doc = class {
			constructor(args = []) {
				this.content = [];
				this.indent = 0;
				if (this) this.args = args;
			}
			indented(fn) {
				this.indent += 1;
				fn(this);
				this.indent -= 1;
			}
			write(arg) {
				if (typeof arg === "function") {
					arg(this, { execution: "sync" });
					arg(this, { execution: "async" });
					return;
				}
				const lines = arg.split("\n").filter((x) => x);
				const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
				const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
				for (const line of dedented) this.content.push(line);
			}
			compile() {
				const F = Function;
				const args = this?.args;
				const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
				return new F(...args, lines.join("\n"));
			}
		};
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/versions.js
		const version = {
			major: 4,
			minor: 4,
			patch: 3
		};
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/schemas.js
		const $ZodType = /*@__PURE__*/ $constructor("$ZodType", (inst, def) => {
			var _a;
			inst ?? (inst = {});
			inst._zod.def = def;
			inst._zod.bag = inst._zod.bag || {};
			inst._zod.version = version;
			const checks = [...inst._zod.def.checks ?? []];
			if (inst._zod.traits.has("$ZodCheck")) checks.unshift(inst);
			for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
			if (checks.length === 0) {
				(_a = inst._zod).deferred ?? (_a.deferred = []);
				inst._zod.deferred?.push(() => {
					inst._zod.run = inst._zod.parse;
				});
			} else {
				const runChecks = (payload, checks, ctx) => {
					let isAborted = aborted(payload);
					let asyncResult;
					for (const ch of checks) {
						if (ch._zod.def.when) {
							if (explicitlyAborted(payload)) continue;
							if (!ch._zod.def.when(payload)) continue;
						} else if (isAborted) continue;
						const currLen = payload.issues.length;
						const _ = ch._zod.check(payload);
						if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
						if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
							await _;
							if (payload.issues.length === currLen) return;
							if (!isAborted) isAborted = aborted(payload, currLen);
						});
						else {
							if (payload.issues.length === currLen) continue;
							if (!isAborted) isAborted = aborted(payload, currLen);
						}
					}
					if (asyncResult) return asyncResult.then(() => {
						return payload;
					});
					return payload;
				};
				const handleCanaryResult = (canary, payload, ctx) => {
					if (aborted(canary)) {
						canary.aborted = true;
						return canary;
					}
					const checkResult = runChecks(payload, checks, ctx);
					if (checkResult instanceof Promise) {
						if (ctx.async === false) throw new $ZodAsyncError();
						return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
					}
					return inst._zod.parse(checkResult, ctx);
				};
				inst._zod.run = (payload, ctx) => {
					if (ctx.skipChecks) return inst._zod.parse(payload, ctx);
					if (ctx.direction === "backward") {
						const canary = inst._zod.parse({
							value: payload.value,
							issues: []
						}, {
							...ctx,
							skipChecks: true
						});
						if (canary instanceof Promise) return canary.then((canary) => {
							return handleCanaryResult(canary, payload, ctx);
						});
						return handleCanaryResult(canary, payload, ctx);
					}
					const result = inst._zod.parse(payload, ctx);
					if (result instanceof Promise) {
						if (ctx.async === false) throw new $ZodAsyncError();
						return result.then((result) => runChecks(result, checks, ctx));
					}
					return runChecks(result, checks, ctx);
				};
			}
			defineLazy(inst, "~standard", () => ({
				validate: (value) => {
					try {
						const r = safeParse$1(inst, value);
						return r.success ? { value: r.data } : { issues: r.error?.issues };
					} catch (_) {
						return safeParseAsync$1(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
					}
				},
				vendor: "zod",
				version: 1
			}));
		});
		const $ZodString = /*@__PURE__*/ $constructor("$ZodString", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$1(inst._zod.bag);
			inst._zod.parse = (payload, _) => {
				if (def.coerce) try {
					payload.value = String(payload.value);
				} catch (_) {}
				if (typeof payload.value === "string") return payload;
				payload.issues.push({
					expected: "string",
					code: "invalid_type",
					input: payload.value,
					inst
				});
				return payload;
			};
		});
		const $ZodStringFormat = /*@__PURE__*/ $constructor("$ZodStringFormat", (inst, def) => {
			$ZodCheckStringFormat.init(inst, def);
			$ZodString.init(inst, def);
		});
		const $ZodGUID = /*@__PURE__*/ $constructor("$ZodGUID", (inst, def) => {
			def.pattern ?? (def.pattern = guid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodUUID = /*@__PURE__*/ $constructor("$ZodUUID", (inst, def) => {
			if (def.version) {
				const v = {
					v1: 1,
					v2: 2,
					v3: 3,
					v4: 4,
					v5: 5,
					v6: 6,
					v7: 7,
					v8: 8
				}[def.version];
				if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
				def.pattern ?? (def.pattern = uuid(v));
			} else def.pattern ?? (def.pattern = uuid());
			$ZodStringFormat.init(inst, def);
		});
		const $ZodEmail = /*@__PURE__*/ $constructor("$ZodEmail", (inst, def) => {
			def.pattern ?? (def.pattern = email);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodURL = /*@__PURE__*/ $constructor("$ZodURL", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				try {
					const trimmed = payload.value.trim();
					if (!def.normalize && def.protocol?.source === httpProtocol.source) {
						if (!/^https?:\/\//i.test(trimmed)) {
							payload.issues.push({
								code: "invalid_format",
								format: "url",
								note: "Invalid URL format",
								input: payload.value,
								inst,
								continue: !def.abort
							});
							return;
						}
					}
					const url = new URL(trimmed);
					if (def.hostname) {
						def.hostname.lastIndex = 0;
						if (!def.hostname.test(url.hostname)) payload.issues.push({
							code: "invalid_format",
							format: "url",
							note: "Invalid hostname",
							pattern: def.hostname.source,
							input: payload.value,
							inst,
							continue: !def.abort
						});
					}
					if (def.protocol) {
						def.protocol.lastIndex = 0;
						if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) payload.issues.push({
							code: "invalid_format",
							format: "url",
							note: "Invalid protocol",
							pattern: def.protocol.source,
							input: payload.value,
							inst,
							continue: !def.abort
						});
					}
					if (def.normalize) payload.value = url.href;
					else payload.value = trimmed;
					return;
				} catch (_) {
					payload.issues.push({
						code: "invalid_format",
						format: "url",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		const $ZodEmoji = /*@__PURE__*/ $constructor("$ZodEmoji", (inst, def) => {
			def.pattern ?? (def.pattern = emoji());
			$ZodStringFormat.init(inst, def);
		});
		const $ZodNanoID = /*@__PURE__*/ $constructor("$ZodNanoID", (inst, def) => {
			def.pattern ?? (def.pattern = nanoid);
			$ZodStringFormat.init(inst, def);
		});
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link $ZodCUID2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const $ZodCUID = /*@__PURE__*/ $constructor("$ZodCUID", (inst, def) => {
			def.pattern ?? (def.pattern = cuid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodCUID2 = /*@__PURE__*/ $constructor("$ZodCUID2", (inst, def) => {
			def.pattern ?? (def.pattern = cuid2);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodULID = /*@__PURE__*/ $constructor("$ZodULID", (inst, def) => {
			def.pattern ?? (def.pattern = ulid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodXID = /*@__PURE__*/ $constructor("$ZodXID", (inst, def) => {
			def.pattern ?? (def.pattern = xid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodKSUID = /*@__PURE__*/ $constructor("$ZodKSUID", (inst, def) => {
			def.pattern ?? (def.pattern = ksuid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODateTime = /*@__PURE__*/ $constructor("$ZodISODateTime", (inst, def) => {
			def.pattern ?? (def.pattern = datetime$1(def));
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODate = /*@__PURE__*/ $constructor("$ZodISODate", (inst, def) => {
			def.pattern ?? (def.pattern = date$1);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISOTime = /*@__PURE__*/ $constructor("$ZodISOTime", (inst, def) => {
			def.pattern ?? (def.pattern = time$1(def));
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODuration = /*@__PURE__*/ $constructor("$ZodISODuration", (inst, def) => {
			def.pattern ?? (def.pattern = duration$1);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodIPv4 = /*@__PURE__*/ $constructor("$ZodIPv4", (inst, def) => {
			def.pattern ?? (def.pattern = ipv4);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.format = `ipv4`;
		});
		const $ZodIPv6 = /*@__PURE__*/ $constructor("$ZodIPv6", (inst, def) => {
			def.pattern ?? (def.pattern = ipv6);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.format = `ipv6`;
			inst._zod.check = (payload) => {
				try {
					new URL(`http://[${payload.value}]`);
				} catch {
					payload.issues.push({
						code: "invalid_format",
						format: "ipv6",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		const $ZodCIDRv4 = /*@__PURE__*/ $constructor("$ZodCIDRv4", (inst, def) => {
			def.pattern ?? (def.pattern = cidrv4);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodCIDRv6 = /*@__PURE__*/ $constructor("$ZodCIDRv6", (inst, def) => {
			def.pattern ?? (def.pattern = cidrv6);
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				const parts = payload.value.split("/");
				try {
					if (parts.length !== 2) throw new Error();
					const [address, prefix] = parts;
					if (!prefix) throw new Error();
					const prefixNum = Number(prefix);
					if (`${prefixNum}` !== prefix) throw new Error();
					if (prefixNum < 0 || prefixNum > 128) throw new Error();
					new URL(`http://[${address}]`);
				} catch {
					payload.issues.push({
						code: "invalid_format",
						format: "cidrv6",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		function isValidBase64(data) {
			if (data === "") return true;
			if (/\s/.test(data)) return false;
			if (data.length % 4 !== 0) return false;
			try {
				atob(data);
				return true;
			} catch {
				return false;
			}
		}
		const $ZodBase64 = /*@__PURE__*/ $constructor("$ZodBase64", (inst, def) => {
			def.pattern ?? (def.pattern = base64);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.contentEncoding = "base64";
			inst._zod.check = (payload) => {
				if (isValidBase64(payload.value)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "base64",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		function isValidBase64URL(data) {
			if (!base64url.test(data)) return false;
			const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
			return isValidBase64(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
		}
		const $ZodBase64URL = /*@__PURE__*/ $constructor("$ZodBase64URL", (inst, def) => {
			def.pattern ?? (def.pattern = base64url);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.contentEncoding = "base64url";
			inst._zod.check = (payload) => {
				if (isValidBase64URL(payload.value)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "base64url",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodE164 = /*@__PURE__*/ $constructor("$ZodE164", (inst, def) => {
			def.pattern ?? (def.pattern = e164);
			$ZodStringFormat.init(inst, def);
		});
		function isValidJWT(token, algorithm = null) {
			try {
				const tokensParts = token.split(".");
				if (tokensParts.length !== 3) return false;
				const [header] = tokensParts;
				if (!header) return false;
				const parsedHeader = JSON.parse(atob(header));
				if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
				if (!parsedHeader.alg) return false;
				if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
				return true;
			} catch {
				return false;
			}
		}
		const $ZodJWT = /*@__PURE__*/ $constructor("$ZodJWT", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				if (isValidJWT(payload.value, def.alg)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "jwt",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodNumber = /*@__PURE__*/ $constructor("$ZodNumber", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.pattern = inst._zod.bag.pattern ?? number$1;
			inst._zod.parse = (payload, _ctx) => {
				if (def.coerce) try {
					payload.value = Number(payload.value);
				} catch (_) {}
				const input = payload.value;
				if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) return payload;
				const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
				payload.issues.push({
					expected: "number",
					code: "invalid_type",
					input,
					inst,
					...received ? { received } : {}
				});
				return payload;
			};
		});
		const $ZodNumberFormat = /*@__PURE__*/ $constructor("$ZodNumberFormat", (inst, def) => {
			$ZodCheckNumberFormat.init(inst, def);
			$ZodNumber.init(inst, def);
		});
		const $ZodBoolean = /*@__PURE__*/ $constructor("$ZodBoolean", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.pattern = boolean$1;
			inst._zod.parse = (payload, _ctx) => {
				if (def.coerce) try {
					payload.value = Boolean(payload.value);
				} catch (_) {}
				const input = payload.value;
				if (typeof input === "boolean") return payload;
				payload.issues.push({
					expected: "boolean",
					code: "invalid_type",
					input,
					inst
				});
				return payload;
			};
		});
		const $ZodUnknown = /*@__PURE__*/ $constructor("$ZodUnknown", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload) => payload;
		});
		const $ZodNever = /*@__PURE__*/ $constructor("$ZodNever", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, _ctx) => {
				payload.issues.push({
					expected: "never",
					code: "invalid_type",
					input: payload.value,
					inst
				});
				return payload;
			};
		});
		function handleArrayResult(result, final, index) {
			if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
			final.value[index] = result.value;
		}
		const $ZodArray = /*@__PURE__*/ $constructor("$ZodArray", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, ctx) => {
				const input = payload.value;
				if (!Array.isArray(input)) {
					payload.issues.push({
						expected: "array",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				payload.value = Array(input.length);
				const proms = [];
				for (let i = 0; i < input.length; i++) {
					const item = input[i];
					const result = def.element._zod.run({
						value: item,
						issues: []
					}, ctx);
					if (result instanceof Promise) proms.push(result.then((result) => handleArrayResult(result, payload, i)));
					else handleArrayResult(result, payload, i);
				}
				if (proms.length) return Promise.all(proms).then(() => payload);
				return payload;
			};
		});
		function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
			const isPresent = key in input;
			if (result.issues.length) {
				if (isOptionalIn && isOptionalOut && !isPresent) return;
				final.issues.push(...prefixIssues(key, result.issues));
			}
			if (!isPresent && !isOptionalIn) {
				if (!result.issues.length) final.issues.push({
					code: "invalid_type",
					expected: "nonoptional",
					input: void 0,
					path: [key]
				});
				return;
			}
			if (result.value === void 0) {
				if (isPresent) final.value[key] = void 0;
			} else final.value[key] = result.value;
		}
		function normalizeDef(def) {
			const keys = Object.keys(def.shape);
			for (const k of keys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
			const okeys = optionalKeys(def.shape);
			return {
				...def,
				keys,
				keySet: new Set(keys),
				numKeys: keys.length,
				optionalKeys: new Set(okeys)
			};
		}
		function handleCatchall(proms, input, payload, ctx, def, inst) {
			const unrecognized = [];
			const keySet = def.keySet;
			const _catchall = def.catchall._zod;
			const t = _catchall.def.type;
			const isOptionalIn = _catchall.optin === "optional";
			const isOptionalOut = _catchall.optout === "optional";
			for (const key in input) {
				if (key === "__proto__") continue;
				if (keySet.has(key)) continue;
				if (t === "never") {
					unrecognized.push(key);
					continue;
				}
				const r = _catchall.run({
					value: input[key],
					issues: []
				}, ctx);
				if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
				else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
			}
			if (unrecognized.length) payload.issues.push({
				code: "unrecognized_keys",
				keys: unrecognized,
				input,
				inst
			});
			if (!proms.length) return payload;
			return Promise.all(proms).then(() => {
				return payload;
			});
		}
		const $ZodObject = /*@__PURE__*/ $constructor("$ZodObject", (inst, def) => {
			$ZodType.init(inst, def);
			if (!Object.getOwnPropertyDescriptor(def, "shape")?.get) {
				const sh = def.shape;
				Object.defineProperty(def, "shape", { get: () => {
					const newSh = { ...sh };
					Object.defineProperty(def, "shape", { value: newSh });
					return newSh;
				} });
			}
			const _normalized = cached(() => normalizeDef(def));
			defineLazy(inst._zod, "propValues", () => {
				const shape = def.shape;
				const propValues = {};
				for (const key in shape) {
					const field = shape[key]._zod;
					if (field.values) {
						propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
						for (const v of field.values) propValues[key].add(v);
					}
				}
				return propValues;
			});
			const isObject$1 = isObject;
			const catchall = def.catchall;
			let value;
			inst._zod.parse = (payload, ctx) => {
				value ?? (value = _normalized.value);
				const input = payload.value;
				if (!isObject$1(input)) {
					payload.issues.push({
						expected: "object",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				payload.value = {};
				const proms = [];
				const shape = value.shape;
				for (const key of value.keys) {
					const el = shape[key];
					const isOptionalIn = el._zod.optin === "optional";
					const isOptionalOut = el._zod.optout === "optional";
					const r = el._zod.run({
						value: input[key],
						issues: []
					}, ctx);
					if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
					else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
				}
				if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
				return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
			};
		});
		const $ZodObjectJIT = /*@__PURE__*/ $constructor("$ZodObjectJIT", (inst, def) => {
			$ZodObject.init(inst, def);
			const superParse = inst._zod.parse;
			const _normalized = cached(() => normalizeDef(def));
			const generateFastpass = (shape) => {
				const doc = new Doc([
					"shape",
					"payload",
					"ctx"
				]);
				const normalized = _normalized.value;
				const parseStr = (key) => {
					const k = esc(key);
					return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
				};
				doc.write(`const input = payload.value;`);
				const ids = Object.create(null);
				let counter = 0;
				for (const key of normalized.keys) ids[key] = `key_${counter++}`;
				doc.write(`const newResult = {};`);
				for (const key of normalized.keys) {
					const id = ids[key];
					const k = esc(key);
					const schema = shape[key];
					const isOptionalIn = schema?._zod?.optin === "optional";
					const isOptionalOut = schema?._zod?.optout === "optional";
					doc.write(`const ${id} = ${parseStr(key)};`);
					if (isOptionalIn && isOptionalOut) doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
					else if (!isOptionalIn) doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
					else doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
				}
				doc.write(`payload.value = newResult;`);
				doc.write(`return payload;`);
				const fn = doc.compile();
				return (payload, ctx) => fn(shape, payload, ctx);
			};
			let fastpass;
			const isObject$2 = isObject;
			const jit = !globalConfig.jitless;
			const fastEnabled = jit && allowsEval.value;
			const catchall = def.catchall;
			let value;
			inst._zod.parse = (payload, ctx) => {
				value ?? (value = _normalized.value);
				const input = payload.value;
				if (!isObject$2(input)) {
					payload.issues.push({
						expected: "object",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
					if (!fastpass) fastpass = generateFastpass(def.shape);
					payload = fastpass(payload, ctx);
					if (!catchall) return payload;
					return handleCatchall([], input, payload, ctx, value, inst);
				}
				return superParse(payload, ctx);
			};
		});
		function handleUnionResults(results, final, inst, ctx) {
			for (const result of results) if (result.issues.length === 0) {
				final.value = result.value;
				return final;
			}
			const nonaborted = results.filter((r) => !aborted(r));
			if (nonaborted.length === 1) {
				final.value = nonaborted[0].value;
				return nonaborted[0];
			}
			final.issues.push({
				code: "invalid_union",
				input: final.value,
				inst,
				errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			});
			return final;
		}
		const $ZodUnion = /*@__PURE__*/ $constructor("$ZodUnion", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
			defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
			defineLazy(inst._zod, "values", () => {
				if (def.options.every((o) => o._zod.values)) return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
			});
			defineLazy(inst._zod, "pattern", () => {
				if (def.options.every((o) => o._zod.pattern)) {
					const patterns = def.options.map((o) => o._zod.pattern);
					return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
				}
			});
			const first = def.options.length === 1 ? def.options[0]._zod.run : null;
			inst._zod.parse = (payload, ctx) => {
				if (first) return first(payload, ctx);
				let async = false;
				const results = [];
				for (const option of def.options) {
					const result = option._zod.run({
						value: payload.value,
						issues: []
					}, ctx);
					if (result instanceof Promise) {
						results.push(result);
						async = true;
					} else {
						if (result.issues.length === 0) return result;
						results.push(result);
					}
				}
				if (!async) return handleUnionResults(results, payload, inst, ctx);
				return Promise.all(results).then((results) => {
					return handleUnionResults(results, payload, inst, ctx);
				});
			};
		});
		const $ZodIntersection = /*@__PURE__*/ $constructor("$ZodIntersection", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, ctx) => {
				const input = payload.value;
				const left = def.left._zod.run({
					value: input,
					issues: []
				}, ctx);
				const right = def.right._zod.run({
					value: input,
					issues: []
				}, ctx);
				if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left, right]) => {
					return handleIntersectionResults(payload, left, right);
				});
				return handleIntersectionResults(payload, left, right);
			};
		});
		function mergeValues(a, b) {
			if (a === b) return {
				valid: true,
				data: a
			};
			if (a instanceof Date && b instanceof Date && +a === +b) return {
				valid: true,
				data: a
			};
			if (isPlainObject(a) && isPlainObject(b)) {
				const bKeys = Object.keys(b);
				const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
				const newObj = {
					...a,
					...b
				};
				for (const key of sharedKeys) {
					const sharedValue = mergeValues(a[key], b[key]);
					if (!sharedValue.valid) return {
						valid: false,
						mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
					};
					newObj[key] = sharedValue.data;
				}
				return {
					valid: true,
					data: newObj
				};
			}
			if (Array.isArray(a) && Array.isArray(b)) {
				if (a.length !== b.length) return {
					valid: false,
					mergeErrorPath: []
				};
				const newArray = [];
				for (let index = 0; index < a.length; index++) {
					const itemA = a[index];
					const itemB = b[index];
					const sharedValue = mergeValues(itemA, itemB);
					if (!sharedValue.valid) return {
						valid: false,
						mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
					};
					newArray.push(sharedValue.data);
				}
				return {
					valid: true,
					data: newArray
				};
			}
			return {
				valid: false,
				mergeErrorPath: []
			};
		}
		function handleIntersectionResults(result, left, right) {
			const unrecKeys = /* @__PURE__ */ new Map();
			let unrecIssue;
			for (const iss of left.issues) if (iss.code === "unrecognized_keys") {
				unrecIssue ?? (unrecIssue = iss);
				for (const k of iss.keys) {
					if (!unrecKeys.has(k)) unrecKeys.set(k, {});
					unrecKeys.get(k).l = true;
				}
			} else result.issues.push(iss);
			for (const iss of right.issues) if (iss.code === "unrecognized_keys") for (const k of iss.keys) {
				if (!unrecKeys.has(k)) unrecKeys.set(k, {});
				unrecKeys.get(k).r = true;
			}
			else result.issues.push(iss);
			const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
			if (bothKeys.length && unrecIssue) result.issues.push({
				...unrecIssue,
				keys: bothKeys
			});
			if (aborted(result)) return result;
			const merged = mergeValues(left.value, right.value);
			if (!merged.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
			result.value = merged.data;
			return result;
		}
		const $ZodEnum = /*@__PURE__*/ $constructor("$ZodEnum", (inst, def) => {
			$ZodType.init(inst, def);
			const values = getEnumValues(def.entries);
			const valuesSet = new Set(values);
			inst._zod.values = valuesSet;
			inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
			inst._zod.parse = (payload, _ctx) => {
				const input = payload.value;
				if (valuesSet.has(input)) return payload;
				payload.issues.push({
					code: "invalid_value",
					values,
					input,
					inst
				});
				return payload;
			};
		});
		const $ZodLiteral = /*@__PURE__*/ $constructor("$ZodLiteral", (inst, def) => {
			$ZodType.init(inst, def);
			if (def.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
			const values = new Set(def.values);
			inst._zod.values = values;
			inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
			inst._zod.parse = (payload, _ctx) => {
				const input = payload.value;
				if (values.has(input)) return payload;
				payload.issues.push({
					code: "invalid_value",
					values: def.values,
					input,
					inst
				});
				return payload;
			};
		});
		const $ZodTransform = /*@__PURE__*/ $constructor("$ZodTransform", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
				const _out = def.transform(payload.value, payload);
				if (ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
					payload.value = output;
					payload.fallback = true;
					return payload;
				});
				if (_out instanceof Promise) throw new $ZodAsyncError();
				payload.value = _out;
				payload.fallback = true;
				return payload;
			};
		});
		function handleOptionalResult(result, input) {
			if (input === void 0 && (result.issues.length || result.fallback)) return {
				issues: [],
				value: void 0
			};
			return result;
		}
		const $ZodOptional = /*@__PURE__*/ $constructor("$ZodOptional", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			inst._zod.optout = "optional";
			defineLazy(inst._zod, "values", () => {
				return def.innerType._zod.values ? new Set([...def.innerType._zod.values, void 0]) : void 0;
			});
			defineLazy(inst._zod, "pattern", () => {
				const pattern = def.innerType._zod.pattern;
				return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				if (def.innerType._zod.optin === "optional") {
					const input = payload.value;
					const result = def.innerType._zod.run(payload, ctx);
					if (result instanceof Promise) return result.then((r) => handleOptionalResult(r, input));
					return handleOptionalResult(result, input);
				}
				if (payload.value === void 0) return payload;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodExactOptional = /*@__PURE__*/ $constructor("$ZodExactOptional", (inst, def) => {
			$ZodOptional.init(inst, def);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
			inst._zod.parse = (payload, ctx) => {
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodNullable = /*@__PURE__*/ $constructor("$ZodNullable", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
			defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
			defineLazy(inst._zod, "pattern", () => {
				const pattern = def.innerType._zod.pattern;
				return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
			});
			defineLazy(inst._zod, "values", () => {
				return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				if (payload.value === null) return payload;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodDefault = /*@__PURE__*/ $constructor("$ZodDefault", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				if (payload.value === void 0) {
					payload.value = def.defaultValue;
					/**
					* $ZodDefault returns the default value immediately in forward direction.
					* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
					return payload;
				}
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => handleDefaultResult(result, def));
				return handleDefaultResult(result, def);
			};
		});
		function handleDefaultResult(payload, def) {
			if (payload.value === void 0) payload.value = def.defaultValue;
			return payload;
		}
		const $ZodPrefault = /*@__PURE__*/ $constructor("$ZodPrefault", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				if (payload.value === void 0) payload.value = def.defaultValue;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodNonOptional = /*@__PURE__*/ $constructor("$ZodNonOptional", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "values", () => {
				const v = def.innerType._zod.values;
				return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => handleNonOptionalResult(result, inst));
				return handleNonOptionalResult(result, inst);
			};
		});
		function handleNonOptionalResult(payload, inst) {
			if (!payload.issues.length && payload.value === void 0) payload.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: payload.value,
				inst
			});
			return payload;
		}
		const $ZodCatch = /*@__PURE__*/ $constructor("$ZodCatch", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => {
					payload.value = result.value;
					if (result.issues.length) {
						payload.value = def.catchValue({
							...payload,
							error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
							input: payload.value
						});
						payload.issues = [];
						payload.fallback = true;
					}
					return payload;
				});
				payload.value = result.value;
				if (result.issues.length) {
					payload.value = def.catchValue({
						...payload,
						error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
						input: payload.value
					});
					payload.issues = [];
					payload.fallback = true;
				}
				return payload;
			};
		});
		const $ZodPipe = /*@__PURE__*/ $constructor("$ZodPipe", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "values", () => def.in._zod.values);
			defineLazy(inst._zod, "optin", () => def.in._zod.optin);
			defineLazy(inst._zod, "optout", () => def.out._zod.optout);
			defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") {
					const right = def.out._zod.run(payload, ctx);
					if (right instanceof Promise) return right.then((right) => handlePipeResult(right, def.in, ctx));
					return handlePipeResult(right, def.in, ctx);
				}
				const left = def.in._zod.run(payload, ctx);
				if (left instanceof Promise) return left.then((left) => handlePipeResult(left, def.out, ctx));
				return handlePipeResult(left, def.out, ctx);
			};
		});
		function handlePipeResult(left, next, ctx) {
			if (left.issues.length) {
				left.aborted = true;
				return left;
			}
			return next._zod.run({
				value: left.value,
				issues: left.issues,
				fallback: left.fallback
			}, ctx);
		}
		const $ZodReadonly = /*@__PURE__*/ $constructor("$ZodReadonly", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
			defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then(handleReadonlyResult);
				return handleReadonlyResult(result);
			};
		});
		function handleReadonlyResult(payload) {
			payload.value = Object.freeze(payload.value);
			return payload;
		}
		const $ZodCustom = /*@__PURE__*/ $constructor("$ZodCustom", (inst, def) => {
			$ZodCheck.init(inst, def);
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, _) => {
				return payload;
			};
			inst._zod.check = (payload) => {
				const input = payload.value;
				const r = def.fn(input);
				if (r instanceof Promise) return r.then((r) => handleRefineResult(r, payload, input, inst));
				handleRefineResult(r, payload, input, inst);
			};
		});
		function handleRefineResult(result, payload, input, inst) {
			if (!result) {
				const _iss = {
					code: "custom",
					input,
					inst,
					path: [...inst._zod.def.path ?? []],
					continue: !inst._zod.def.abort
				};
				if (inst._zod.def.params) _iss.params = inst._zod.def.params;
				payload.issues.push(issue(_iss));
			}
		}
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/registries.js
		var _a;
		var $ZodRegistry = class {
			constructor() {
				this._map = /* @__PURE__ */ new WeakMap();
				this._idmap = /* @__PURE__ */ new Map();
			}
			add(schema, ..._meta) {
				const meta = _meta[0];
				this._map.set(schema, meta);
				if (meta && typeof meta === "object" && "id" in meta) this._idmap.set(meta.id, schema);
				return this;
			}
			clear() {
				this._map = /* @__PURE__ */ new WeakMap();
				this._idmap = /* @__PURE__ */ new Map();
				return this;
			}
			remove(schema) {
				const meta = this._map.get(schema);
				if (meta && typeof meta === "object" && "id" in meta) this._idmap.delete(meta.id);
				this._map.delete(schema);
				return this;
			}
			get(schema) {
				const p = schema._zod.parent;
				if (p) {
					const pm = { ...this.get(p) ?? {} };
					delete pm.id;
					const f = {
						...pm,
						...this._map.get(schema)
					};
					return Object.keys(f).length ? f : void 0;
				}
				return this._map.get(schema);
			}
			has(schema) {
				return this._map.has(schema);
			}
		};
		function registry() {
			return new $ZodRegistry();
		}
		(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
		const globalRegistry = globalThis.__zod_globalRegistry;
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/api.js
		// @__NO_SIDE_EFFECTS__
		function _string(Class, params) {
			return new Class({
				type: "string",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _email(Class, params) {
			return new Class({
				type: "string",
				format: "email",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _guid(Class, params) {
			return new Class({
				type: "string",
				format: "guid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuid(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv4(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v4",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv6(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v6",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv7(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v7",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _url(Class, params) {
			return new Class({
				type: "string",
				format: "url",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _emoji(Class, params) {
			return new Class({
				type: "string",
				format: "emoji",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _nanoid(Class, params) {
			return new Class({
				type: "string",
				format: "nanoid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link _cuid2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		// @__NO_SIDE_EFFECTS__
		function _cuid(Class, params) {
			return new Class({
				type: "string",
				format: "cuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cuid2(Class, params) {
			return new Class({
				type: "string",
				format: "cuid2",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ulid(Class, params) {
			return new Class({
				type: "string",
				format: "ulid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _xid(Class, params) {
			return new Class({
				type: "string",
				format: "xid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ksuid(Class, params) {
			return new Class({
				type: "string",
				format: "ksuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ipv4(Class, params) {
			return new Class({
				type: "string",
				format: "ipv4",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ipv6(Class, params) {
			return new Class({
				type: "string",
				format: "ipv6",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cidrv4(Class, params) {
			return new Class({
				type: "string",
				format: "cidrv4",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cidrv6(Class, params) {
			return new Class({
				type: "string",
				format: "cidrv6",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _base64(Class, params) {
			return new Class({
				type: "string",
				format: "base64",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _base64url(Class, params) {
			return new Class({
				type: "string",
				format: "base64url",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _e164(Class, params) {
			return new Class({
				type: "string",
				format: "e164",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _jwt(Class, params) {
			return new Class({
				type: "string",
				format: "jwt",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDateTime(Class, params) {
			return new Class({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: false,
				local: false,
				precision: null,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDate(Class, params) {
			return new Class({
				type: "string",
				format: "date",
				check: "string_format",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoTime(Class, params) {
			return new Class({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDuration(Class, params) {
			return new Class({
				type: "string",
				format: "duration",
				check: "string_format",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _number(Class, params) {
			return new Class({
				type: "number",
				checks: [],
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _int(Class, params) {
			return new Class({
				type: "number",
				check: "number_format",
				abort: false,
				format: "safeint",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _boolean(Class, params) {
			return new Class({
				type: "boolean",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _unknown(Class) {
			return new Class({ type: "unknown" });
		}
		// @__NO_SIDE_EFFECTS__
		function _never(Class, params) {
			return new Class({
				type: "never",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _lt(value, params) {
			return new $ZodCheckLessThan({
				check: "less_than",
				...normalizeParams(params),
				value,
				inclusive: false
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _lte(value, params) {
			return new $ZodCheckLessThan({
				check: "less_than",
				...normalizeParams(params),
				value,
				inclusive: true
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _gt(value, params) {
			return new $ZodCheckGreaterThan({
				check: "greater_than",
				...normalizeParams(params),
				value,
				inclusive: false
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _gte(value, params) {
			return new $ZodCheckGreaterThan({
				check: "greater_than",
				...normalizeParams(params),
				value,
				inclusive: true
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _multipleOf(value, params) {
			return new $ZodCheckMultipleOf({
				check: "multiple_of",
				...normalizeParams(params),
				value
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _maxLength(maximum, params) {
			return new $ZodCheckMaxLength({
				check: "max_length",
				...normalizeParams(params),
				maximum
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _minLength(minimum, params) {
			return new $ZodCheckMinLength({
				check: "min_length",
				...normalizeParams(params),
				minimum
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _length(length, params) {
			return new $ZodCheckLengthEquals({
				check: "length_equals",
				...normalizeParams(params),
				length
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _regex(pattern, params) {
			return new $ZodCheckRegex({
				check: "string_format",
				format: "regex",
				...normalizeParams(params),
				pattern
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _lowercase(params) {
			return new $ZodCheckLowerCase({
				check: "string_format",
				format: "lowercase",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uppercase(params) {
			return new $ZodCheckUpperCase({
				check: "string_format",
				format: "uppercase",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _includes(includes, params) {
			return new $ZodCheckIncludes({
				check: "string_format",
				format: "includes",
				...normalizeParams(params),
				includes
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _startsWith(prefix, params) {
			return new $ZodCheckStartsWith({
				check: "string_format",
				format: "starts_with",
				...normalizeParams(params),
				prefix
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _endsWith(suffix, params) {
			return new $ZodCheckEndsWith({
				check: "string_format",
				format: "ends_with",
				...normalizeParams(params),
				suffix
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _overwrite(tx) {
			return new $ZodCheckOverwrite({
				check: "overwrite",
				tx
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _normalize(form) {
			return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
		}
		// @__NO_SIDE_EFFECTS__
		function _trim() {
			return /* @__PURE__ */ _overwrite((input) => input.trim());
		}
		// @__NO_SIDE_EFFECTS__
		function _toLowerCase() {
			return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
		}
		// @__NO_SIDE_EFFECTS__
		function _toUpperCase() {
			return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
		}
		// @__NO_SIDE_EFFECTS__
		function _slugify() {
			return /* @__PURE__ */ _overwrite((input) => slugify(input));
		}
		// @__NO_SIDE_EFFECTS__
		function _array(Class, element, params) {
			return new Class({
				type: "array",
				element,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _refine(Class, fn, _params) {
			return new Class({
				type: "custom",
				check: "custom",
				fn,
				...normalizeParams(_params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _superRefine(fn, params) {
			const ch = /* @__PURE__ */ _check((payload) => {
				payload.addIssue = (issue$2) => {
					if (typeof issue$2 === "string") payload.issues.push(issue(issue$2, payload.value, ch._zod.def));
					else {
						const _issue = issue$2;
						if (_issue.fatal) _issue.continue = false;
						_issue.code ?? (_issue.code = "custom");
						_issue.input ?? (_issue.input = payload.value);
						_issue.inst ?? (_issue.inst = ch);
						_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
						payload.issues.push(issue(_issue));
					}
				};
				return fn(payload.value, payload);
			}, params);
			return ch;
		}
		// @__NO_SIDE_EFFECTS__
		function _check(fn, params) {
			const ch = new $ZodCheck({
				check: "custom",
				...normalizeParams(params)
			});
			ch._zod.check = fn;
			return ch;
		}
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/to-json-schema.js
		function initializeContext(params) {
			let target = params?.target ?? "draft-2020-12";
			if (target === "draft-4") target = "draft-04";
			if (target === "draft-7") target = "draft-07";
			return {
				processors: params.processors ?? {},
				metadataRegistry: params?.metadata ?? globalRegistry,
				target,
				unrepresentable: params?.unrepresentable ?? "throw",
				override: params?.override ?? (() => {}),
				io: params?.io ?? "output",
				counter: 0,
				seen: /* @__PURE__ */ new Map(),
				cycles: params?.cycles ?? "ref",
				reused: params?.reused ?? "inline",
				external: params?.external ?? void 0
			};
		}
		function process(schema, ctx, _params = {
			path: [],
			schemaPath: []
		}) {
			var _a;
			const def = schema._zod.def;
			const seen = ctx.seen.get(schema);
			if (seen) {
				seen.count++;
				if (_params.schemaPath.includes(schema)) seen.cycle = _params.path;
				return seen.schema;
			}
			const result = {
				schema: {},
				count: 1,
				cycle: void 0,
				path: _params.path
			};
			ctx.seen.set(schema, result);
			const overrideSchema = schema._zod.toJSONSchema?.();
			if (overrideSchema) result.schema = overrideSchema;
			else {
				const params = {
					..._params,
					schemaPath: [..._params.schemaPath, schema],
					path: _params.path
				};
				if (schema._zod.processJSONSchema) schema._zod.processJSONSchema(ctx, result.schema, params);
				else {
					const _json = result.schema;
					const processor = ctx.processors[def.type];
					if (!processor) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
					processor(schema, ctx, _json, params);
				}
				const parent = schema._zod.parent;
				if (parent) {
					if (!result.ref) result.ref = parent;
					process(parent, ctx, params);
					ctx.seen.get(parent).isParent = true;
				}
			}
			const meta = ctx.metadataRegistry.get(schema);
			if (meta) Object.assign(result.schema, meta);
			if (ctx.io === "input" && isTransforming(schema)) {
				delete result.schema.examples;
				delete result.schema.default;
			}
			if (ctx.io === "input" && "_prefault" in result.schema) (_a = result.schema).default ?? (_a.default = result.schema._prefault);
			delete result.schema._prefault;
			return ctx.seen.get(schema).schema;
		}
		function extractDefs(ctx, schema) {
			const root = ctx.seen.get(schema);
			if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
			const idToSchema = /* @__PURE__ */ new Map();
			for (const entry of ctx.seen.entries()) {
				const id = ctx.metadataRegistry.get(entry[0])?.id;
				if (id) {
					const existing = idToSchema.get(id);
					if (existing && existing !== entry[0]) throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
					idToSchema.set(id, entry[0]);
				}
			}
			const makeURI = (entry) => {
				const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
				if (ctx.external) {
					const externalId = ctx.external.registry.get(entry[0])?.id;
					const uriGenerator = ctx.external.uri ?? ((id) => id);
					if (externalId) return { ref: uriGenerator(externalId) };
					const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
					entry[1].defId = id;
					return {
						defId: id,
						ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}`
					};
				}
				if (entry[1] === root) return { ref: "#" };
				const defUriPrefix = `#/${defsSegment}/`;
				const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
				return {
					defId,
					ref: defUriPrefix + defId
				};
			};
			const extractToDef = (entry) => {
				if (entry[1].schema.$ref) return;
				const seen = entry[1];
				const { ref, defId } = makeURI(entry);
				seen.def = { ...seen.schema };
				if (defId) seen.defId = defId;
				const schema = seen.schema;
				for (const key in schema) delete schema[key];
				schema.$ref = ref;
			};
			if (ctx.cycles === "throw") for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
			}
			for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (schema === entry[0]) {
					extractToDef(entry);
					continue;
				}
				if (ctx.external) {
					const ext = ctx.external.registry.get(entry[0])?.id;
					if (schema !== entry[0] && ext) {
						extractToDef(entry);
						continue;
					}
				}
				if (ctx.metadataRegistry.get(entry[0])?.id) {
					extractToDef(entry);
					continue;
				}
				if (seen.cycle) {
					extractToDef(entry);
					continue;
				}
				if (seen.count > 1) {
					if (ctx.reused === "ref") {
						extractToDef(entry);
						continue;
					}
				}
			}
		}
		function finalize(ctx, schema) {
			const root = ctx.seen.get(schema);
			if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
			const flattenRef = (zodSchema) => {
				const seen = ctx.seen.get(zodSchema);
				if (seen.ref === null) return;
				const schema = seen.def ?? seen.schema;
				const _cached = { ...schema };
				const ref = seen.ref;
				seen.ref = null;
				if (ref) {
					flattenRef(ref);
					const refSeen = ctx.seen.get(ref);
					const refSchema = refSeen.schema;
					if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
						schema.allOf = schema.allOf ?? [];
						schema.allOf.push(refSchema);
					} else Object.assign(schema, refSchema);
					Object.assign(schema, _cached);
					if (zodSchema._zod.parent === ref) for (const key in schema) {
						if (key === "$ref" || key === "allOf") continue;
						if (!(key in _cached)) delete schema[key];
					}
					if (refSchema.$ref && refSeen.def) for (const key in schema) {
						if (key === "$ref" || key === "allOf") continue;
						if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) delete schema[key];
					}
				}
				const parent = zodSchema._zod.parent;
				if (parent && parent !== ref) {
					flattenRef(parent);
					const parentSeen = ctx.seen.get(parent);
					if (parentSeen?.schema.$ref) {
						schema.$ref = parentSeen.schema.$ref;
						if (parentSeen.def) for (const key in schema) {
							if (key === "$ref" || key === "allOf") continue;
							if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) delete schema[key];
						}
					}
				}
				ctx.override({
					zodSchema,
					jsonSchema: schema,
					path: seen.path ?? []
				});
			};
			for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
			const result = {};
			if (ctx.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
			else if (ctx.target === "draft-07") result.$schema = "http://json-schema.org/draft-07/schema#";
			else if (ctx.target === "draft-04") result.$schema = "http://json-schema.org/draft-04/schema#";
			else if (ctx.target === "openapi-3.0") {}
			if (ctx.external?.uri) {
				const id = ctx.external.registry.get(schema)?.id;
				if (!id) throw new Error("Schema is missing an `id` property");
				result.$id = ctx.external.uri(id);
			}
			Object.assign(result, root.def ?? root.schema);
			const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
			if (rootMetaId !== void 0 && result.id === rootMetaId) delete result.id;
			const defs = ctx.external?.defs ?? {};
			for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (seen.def && seen.defId) {
					if (seen.def.id === seen.defId) delete seen.def.id;
					defs[seen.defId] = seen.def;
				}
			}
			if (ctx.external) {} else if (Object.keys(defs).length > 0) if (ctx.target === "draft-2020-12") result.$defs = defs;
			else result.definitions = defs;
			try {
				const finalized = JSON.parse(JSON.stringify(result));
				Object.defineProperty(finalized, "~standard", {
					value: {
						...schema["~standard"],
						jsonSchema: {
							input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
							output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
						}
					},
					enumerable: false,
					writable: false
				});
				return finalized;
			} catch (_err) {
				throw new Error("Error converting schema to JSON.");
			}
		}
		function isTransforming(_schema, _ctx) {
			const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
			if (ctx.seen.has(_schema)) return false;
			ctx.seen.add(_schema);
			const def = _schema._zod.def;
			if (def.type === "transform") return true;
			if (def.type === "array") return isTransforming(def.element, ctx);
			if (def.type === "set") return isTransforming(def.valueType, ctx);
			if (def.type === "lazy") return isTransforming(def.getter(), ctx);
			if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") return isTransforming(def.innerType, ctx);
			if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
			if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
			if (def.type === "pipe") {
				if (_schema._zod.traits.has("$ZodCodec")) return true;
				return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
			}
			if (def.type === "object") {
				for (const key in def.shape) if (isTransforming(def.shape[key], ctx)) return true;
				return false;
			}
			if (def.type === "union") {
				for (const option of def.options) if (isTransforming(option, ctx)) return true;
				return false;
			}
			if (def.type === "tuple") {
				for (const item of def.items) if (isTransforming(item, ctx)) return true;
				if (def.rest && isTransforming(def.rest, ctx)) return true;
				return false;
			}
			return false;
		}
		/**
		* Creates a toJSONSchema method for a schema instance.
		* This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
		*/
		const createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
			const ctx = initializeContext({
				...params,
				processors
			});
			process(schema, ctx);
			extractDefs(ctx, schema);
			return finalize(ctx, schema);
		};
		const createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
			const { libraryOptions, target } = params ?? {};
			const ctx = initializeContext({
				...libraryOptions ?? {},
				target,
				io,
				processors
			});
			process(schema, ctx);
			extractDefs(ctx, schema);
			return finalize(ctx, schema);
		};
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/json-schema-processors.js
		const formatMap = {
			guid: "uuid",
			url: "uri",
			datetime: "date-time",
			json_string: "json-string",
			regex: ""
		};
		const stringProcessor = (schema, ctx, _json, _params) => {
			const json = _json;
			json.type = "string";
			const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
			if (typeof minimum === "number") json.minLength = minimum;
			if (typeof maximum === "number") json.maxLength = maximum;
			if (format) {
				json.format = formatMap[format] ?? format;
				if (json.format === "") delete json.format;
				if (format === "time") delete json.format;
			}
			if (contentEncoding) json.contentEncoding = contentEncoding;
			if (patterns && patterns.size > 0) {
				const regexes = [...patterns];
				if (regexes.length === 1) json.pattern = regexes[0].source;
				else if (regexes.length > 1) json.allOf = [...regexes.map((regex) => ({
					...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
					pattern: regex.source
				}))];
			}
		};
		const numberProcessor = (schema, ctx, _json, _params) => {
			const json = _json;
			const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
			if (typeof format === "string" && format.includes("int")) json.type = "integer";
			else json.type = "number";
			const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
			const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
			const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
			if (exMin) if (legacy) {
				json.minimum = exclusiveMinimum;
				json.exclusiveMinimum = true;
			} else json.exclusiveMinimum = exclusiveMinimum;
			else if (typeof minimum === "number") json.minimum = minimum;
			if (exMax) if (legacy) {
				json.maximum = exclusiveMaximum;
				json.exclusiveMaximum = true;
			} else json.exclusiveMaximum = exclusiveMaximum;
			else if (typeof maximum === "number") json.maximum = maximum;
			if (typeof multipleOf === "number") json.multipleOf = multipleOf;
		};
		const booleanProcessor = (_schema, _ctx, json, _params) => {
			json.type = "boolean";
		};
		const neverProcessor = (_schema, _ctx, json, _params) => {
			json.not = {};
		};
		const enumProcessor = (schema, _ctx, json, _params) => {
			const def = schema._zod.def;
			const values = getEnumValues(def.entries);
			if (values.every((v) => typeof v === "number")) json.type = "number";
			if (values.every((v) => typeof v === "string")) json.type = "string";
			json.enum = values;
		};
		const literalProcessor = (schema, ctx, json, _params) => {
			const def = schema._zod.def;
			const vals = [];
			for (const val of def.values) if (val === void 0) {
				if (ctx.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
			} else if (typeof val === "bigint") if (ctx.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
			else vals.push(Number(val));
			else vals.push(val);
			if (vals.length === 0) {} else if (vals.length === 1) {
				const val = vals[0];
				json.type = val === null ? "null" : typeof val;
				if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") json.enum = [val];
				else json.const = val;
			} else {
				if (vals.every((v) => typeof v === "number")) json.type = "number";
				if (vals.every((v) => typeof v === "string")) json.type = "string";
				if (vals.every((v) => typeof v === "boolean")) json.type = "boolean";
				if (vals.every((v) => v === null)) json.type = "null";
				json.enum = vals;
			}
		};
		const customProcessor = (_schema, ctx, _json, _params) => {
			if (ctx.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
		};
		const transformProcessor = (_schema, ctx, _json, _params) => {
			if (ctx.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
		};
		const arrayProcessor = (schema, ctx, _json, params) => {
			const json = _json;
			const def = schema._zod.def;
			const { minimum, maximum } = schema._zod.bag;
			if (typeof minimum === "number") json.minItems = minimum;
			if (typeof maximum === "number") json.maxItems = maximum;
			json.type = "array";
			json.items = process(def.element, ctx, {
				...params,
				path: [...params.path, "items"]
			});
		};
		const objectProcessor = (schema, ctx, _json, params) => {
			const json = _json;
			const def = schema._zod.def;
			json.type = "object";
			json.properties = {};
			const shape = def.shape;
			for (const key in shape) json.properties[key] = process(shape[key], ctx, {
				...params,
				path: [
					...params.path,
					"properties",
					key
				]
			});
			const allKeys = new Set(Object.keys(shape));
			const requiredKeys = new Set([...allKeys].filter((key) => {
				const v = def.shape[key]._zod;
				if (ctx.io === "input") return v.optin === void 0;
				else return v.optout === void 0;
			}));
			if (requiredKeys.size > 0) json.required = Array.from(requiredKeys);
			if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
			else if (!def.catchall) {
				if (ctx.io === "output") json.additionalProperties = false;
			} else if (def.catchall) json.additionalProperties = process(def.catchall, ctx, {
				...params,
				path: [...params.path, "additionalProperties"]
			});
		};
		const unionProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const isExclusive = def.inclusive === false;
			const options = def.options.map((x, i) => process(x, ctx, {
				...params,
				path: [
					...params.path,
					isExclusive ? "oneOf" : "anyOf",
					i
				]
			}));
			if (isExclusive) json.oneOf = options;
			else json.anyOf = options;
		};
		const intersectionProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const a = process(def.left, ctx, {
				...params,
				path: [
					...params.path,
					"allOf",
					0
				]
			});
			const b = process(def.right, ctx, {
				...params,
				path: [
					...params.path,
					"allOf",
					1
				]
			});
			const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
			json.allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
		};
		const nullableProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const inner = process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			if (ctx.target === "openapi-3.0") {
				seen.ref = def.innerType;
				json.nullable = true;
			} else json.anyOf = [inner, { type: "null" }];
		};
		const nonoptionalProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
		};
		const defaultProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			json.default = JSON.parse(JSON.stringify(def.defaultValue));
		};
		const prefaultProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			if (ctx.io === "input") json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
		};
		const catchProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			let catchValue;
			try {
				catchValue = def.catchValue(void 0);
			} catch {
				throw new Error("Dynamic catch values are not supported in JSON Schema");
			}
			json.default = catchValue;
		};
		const pipeProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			const inIsTransform = def.in._zod.traits.has("$ZodTransform");
			const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
			process(innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = innerType;
		};
		const readonlyProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			json.readOnly = true;
		};
		const optionalProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
		};
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/iso.js
		const ZodISODateTime = /*@__PURE__*/ $constructor("ZodISODateTime", (inst, def) => {
			$ZodISODateTime.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function datetime(params) {
			return /* @__PURE__ */ _isoDateTime(ZodISODateTime, params);
		}
		const ZodISODate = /*@__PURE__*/ $constructor("ZodISODate", (inst, def) => {
			$ZodISODate.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function date(params) {
			return /* @__PURE__ */ _isoDate(ZodISODate, params);
		}
		const ZodISOTime = /*@__PURE__*/ $constructor("ZodISOTime", (inst, def) => {
			$ZodISOTime.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function time(params) {
			return /* @__PURE__ */ _isoTime(ZodISOTime, params);
		}
		const ZodISODuration = /*@__PURE__*/ $constructor("ZodISODuration", (inst, def) => {
			$ZodISODuration.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function duration(params) {
			return /* @__PURE__ */ _isoDuration(ZodISODuration, params);
		}
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/errors.js
		const initializer = (inst, issues) => {
			$ZodError.init(inst, issues);
			inst.name = "ZodError";
			Object.defineProperties(inst, {
				format: { value: (mapper) => formatError(inst, mapper) },
				flatten: { value: (mapper) => flattenError(inst, mapper) },
				addIssue: { value: (issue) => {
					inst.issues.push(issue);
					inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
				} },
				addIssues: { value: (issues) => {
					inst.issues.push(...issues);
					inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
				} },
				isEmpty: { get() {
					return inst.issues.length === 0;
				} }
			});
		};
		const ZodRealError = /*@__PURE__*/ $constructor("ZodError", initializer, { Parent: Error });
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/parse.js
		const parse = /* @__PURE__ */ _parse(ZodRealError);
		const parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
		const safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
		const safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
		const encode = /* @__PURE__ */ _encode(ZodRealError);
		const decode = /* @__PURE__ */ _decode(ZodRealError);
		const encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
		const decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
		const safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
		const safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
		const safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
		const safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/schemas.js
		const _installedGroups = /* @__PURE__ */ new WeakMap();
		function _installLazyMethods(inst, group, methods) {
			const proto = Object.getPrototypeOf(inst);
			let installed = _installedGroups.get(proto);
			if (!installed) {
				installed = /* @__PURE__ */ new Set();
				_installedGroups.set(proto, installed);
			}
			if (installed.has(group)) return;
			installed.add(group);
			for (const key in methods) {
				const fn = methods[key];
				Object.defineProperty(proto, key, {
					configurable: true,
					enumerable: false,
					get() {
						const bound = fn.bind(this);
						Object.defineProperty(this, key, {
							configurable: true,
							writable: true,
							enumerable: true,
							value: bound
						});
						return bound;
					},
					set(v) {
						Object.defineProperty(this, key, {
							configurable: true,
							writable: true,
							enumerable: true,
							value: v
						});
					}
				});
			}
		}
		const ZodType = /*@__PURE__*/ $constructor("ZodType", (inst, def) => {
			$ZodType.init(inst, def);
			Object.assign(inst["~standard"], { jsonSchema: {
				input: createStandardJSONSchemaMethod(inst, "input"),
				output: createStandardJSONSchemaMethod(inst, "output")
			} });
			inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
			inst.def = def;
			inst.type = def.type;
			Object.defineProperty(inst, "_def", { value: def });
			inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
			inst.safeParse = (data, params) => safeParse(inst, data, params);
			inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
			inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
			inst.spa = inst.safeParseAsync;
			inst.encode = (data, params) => encode(inst, data, params);
			inst.decode = (data, params) => decode(inst, data, params);
			inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
			inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
			inst.safeEncode = (data, params) => safeEncode(inst, data, params);
			inst.safeDecode = (data, params) => safeDecode(inst, data, params);
			inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
			inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
			_installLazyMethods(inst, "ZodType", {
				check(...chks) {
					const def = this.def;
					return this.clone(mergeDefs(def, { checks: [...def.checks ?? [], ...chks.map((ch) => typeof ch === "function" ? { _zod: {
						check: ch,
						def: { check: "custom" },
						onattach: []
					} } : ch)] }), { parent: true });
				},
				with(...chks) {
					return this.check(...chks);
				},
				clone(def, params) {
					return clone(this, def, params);
				},
				brand() {
					return this;
				},
				register(reg, meta) {
					reg.add(this, meta);
					return this;
				},
				refine(check, params) {
					return this.check(refine(check, params));
				},
				superRefine(refinement, params) {
					return this.check(superRefine(refinement, params));
				},
				overwrite(fn) {
					return this.check(/* @__PURE__ */ _overwrite(fn));
				},
				optional() {
					return optional(this);
				},
				exactOptional() {
					return exactOptional(this);
				},
				nullable() {
					return nullable(this);
				},
				nullish() {
					return optional(nullable(this));
				},
				nonoptional(params) {
					return nonoptional(this, params);
				},
				array() {
					return array(this);
				},
				or(arg) {
					return union([this, arg]);
				},
				and(arg) {
					return intersection(this, arg);
				},
				transform(tx) {
					return pipe(this, transform(tx));
				},
				default(d) {
					return _default(this, d);
				},
				prefault(d) {
					return prefault(this, d);
				},
				catch(params) {
					return _catch(this, params);
				},
				pipe(target) {
					return pipe(this, target);
				},
				readonly() {
					return readonly(this);
				},
				describe(description) {
					const cl = this.clone();
					globalRegistry.add(cl, { description });
					return cl;
				},
				meta(...args) {
					if (args.length === 0) return globalRegistry.get(this);
					const cl = this.clone();
					globalRegistry.add(cl, args[0]);
					return cl;
				},
				isOptional() {
					return this.safeParse(void 0).success;
				},
				isNullable() {
					return this.safeParse(null).success;
				},
				apply(fn) {
					return fn(this);
				}
			});
			Object.defineProperty(inst, "description", {
				get() {
					return globalRegistry.get(inst)?.description;
				},
				configurable: true
			});
			return inst;
		});
		/** @internal */
		const _ZodString = /*@__PURE__*/ $constructor("_ZodString", (inst, def) => {
			$ZodString.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
			const bag = inst._zod.bag;
			inst.format = bag.format ?? null;
			inst.minLength = bag.minimum ?? null;
			inst.maxLength = bag.maximum ?? null;
			_installLazyMethods(inst, "_ZodString", {
				regex(...args) {
					return this.check(/* @__PURE__ */ _regex(...args));
				},
				includes(...args) {
					return this.check(/* @__PURE__ */ _includes(...args));
				},
				startsWith(...args) {
					return this.check(/* @__PURE__ */ _startsWith(...args));
				},
				endsWith(...args) {
					return this.check(/* @__PURE__ */ _endsWith(...args));
				},
				min(...args) {
					return this.check(/* @__PURE__ */ _minLength(...args));
				},
				max(...args) {
					return this.check(/* @__PURE__ */ _maxLength(...args));
				},
				length(...args) {
					return this.check(/* @__PURE__ */ _length(...args));
				},
				nonempty(...args) {
					return this.check(/* @__PURE__ */ _minLength(1, ...args));
				},
				lowercase(params) {
					return this.check(/* @__PURE__ */ _lowercase(params));
				},
				uppercase(params) {
					return this.check(/* @__PURE__ */ _uppercase(params));
				},
				trim() {
					return this.check(/* @__PURE__ */ _trim());
				},
				normalize(...args) {
					return this.check(/* @__PURE__ */ _normalize(...args));
				},
				toLowerCase() {
					return this.check(/* @__PURE__ */ _toLowerCase());
				},
				toUpperCase() {
					return this.check(/* @__PURE__ */ _toUpperCase());
				},
				slugify() {
					return this.check(/* @__PURE__ */ _slugify());
				}
			});
		});
		const ZodString = /*@__PURE__*/ $constructor("ZodString", (inst, def) => {
			$ZodString.init(inst, def);
			_ZodString.init(inst, def);
			inst.email = (params) => inst.check(/* @__PURE__ */ _email(ZodEmail, params));
			inst.url = (params) => inst.check(/* @__PURE__ */ _url(ZodURL, params));
			inst.jwt = (params) => inst.check(/* @__PURE__ */ _jwt(ZodJWT, params));
			inst.emoji = (params) => inst.check(/* @__PURE__ */ _emoji(ZodEmoji, params));
			inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
			inst.uuid = (params) => inst.check(/* @__PURE__ */ _uuid(ZodUUID, params));
			inst.uuidv4 = (params) => inst.check(/* @__PURE__ */ _uuidv4(ZodUUID, params));
			inst.uuidv6 = (params) => inst.check(/* @__PURE__ */ _uuidv6(ZodUUID, params));
			inst.uuidv7 = (params) => inst.check(/* @__PURE__ */ _uuidv7(ZodUUID, params));
			inst.nanoid = (params) => inst.check(/* @__PURE__ */ _nanoid(ZodNanoID, params));
			inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
			inst.cuid = (params) => inst.check(/* @__PURE__ */ _cuid(ZodCUID, params));
			inst.cuid2 = (params) => inst.check(/* @__PURE__ */ _cuid2(ZodCUID2, params));
			inst.ulid = (params) => inst.check(/* @__PURE__ */ _ulid(ZodULID, params));
			inst.base64 = (params) => inst.check(/* @__PURE__ */ _base64(ZodBase64, params));
			inst.base64url = (params) => inst.check(/* @__PURE__ */ _base64url(ZodBase64URL, params));
			inst.xid = (params) => inst.check(/* @__PURE__ */ _xid(ZodXID, params));
			inst.ksuid = (params) => inst.check(/* @__PURE__ */ _ksuid(ZodKSUID, params));
			inst.ipv4 = (params) => inst.check(/* @__PURE__ */ _ipv4(ZodIPv4, params));
			inst.ipv6 = (params) => inst.check(/* @__PURE__ */ _ipv6(ZodIPv6, params));
			inst.cidrv4 = (params) => inst.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, params));
			inst.cidrv6 = (params) => inst.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, params));
			inst.e164 = (params) => inst.check(/* @__PURE__ */ _e164(ZodE164, params));
			inst.datetime = (params) => inst.check(datetime(params));
			inst.date = (params) => inst.check(date(params));
			inst.time = (params) => inst.check(time(params));
			inst.duration = (params) => inst.check(duration(params));
		});
		function string(params) {
			return /* @__PURE__ */ _string(ZodString, params);
		}
		const ZodStringFormat = /*@__PURE__*/ $constructor("ZodStringFormat", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			_ZodString.init(inst, def);
		});
		const ZodEmail = /*@__PURE__*/ $constructor("ZodEmail", (inst, def) => {
			$ZodEmail.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodGUID = /*@__PURE__*/ $constructor("ZodGUID", (inst, def) => {
			$ZodGUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodUUID = /*@__PURE__*/ $constructor("ZodUUID", (inst, def) => {
			$ZodUUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodURL = /*@__PURE__*/ $constructor("ZodURL", (inst, def) => {
			$ZodURL.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodEmoji = /*@__PURE__*/ $constructor("ZodEmoji", (inst, def) => {
			$ZodEmoji.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodNanoID = /*@__PURE__*/ $constructor("ZodNanoID", (inst, def) => {
			$ZodNanoID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link ZodCUID2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const ZodCUID = /*@__PURE__*/ $constructor("ZodCUID", (inst, def) => {
			$ZodCUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCUID2 = /*@__PURE__*/ $constructor("ZodCUID2", (inst, def) => {
			$ZodCUID2.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodULID = /*@__PURE__*/ $constructor("ZodULID", (inst, def) => {
			$ZodULID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodXID = /*@__PURE__*/ $constructor("ZodXID", (inst, def) => {
			$ZodXID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodKSUID = /*@__PURE__*/ $constructor("ZodKSUID", (inst, def) => {
			$ZodKSUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodIPv4 = /*@__PURE__*/ $constructor("ZodIPv4", (inst, def) => {
			$ZodIPv4.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodIPv6 = /*@__PURE__*/ $constructor("ZodIPv6", (inst, def) => {
			$ZodIPv6.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCIDRv4 = /*@__PURE__*/ $constructor("ZodCIDRv4", (inst, def) => {
			$ZodCIDRv4.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCIDRv6 = /*@__PURE__*/ $constructor("ZodCIDRv6", (inst, def) => {
			$ZodCIDRv6.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodBase64 = /*@__PURE__*/ $constructor("ZodBase64", (inst, def) => {
			$ZodBase64.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodBase64URL = /*@__PURE__*/ $constructor("ZodBase64URL", (inst, def) => {
			$ZodBase64URL.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodE164 = /*@__PURE__*/ $constructor("ZodE164", (inst, def) => {
			$ZodE164.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodJWT = /*@__PURE__*/ $constructor("ZodJWT", (inst, def) => {
			$ZodJWT.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodNumber = /*@__PURE__*/ $constructor("ZodNumber", (inst, def) => {
			$ZodNumber.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
			_installLazyMethods(inst, "ZodNumber", {
				gt(value, params) {
					return this.check(/* @__PURE__ */ _gt(value, params));
				},
				gte(value, params) {
					return this.check(/* @__PURE__ */ _gte(value, params));
				},
				min(value, params) {
					return this.check(/* @__PURE__ */ _gte(value, params));
				},
				lt(value, params) {
					return this.check(/* @__PURE__ */ _lt(value, params));
				},
				lte(value, params) {
					return this.check(/* @__PURE__ */ _lte(value, params));
				},
				max(value, params) {
					return this.check(/* @__PURE__ */ _lte(value, params));
				},
				int(params) {
					return this.check(int(params));
				},
				safe(params) {
					return this.check(int(params));
				},
				positive(params) {
					return this.check(/* @__PURE__ */ _gt(0, params));
				},
				nonnegative(params) {
					return this.check(/* @__PURE__ */ _gte(0, params));
				},
				negative(params) {
					return this.check(/* @__PURE__ */ _lt(0, params));
				},
				nonpositive(params) {
					return this.check(/* @__PURE__ */ _lte(0, params));
				},
				multipleOf(value, params) {
					return this.check(/* @__PURE__ */ _multipleOf(value, params));
				},
				step(value, params) {
					return this.check(/* @__PURE__ */ _multipleOf(value, params));
				},
				finite() {
					return this;
				}
			});
			const bag = inst._zod.bag;
			inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
			inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
			inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? .5);
			inst.isFinite = true;
			inst.format = bag.format ?? null;
		});
		function number(params) {
			return /* @__PURE__ */ _number(ZodNumber, params);
		}
		const ZodNumberFormat = /*@__PURE__*/ $constructor("ZodNumberFormat", (inst, def) => {
			$ZodNumberFormat.init(inst, def);
			ZodNumber.init(inst, def);
		});
		function int(params) {
			return /* @__PURE__ */ _int(ZodNumberFormat, params);
		}
		const ZodBoolean = /*@__PURE__*/ $constructor("ZodBoolean", (inst, def) => {
			$ZodBoolean.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
		});
		function boolean(params) {
			return /* @__PURE__ */ _boolean(ZodBoolean, params);
		}
		const ZodUnknown = /*@__PURE__*/ $constructor("ZodUnknown", (inst, def) => {
			$ZodUnknown.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => void 0;
		});
		function unknown() {
			return /* @__PURE__ */ _unknown(ZodUnknown);
		}
		const ZodNever = /*@__PURE__*/ $constructor("ZodNever", (inst, def) => {
			$ZodNever.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
		});
		function never(params) {
			return /* @__PURE__ */ _never(ZodNever, params);
		}
		const ZodArray = /*@__PURE__*/ $constructor("ZodArray", (inst, def) => {
			$ZodArray.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
			inst.element = def.element;
			_installLazyMethods(inst, "ZodArray", {
				min(n, params) {
					return this.check(/* @__PURE__ */ _minLength(n, params));
				},
				nonempty(params) {
					return this.check(/* @__PURE__ */ _minLength(1, params));
				},
				max(n, params) {
					return this.check(/* @__PURE__ */ _maxLength(n, params));
				},
				length(n, params) {
					return this.check(/* @__PURE__ */ _length(n, params));
				},
				unwrap() {
					return this.element;
				}
			});
		});
		function array(element, params) {
			return /* @__PURE__ */ _array(ZodArray, element, params);
		}
		const ZodObject = /*@__PURE__*/ $constructor("ZodObject", (inst, def) => {
			$ZodObjectJIT.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
			defineLazy(inst, "shape", () => {
				return def.shape;
			});
			_installLazyMethods(inst, "ZodObject", {
				keyof() {
					return _enum(Object.keys(this._zod.def.shape));
				},
				catchall(catchall) {
					return this.clone({
						...this._zod.def,
						catchall
					});
				},
				passthrough() {
					return this.clone({
						...this._zod.def,
						catchall: unknown()
					});
				},
				loose() {
					return this.clone({
						...this._zod.def,
						catchall: unknown()
					});
				},
				strict() {
					return this.clone({
						...this._zod.def,
						catchall: never()
					});
				},
				strip() {
					return this.clone({
						...this._zod.def,
						catchall: void 0
					});
				},
				extend(incoming) {
					return extend(this, incoming);
				},
				safeExtend(incoming) {
					return safeExtend(this, incoming);
				},
				merge(other) {
					return merge(this, other);
				},
				pick(mask) {
					return pick(this, mask);
				},
				omit(mask) {
					return omit(this, mask);
				},
				partial(...args) {
					return partial(ZodOptional, this, args[0]);
				},
				required(...args) {
					return required(ZodNonOptional, this, args[0]);
				}
			});
		});
		function object(shape, params) {
			return new ZodObject({
				type: "object",
				shape: shape ?? {},
				...normalizeParams(params)
			});
		}
		const ZodUnion = /*@__PURE__*/ $constructor("ZodUnion", (inst, def) => {
			$ZodUnion.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
			inst.options = def.options;
		});
		function union(options, params) {
			return new ZodUnion({
				type: "union",
				options,
				...normalizeParams(params)
			});
		}
		const ZodIntersection = /*@__PURE__*/ $constructor("ZodIntersection", (inst, def) => {
			$ZodIntersection.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
		});
		function intersection(left, right) {
			return new ZodIntersection({
				type: "intersection",
				left,
				right
			});
		}
		const ZodEnum = /*@__PURE__*/ $constructor("ZodEnum", (inst, def) => {
			$ZodEnum.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
			inst.enum = def.entries;
			inst.options = Object.values(def.entries);
			const keys = new Set(Object.keys(def.entries));
			inst.extract = (values, params) => {
				const newEntries = {};
				for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
				else throw new Error(`Key ${value} not found in enum`);
				return new ZodEnum({
					...def,
					checks: [],
					...normalizeParams(params),
					entries: newEntries
				});
			};
			inst.exclude = (values, params) => {
				const newEntries = { ...def.entries };
				for (const value of values) if (keys.has(value)) delete newEntries[value];
				else throw new Error(`Key ${value} not found in enum`);
				return new ZodEnum({
					...def,
					checks: [],
					...normalizeParams(params),
					entries: newEntries
				});
			};
		});
		function _enum(values, params) {
			return new ZodEnum({
				type: "enum",
				entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
				...normalizeParams(params)
			});
		}
		const ZodLiteral = /*@__PURE__*/ $constructor("ZodLiteral", (inst, def) => {
			$ZodLiteral.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => literalProcessor(inst, ctx, json, params);
			inst.values = new Set(def.values);
			Object.defineProperty(inst, "value", { get() {
				if (def.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
				return def.values[0];
			} });
		});
		function literal(value, params) {
			return new ZodLiteral({
				type: "literal",
				values: Array.isArray(value) ? value : [value],
				...normalizeParams(params)
			});
		}
		const ZodTransform = /*@__PURE__*/ $constructor("ZodTransform", (inst, def) => {
			$ZodTransform.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
			inst._zod.parse = (payload, _ctx) => {
				if (_ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
				payload.addIssue = (issue$1) => {
					if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, def));
					else {
						const _issue = issue$1;
						if (_issue.fatal) _issue.continue = false;
						_issue.code ?? (_issue.code = "custom");
						_issue.input ?? (_issue.input = payload.value);
						_issue.inst ?? (_issue.inst = inst);
						payload.issues.push(issue(_issue));
					}
				};
				const output = def.transform(payload.value, payload);
				if (output instanceof Promise) return output.then((output) => {
					payload.value = output;
					payload.fallback = true;
					return payload;
				});
				payload.value = output;
				payload.fallback = true;
				return payload;
			};
		});
		function transform(fn) {
			return new ZodTransform({
				type: "transform",
				transform: fn
			});
		}
		const ZodOptional = /*@__PURE__*/ $constructor("ZodOptional", (inst, def) => {
			$ZodOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function optional(innerType) {
			return new ZodOptional({
				type: "optional",
				innerType
			});
		}
		const ZodExactOptional = /*@__PURE__*/ $constructor("ZodExactOptional", (inst, def) => {
			$ZodExactOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function exactOptional(innerType) {
			return new ZodExactOptional({
				type: "optional",
				innerType
			});
		}
		const ZodNullable = /*@__PURE__*/ $constructor("ZodNullable", (inst, def) => {
			$ZodNullable.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function nullable(innerType) {
			return new ZodNullable({
				type: "nullable",
				innerType
			});
		}
		const ZodDefault = /*@__PURE__*/ $constructor("ZodDefault", (inst, def) => {
			$ZodDefault.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
			inst.removeDefault = inst.unwrap;
		});
		function _default(innerType, defaultValue) {
			return new ZodDefault({
				type: "default",
				innerType,
				get defaultValue() {
					return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
				}
			});
		}
		const ZodPrefault = /*@__PURE__*/ $constructor("ZodPrefault", (inst, def) => {
			$ZodPrefault.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function prefault(innerType, defaultValue) {
			return new ZodPrefault({
				type: "prefault",
				innerType,
				get defaultValue() {
					return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
				}
			});
		}
		const ZodNonOptional = /*@__PURE__*/ $constructor("ZodNonOptional", (inst, def) => {
			$ZodNonOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function nonoptional(innerType, params) {
			return new ZodNonOptional({
				type: "nonoptional",
				innerType,
				...normalizeParams(params)
			});
		}
		const ZodCatch = /*@__PURE__*/ $constructor("ZodCatch", (inst, def) => {
			$ZodCatch.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
			inst.removeCatch = inst.unwrap;
		});
		function _catch(innerType, catchValue) {
			return new ZodCatch({
				type: "catch",
				innerType,
				catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
			});
		}
		const ZodPipe = /*@__PURE__*/ $constructor("ZodPipe", (inst, def) => {
			$ZodPipe.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
			inst.in = def.in;
			inst.out = def.out;
		});
		function pipe(in_, out) {
			return new ZodPipe({
				type: "pipe",
				in: in_,
				out
			});
		}
		const ZodReadonly = /*@__PURE__*/ $constructor("ZodReadonly", (inst, def) => {
			$ZodReadonly.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function readonly(innerType) {
			return new ZodReadonly({
				type: "readonly",
				innerType
			});
		}
		const ZodCustom = /*@__PURE__*/ $constructor("ZodCustom", (inst, def) => {
			$ZodCustom.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
		});
		function refine(fn, _params = {}) {
			return /* @__PURE__ */ _refine(ZodCustom, fn, _params);
		}
		function superRefine(fn, params) {
			return /* @__PURE__ */ _superRefine(fn, params);
		}
		//#endregion
		//#region ../../extensions/cluster-agent-fs/lib/typert.remote-client.js
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_create_parameter_0$schema = string();
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_create_parameter_1$schema = string();
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_create_result$schema = string();
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_delete_parameter_0$schema = string();
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_delete_result$schema = string();
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_openAgentSpace_parameter_0$schema = string();
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_openAgentSpace_result$schema = string();
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_reportBinding_parameter_0$schema = string();
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_reportBinding_parameter_1$schema = string();
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_reportBinding_result$schema = string();
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_save_parameter_0$schema = string();
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_save_parameter_1$schema = object({
			"name": string(),
			"prompt": string(),
			"mode": union([
				literal("single"),
				literal("multi"),
				literal("any")
			]),
			"spaceEnabled": boolean()
		});
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_save_result$schema = string();
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_syncGraph_parameter_0$schema = array(object({
			"id": string(),
			"agentId": union([literal(null), string()])
		}));
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_syncGraph_parameter_1$schema = array(object({
			"from": string(),
			"to": string(),
			"direction": union([
				literal("single"),
				literal("none"),
				literal("double")
			])
		}));
		const _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_syncGraph_result$schema = number();
		const TYPERT_REMOTE = {
			package: "@lanxi266/dsh-cluster-agent-fs",
			descriptors: [
				{
					id: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/create",
					service: "clusterAgentFs",
					namespace: "clusterAgentFs",
					method: "create",
					invocation: { kind: "direct" },
					parameters: [{
						name: "id",
						wire: "id",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/create:id",
							schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_create_parameter_0$schema
						}
					}, {
						name: "name",
						wire: "name",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/create:name",
							schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_create_parameter_1$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/create:result",
						schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_create_result$schema
					},
					sourceLocation: {
						"file": "packages/extensions/cluster-agent-fs/src/index.ts",
						"line": 101,
						"column": 9
					}
				},
				{
					id: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/delete",
					service: "clusterAgentFs",
					namespace: "clusterAgentFs",
					method: "delete",
					invocation: { kind: "direct" },
					parameters: [{
						name: "id",
						wire: "id",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/delete:id",
							schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_delete_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/delete:result",
						schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_delete_result$schema
					},
					sourceLocation: {
						"file": "packages/extensions/cluster-agent-fs/src/index.ts",
						"line": 128,
						"column": 9
					}
				},
				{
					id: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/openAgentSpace",
					service: "clusterAgentFs",
					namespace: "clusterAgentFs",
					method: "openAgentSpace",
					invocation: { kind: "direct" },
					parameters: [{
						name: "id",
						wire: "id",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/openAgentSpace:id",
							schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_openAgentSpace_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/openAgentSpace:result",
						schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_openAgentSpace_result$schema
					},
					sourceLocation: {
						"file": "packages/extensions/cluster-agent-fs/src/index.ts",
						"line": 216,
						"column": 9
					}
				},
				{
					id: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/reportBinding",
					service: "clusterAgentFs",
					namespace: "clusterAgentFs",
					method: "reportBinding",
					invocation: { kind: "direct" },
					parameters: [{
						name: "sessionId",
						wire: "sessionId",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/reportBinding:sessionId",
							schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_reportBinding_parameter_0$schema
						}
					}, {
						name: "agentId",
						wire: "agentId",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/reportBinding:agentId",
							schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_reportBinding_parameter_1$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/reportBinding:result",
						schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_reportBinding_result$schema
					},
					sourceLocation: {
						"file": "packages/extensions/cluster-agent-fs/src/index.ts",
						"line": 140,
						"column": 9
					}
				},
				{
					id: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/save",
					service: "clusterAgentFs",
					namespace: "clusterAgentFs",
					method: "save",
					invocation: { kind: "direct" },
					parameters: [{
						name: "id",
						wire: "id",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/save:id",
							schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_save_parameter_0$schema
						}
					}, {
						name: "props",
						wire: "props",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@lanxi266/dsh-cluster-agent-fs/types#AgentProperties",
							schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_save_parameter_1$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/save:result",
						schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_save_result$schema
					},
					sourceLocation: {
						"file": "packages/extensions/cluster-agent-fs/src/index.ts",
						"line": 115,
						"column": 9
					}
				},
				{
					id: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/syncGraph",
					service: "clusterAgentFs",
					namespace: "clusterAgentFs",
					method: "syncGraph",
					invocation: { kind: "direct" },
					parameters: [{
						name: "nodes",
						wire: "nodes",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/syncGraph:nodes",
							schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_syncGraph_parameter_0$schema
						}
					}, {
						name: "edges",
						wire: "edges",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/syncGraph:edges",
							schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_syncGraph_parameter_1$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@lanxi266/dsh-cluster-agent-fs#clusterAgentFs/syncGraph:result",
						schema: _deepseek_ai_dsh_cluster_agent_fs_clusterAgentFs_syncGraph_result$schema
					},
					sourceLocation: {
						"file": "packages/extensions/cluster-agent-fs/src/index.ts",
						"line": 277,
						"column": 9
					}
				}
			]
		};
		//#endregion
		//#region \0dsh-css:C:\Users\Administrator\Documents\Default Project\deepseek-harness\packages\client\ui-cluster\src\client\ClusterAction.module.css.mjs
		const css$1 = ".Tmml0q_action{color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;border-radius:6px;justify-content:center;align-items:center;gap:6px;padding:5px 8px;font-size:13px;line-height:1;display:inline-flex}.Tmml0q_action:hover{background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}.Tmml0q_active{color:var(--dsw-alias-brand-primary)}.Tmml0q_icon{display:block;transform:translate(-3px)}.Tmml0q_label{white-space:nowrap}";
		const tagId$1 = "@lanxi266/dsh-client-ui-cluster/ClusterAction.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$1) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@lanxi266/dsh-client-ui-cluster";
			tag.dataset.pluginCss = tagId$1;
			tag.textContent = css$1;
			document.head.appendChild(tag);
		}
		var ClusterAction_module_css_default = {
			"label": "Tmml0q_label",
			"active": "Tmml0q_active",
			"action": "Tmml0q_action",
			"icon": "Tmml0q_icon"
		};
		//#endregion
		//#region src/client/ClusterAction.tsx
		/** Sidebar foot action that toggles the cluster-mode canvas. */
		/**
		* The foot action button: a four-node cluster glyph, with the label shown
		* only while the sidebar renders wide content.
		*/
		function ClusterAction({ wide, useStore, actions, t, syncGraph }) {
			const open = useStore((s) => s.open);
			const nodes = useStore((s) => s.nodes);
			const edges = useStore((s) => s.edges);
			(0, react.useEffect)(() => {
				actions.setOpen(false);
			}, [actions]);
			(0, react.useEffect)(() => {
				syncGraph(nodes.map((n) => ({
					id: n.id,
					agentId: n.agentId
				})), edges.map((e) => ({
					from: e.from,
					to: e.to,
					direction: e.direction
				})));
			}, [nodes, edges]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				className: open ? `${ClusterAction_module_css_default.action} ${ClusterAction_module_css_default.active}` : ClusterAction_module_css_default.action,
				title: t("action.label"),
				"aria-label": t("action.label"),
				"aria-pressed": open,
				onClick: () => actions.setOpen(!open),
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
					className: ClusterAction_module_css_default.icon,
					viewBox: "0 0 16 16",
					width: 16,
					height: 16,
					fill: "currentColor",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							cx: 5,
							cy: 5,
							r: 2
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							cx: 11,
							cy: 5,
							r: 2
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							cx: 5,
							cy: 11,
							r: 2
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							cx: 11,
							cy: 11,
							r: 2
						})
					]
				}), wide ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: ClusterAction_module_css_default.label,
					children: t("action.label")
				}) : null]
			});
		}
		/** Grid step in px per preset. */
		const GRID_PX = {
			small: 10,
			medium: 20,
			large: 40
		};
		/** The center of a node in canvas coordinates. */
		function nodeCenter(node) {
			return {
				x: node.x + 120 / 2,
				y: node.y + 48 / 2
			};
		}
		/** Snap a coordinate to the nearest grid line (identity when step <= 1). */
		function snap(value, step) {
			return step <= 1 ? value : Math.round(value / step) * step;
		}
		/**
		* The two border points of an edge between two nodes: the center-to-center
		* direction is clipped at each node's rectangle so arrowheads stay visible
		* beside the node instead of hidden under it.
		*/
		function edgePoints(a, b) {
			const ca = nodeCenter(a);
			const cb = nodeCenter(b);
			const dx = cb.x - ca.x;
			const dy = cb.y - ca.y;
			const len = Math.hypot(dx, dy) || 1;
			const ux = dx / len;
			const uy = dy / len;
			const hw = 120 / 2;
			const hh = 48 / 2;
			const sx = ux === 0 ? Number.POSITIVE_INFINITY : hw / Math.abs(ux);
			const sy = uy === 0 ? Number.POSITIVE_INFINITY : hh / Math.abs(uy);
			const s = Math.min(sx, sy);
			return {
				x1: ca.x + ux * s,
				y1: ca.y + uy * s,
				x2: cb.x - ux * s,
				y2: cb.y - uy * s
			};
		}
		/** Serialize the graph shape plus its Agent definitions to pretty-printed JSON (instances are runtime-only, omitted). */
		function serializeGraph(nodes, edges, agents) {
			const shape = nodes.map(({ id, x, y, label, agentId }) => ({
				id,
				x,
				y,
				label,
				agentId
			}));
			return JSON.stringify({
				version: 2,
				nodes: shape,
				edges,
				agents
			}, null, 2);
		}
		/** Parse txt content back into a graph snapshot; throws on invalid input. */
		function parseGraph(text) {
			const data = JSON.parse(text);
			if (data === null || typeof data !== "object" || !Array.isArray(data.nodes) || !Array.isArray(data.edges)) throw new Error("invalid graph file: expected { nodes: [], edges: [] }");
			return {
				nodes: data.nodes.map((raw, index) => {
					const n = raw;
					if (typeof n.id !== "string" || typeof n.x !== "number" || typeof n.y !== "number" || typeof n.label !== "string") throw new Error(`invalid node at index ${index}`);
					return {
						id: n.id,
						x: n.x,
						y: n.y,
						label: n.label,
						agentId: typeof n.agentId === "string" ? n.agentId : null,
						instances: []
					};
				}),
				edges: data.edges.map((raw, index) => {
					const e = raw;
					if (typeof e.id !== "string" || typeof e.from !== "string" || typeof e.to !== "string" || e.direction !== "none" && e.direction !== "single" && e.direction !== "double") throw new Error(`invalid edge at index ${index}`);
					return {
						id: e.id,
						from: e.from,
						to: e.to,
						direction: e.direction
					};
				}),
				agents: (Array.isArray(data.agents) ? data.agents : []).map((raw, index) => {
					const a = raw;
					if (typeof a.id !== "string" || typeof a.name !== "string" || typeof a.prompt !== "string") throw new Error(`invalid agent at index ${index}`);
					return {
						id: a.id,
						name: a.name,
						prompt: a.prompt,
						mode: a.mode === "single" || a.mode === "multi" || a.mode === "any" ? a.mode : "any",
						spaceEnabled: a.spaceEnabled === true
					};
				})
			};
		}
		//#endregion
		//#region \0dsh-css:C:\Users\Administrator\Documents\Default Project\deepseek-harness\packages\client\ui-cluster\src\client\ClusterCanvas.module.css.mjs
		const css = ".Z62-FG_backdrop{pointer-events:auto;z-index:100;background:#00000073;justify-content:center;align-items:center;padding:24px;display:flex;position:fixed;inset:0}.Z62-FG_panel{background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l1);border-radius:12px;flex-direction:column;width:100%;height:100%;display:flex;overflow:hidden}.Z62-FG_header{border-bottom:1px solid var(--dsw-alias-border-l1);justify-content:space-between;align-items:center;padding:12px 16px;display:flex}.Z62-FG_title{color:var(--dsw-alias-label-primary);font-size:15px;font-weight:600}.Z62-FG_close{color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;border-radius:6px;padding:4px 8px;font-size:16px;line-height:1}.Z62-FG_close:hover{background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}.Z62-FG_body{cursor:default;touch-action:none;flex:1;position:relative;overflow:hidden}.Z62-FG_body.Z62-FG_grid{background-image:linear-gradient(to right, var(--dsw-alias-border-l1) 1px, transparent 1px), linear-gradient(to bottom, var(--dsw-alias-border-l1) 1px, transparent 1px)}.Z62-FG_svg{pointer-events:none;width:100%;height:100%;position:absolute;inset:0}.Z62-FG_arrow{fill:var(--dsw-alias-label-secondary)}.Z62-FG_edge{stroke:var(--dsw-alias-label-secondary);stroke-width:2px}.Z62-FG_edgeSelected{stroke:var(--dsw-alias-brand-primary);stroke-width:3px}.Z62-FG_edgeHit{stroke:#0000;stroke-width:14px;pointer-events:stroke;cursor:pointer}.Z62-FG_node{box-sizing:border-box;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);cursor:grab;user-select:none;border-radius:8px;flex-direction:column;justify-content:center;align-items:center;gap:2px;padding:8px;font-size:13px;display:flex;position:absolute;overflow:hidden}.Z62-FG_nodeAgentLine{color:#3b82f6;text-overflow:ellipsis;white-space:nowrap;max-width:100%;font-size:11px;line-height:1;overflow:hidden}.Z62-FG_nodeSelected{border-color:#facc15;box-shadow:0 0 0 2px #facc15}.Z62-FG_nodeConnectSource{border-color:var(--dsw-alias-state-warn-primary);box-shadow:0 0 0 2px var(--dsw-alias-state-warn-primary)}.Z62-FG_nodeConnectMode{cursor:crosshair}.Z62-FG_toolbar{background:var(--dsw-alias-bg-overlay);border:1px solid var(--dsw-alias-border-l1);border-radius:8px;gap:6px;padding:6px;display:flex;position:absolute;top:12px;right:12px}.Z62-FG_toolbar button,.Z62-FG_nodeMenu button{color:var(--dsw-alias-label-primary);cursor:pointer;white-space:nowrap;background:0 0;border:none;border-radius:6px;padding:6px 10px;font-size:13px;line-height:1}.Z62-FG_toolbar button:hover,.Z62-FG_nodeMenu button:hover{background:var(--dsw-alias-bg-layer-1)}.Z62-FG_toolbar button:disabled{color:var(--dsw-alias-label-secondary);opacity:.5;cursor:default}.Z62-FG_toolbar button.Z62-FG_active{background:var(--dsw-alias-brand-primary);color:#fff}.Z62-FG_gridSettings{background:var(--dsw-alias-bg-overlay);border:1px solid var(--dsw-alias-border-l1);border-radius:8px;flex-direction:column;gap:8px;padding:10px 12px;display:flex;position:absolute;bottom:12px;right:12px}.Z62-FG_gridRow{justify-content:space-between;align-items:center;gap:10px;display:flex}.Z62-FG_gridLabel{color:var(--dsw-alias-label-secondary);font-size:12px}.Z62-FG_switch,.Z62-FG_switchOn{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);cursor:pointer;background:0 0;border-radius:999px;padding:4px 10px;font-size:12px;line-height:1}.Z62-FG_switchOn{background:var(--dsw-alias-brand-primary);border-color:var(--dsw-alias-brand-primary);color:#fff}.Z62-FG_gridSizes{gap:4px;display:flex}.Z62-FG_size,.Z62-FG_sizeActive{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border-radius:6px;padding:4px 8px;font-size:12px;line-height:1}.Z62-FG_sizeActive{border-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-brand-primary)}.Z62-FG_nodeMenu{background:var(--dsw-alias-bg-overlay);border:1px solid var(--dsw-alias-border-l1);z-index:10;border-radius:8px;flex-direction:column;gap:2px;padding:4px;display:flex;position:absolute;box-shadow:0 4px 12px #0003}.Z62-FG_instanceEmpty{color:var(--dsw-alias-label-secondary);padding:6px 10px;font-size:12px}.Z62-FG_hint{background:var(--dsw-alias-bg-overlay);border:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-secondary);pointer-events:none;border-radius:6px;padding:6px 10px;font-size:12px;position:absolute;bottom:12px;left:12px}.Z62-FG_fileInput{display:none}.Z62-FG_agentsBar{background:var(--dsw-alias-bg-overlay);border-right:1px solid var(--dsw-alias-border-l1);z-index:20;flex-direction:column;width:240px;display:flex;position:absolute;top:0;bottom:0;left:0}.Z62-FG_agentsBarCollapsed{background:var(--dsw-alias-bg-overlay);border-right:1px solid var(--dsw-alias-border-l1);z-index:20;justify-content:center;align-items:flex-start;width:28px;display:flex;position:absolute;top:0;bottom:0;left:0}.Z62-FG_agentsBarHeader{border-bottom:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-primary);justify-content:space-between;align-items:center;padding:10px 12px;font-size:13px;font-weight:600;display:flex}.Z62-FG_agentsBarCollapseBtn,.Z62-FG_agentsBarExpandBtn{color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;border-radius:6px;padding:4px 8px;font-size:14px}.Z62-FG_agentsBarCollapseBtn:hover,.Z62-FG_agentsBarExpandBtn:hover{background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}.Z62-FG_agentsBarExpandBtn{margin-top:8px}.Z62-FG_agentsList{flex-direction:column;flex:1;gap:4px;padding:8px;display:flex;overflow-y:auto}.Z62-FG_agentsEmpty{color:var(--dsw-alias-label-secondary);text-align:center;padding:12px;font-size:12px}.Z62-FG_agentRow{cursor:pointer;color:var(--dsw-alias-label-primary);border:1px solid #0000;border-radius:6px;justify-content:space-between;align-items:center;gap:6px;padding:8px 10px;font-size:13px;display:flex}.Z62-FG_agentRow:hover{background:var(--dsw-alias-bg-layer-1)}.Z62-FG_agentRowActive{background:var(--dsw-alias-bg-layer-1);border-color:var(--dsw-alias-brand-primary)}.Z62-FG_agentRowName{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.Z62-FG_agentRowDelete{color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;border-radius:4px;padding:2px 4px;font-size:12px}.Z62-FG_agentRowDelete:hover{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-state-error-primary)}.Z62-FG_agentsAddBtn{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);cursor:pointer;background:0 0;border-radius:6px;margin:8px;padding:8px;font-size:13px}.Z62-FG_agentsAddBtn:hover{background:var(--dsw-alias-bg-layer-1)}.Z62-FG_agentForm{border-top:1px solid var(--dsw-alias-border-l1);flex-direction:column;gap:8px;padding:8px;display:flex}.Z62-FG_agentNameInput,.Z62-FG_agentPromptInput{box-sizing:border-box;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base);width:100%;color:var(--dsw-alias-label-primary);border-radius:6px;padding:8px;font-size:13px}.Z62-FG_agentPromptInput{resize:vertical;min-height:90px}.Z62-FG_agentSaveBtn{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);cursor:pointer;background:0 0;border-radius:6px;padding:6px;font-size:13px}.Z62-FG_agentIdError{color:var(--dsw-alias-state-error-primary);font-size:12px}.Z62-FG_agentIdReadonly{color:var(--dsw-alias-label-secondary);word-break:break-all;margin-bottom:4px;font-size:12px}.Z62-FG_modeSelector{gap:6px;margin:4px 0;display:flex}.Z62-FG_modeBtn,.Z62-FG_modeBtnActive{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);cursor:pointer;background:0 0;border-radius:6px;padding:4px 8px;font-size:12px}.Z62-FG_modeBtnActive{border-color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-brand-primary);color:#fff}.Z62-FG_saveToast{color:var(--dsw-alias-state-success-primary);font-size:12px;animation:1.5s forwards Z62-FG_saveToastFade}@keyframes Z62-FG_saveToastFade{0%{opacity:0}15%{opacity:1}70%{opacity:1}to{opacity:0}}.Z62-FG_agentSaveBtn:hover{background:var(--dsw-alias-bg-layer-1)}";
		const tagId = "@lanxi266/dsh-client-ui-cluster/ClusterCanvas.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@lanxi266/dsh-client-ui-cluster";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var ClusterCanvas_module_css_default = {
			"instanceEmpty": "Z62-FG_instanceEmpty",
			"fileInput": "Z62-FG_fileInput",
			"title": "Z62-FG_title",
			"active": "Z62-FG_active",
			"agentRow": "Z62-FG_agentRow",
			"agentRowDelete": "Z62-FG_agentRowDelete",
			"gridRow": "Z62-FG_gridRow",
			"agentsAddBtn": "Z62-FG_agentsAddBtn",
			"agentsBarExpandBtn": "Z62-FG_agentsBarExpandBtn",
			"agentForm": "Z62-FG_agentForm",
			"grid": "Z62-FG_grid",
			"agentIdReadonly": "Z62-FG_agentIdReadonly",
			"modeBtn": "Z62-FG_modeBtn",
			"saveToastFade": "Z62-FG_saveToastFade",
			"arrow": "Z62-FG_arrow",
			"nodeSelected": "Z62-FG_nodeSelected",
			"svg": "Z62-FG_svg",
			"agentRowName": "Z62-FG_agentRowName",
			"body": "Z62-FG_body",
			"agentsBarHeader": "Z62-FG_agentsBarHeader",
			"edgeHit": "Z62-FG_edgeHit",
			"agentPromptInput": "Z62-FG_agentPromptInput",
			"agentSaveBtn": "Z62-FG_agentSaveBtn",
			"switchOn": "Z62-FG_switchOn",
			"nodeAgentLine": "Z62-FG_nodeAgentLine",
			"gridSizes": "Z62-FG_gridSizes",
			"modeBtnActive": "Z62-FG_modeBtnActive",
			"agentsBarCollapsed": "Z62-FG_agentsBarCollapsed",
			"hint": "Z62-FG_hint",
			"agentNameInput": "Z62-FG_agentNameInput",
			"nodeConnectSource": "Z62-FG_nodeConnectSource",
			"toolbar": "Z62-FG_toolbar",
			"edgeSelected": "Z62-FG_edgeSelected",
			"agentRowActive": "Z62-FG_agentRowActive",
			"sizeActive": "Z62-FG_sizeActive",
			"agentIdError": "Z62-FG_agentIdError",
			"nodeConnectMode": "Z62-FG_nodeConnectMode",
			"gridLabel": "Z62-FG_gridLabel",
			"switch": "Z62-FG_switch",
			"agentsBarCollapseBtn": "Z62-FG_agentsBarCollapseBtn",
			"size": "Z62-FG_size",
			"modeSelector": "Z62-FG_modeSelector",
			"agentsBar": "Z62-FG_agentsBar",
			"saveToast": "Z62-FG_saveToast",
			"header": "Z62-FG_header",
			"edge": "Z62-FG_edge",
			"nodeMenu": "Z62-FG_nodeMenu",
			"node": "Z62-FG_node",
			"gridSettings": "Z62-FG_gridSettings",
			"panel": "Z62-FG_panel",
			"backdrop": "Z62-FG_backdrop",
			"agentsList": "Z62-FG_agentsList",
			"agentsEmpty": "Z62-FG_agentsEmpty",
			"close": "Z62-FG_close"
		};
		//#endregion
		//#region src/client/ClusterCanvas.tsx
		/** Node-graph editor canvas toggled by the cluster-mode sidebar action. */
		const DIR_KEY = {
			none: "dir.none",
			single: "dir.single",
			double: "dir.double"
		};
		const MODE_OPTIONS = [
			"single",
			"multi",
			"any"
		];
		/**
		* The canvas: a node-graph editor with drag, connect, direction cycling, grid
		* snapping, txt export/load, and per-node agent entry (nodes open native
		* conversations). Nodes and edges live in the shared store so the graph
		* survives closing and reopening the canvas.
		*/
		function ClusterCanvas({ useStore, actions, t, useWorkspaces, enterNode, openSession, createAgentDir, saveAgentFile, deleteAgentDir, openAgentSpace, reportBinding, syncGraph }) {
			const open = useStore((s) => s.open);
			const nodes = useStore((s) => s.nodes);
			const edges = useStore((s) => s.edges);
			const selectedNodeId = useStore((s) => s.selectedNodeId);
			const selectedEdgeId = useStore((s) => s.selectedEdgeId);
			const connectMode = useStore((s) => s.connectMode);
			const connectSourceId = useStore((s) => s.connectSourceId);
			const menuNodeId = useStore((s) => s.menuNodeId);
			const enterMode = useStore((s) => s.enterMode);
			const expandMode = useStore((s) => s.expandMode);
			const expandTargetId = useStore((s) => s.expandTargetId);
			const registerMode = useStore((s) => s.registerMode);
			const registerTargetId = useStore((s) => s.registerTargetId);
			const renameMode = useStore((s) => s.renameMode);
			const renameTargetId = useStore((s) => s.renameTargetId);
			const gridEnabled = useStore((s) => s.gridEnabled);
			const gridSize = useStore((s) => s.gridSize);
			const agents = useStore((s) => s.agents);
			const agentsBarOpen = useStore((s) => s.agentsBarOpen);
			const recentWorkspaceId = useWorkspaces((s) => s.recentWorkspaceId);
			(0, react.useEffect)(() => {
				syncGraph(nodes.map((n) => ({
					id: n.id,
					agentId: n.agentId
				})), edges.map((e) => ({
					from: e.from,
					to: e.to,
					direction: e.direction
				})));
			}, [nodes, edges]);
			const bodyRef = (0, react.useRef)(null);
			const dragRef = (0, react.useRef)(null);
			const fileRef = (0, react.useRef)(null);
			const [selectedAgentId, setSelectedAgentId] = (0, react.useState)(null);
			const [addingAgent, setAddingAgent] = (0, react.useState)(false);
			const [newAgentId, setNewAgentId] = (0, react.useState)("");
			const [agentIdError, setAgentIdError] = (0, react.useState)(null);
			const [renameValue, setRenameValue] = (0, react.useState)("");
			const [savedFlash, setSavedFlash] = (0, react.useState)(false);
			const selectedAgent = selectedAgentId === null ? void 0 : agents.find((a) => a.id === selectedAgentId);
			(0, react.useEffect)(() => {
				if (selectedAgent === void 0) return;
				const timer = setTimeout(() => {
					saveAgentFile(selectedAgent.id, {
						name: selectedAgent.name,
						prompt: selectedAgent.prompt,
						mode: selectedAgent.mode,
						spaceEnabled: selectedAgent.spaceEnabled
					});
				}, 500);
				return () => clearTimeout(timer);
			}, [
				selectedAgent?.name,
				selectedAgent?.prompt,
				selectedAgent?.mode,
				selectedAgent?.spaceEnabled
			]);
			if (!open) return null;
			const nodeById = new Map(nodes.map((n) => [n.id, n]));
			const menuNode = menuNodeId === null ? void 0 : nodeById.get(menuNodeId);
			const expandNode = expandTargetId === null ? void 0 : nodeById.get(expandTargetId);
			const registerNode = registerTargetId === null ? void 0 : nodeById.get(registerTargetId);
			const renameTarget = renameTargetId === null ? void 0 : nodeById.get(renameTargetId);
			const selectedEdge = selectedEdgeId === null ? void 0 : edges.find((e) => e.id === selectedEdgeId);
			const step = gridEnabled ? GRID_PX[gridSize] : 1;
			const anyMode = connectMode || enterMode || expandMode || registerMode || renameMode;
			function canvasPoint(e) {
				const rect = bodyRef.current?.getBoundingClientRect();
				return {
					x: e.clientX - (rect?.left ?? 0),
					y: e.clientY - (rect?.top ?? 0)
				};
			}
			function onBodyPointerDown() {
				actions.clearSelection();
				actions.cancelConnect();
				actions.closeInstanceList();
				actions.closeRegisterList();
				actions.closeRenameInput();
			}
			function onBodyDoubleClick(e) {
				const p = canvasPoint(e);
				actions.addNode(p.x, p.y);
			}
			async function onEnterNode(node) {
				const sessionId = await enterNode(recentWorkspaceId);
				if (sessionId !== null) {
					actions.addInstance(node.id, sessionId);
					if (node.agentId != null) reportBinding(sessionId, node.agentId);
				}
				actions.toggleEnterMode();
				actions.setOpen(false);
			}
			function onNodePointerDown(e, node) {
				e.stopPropagation();
				if (connectMode) {
					actions.pickConnectNode(node.id);
					return;
				}
				if (enterMode) {
					onEnterNode(node);
					return;
				}
				if (expandMode) {
					actions.openInstanceList(node.id);
					return;
				}
				if (registerMode) {
					actions.openRegisterList(node.id);
					return;
				}
				if (renameMode) {
					openRename(node);
					return;
				}
				actions.selectNode(node.id);
				const p = canvasPoint(e);
				dragRef.current = {
					id: node.id,
					dx: p.x - node.x,
					dy: p.y - node.y
				};
				e.currentTarget.setPointerCapture(e.pointerId);
			}
			function onNodePointerMove(e) {
				const drag = dragRef.current;
				if (drag === null) return;
				const p = canvasPoint(e);
				actions.moveNode(drag.id, p.x - drag.dx, p.y - drag.dy);
			}
			function onNodePointerEnd() {
				dragRef.current = null;
			}
			function onNodeDoubleClick(e, node) {
				e.stopPropagation();
				actions.openMenu(node.id);
			}
			function onEdgeClick(edge) {
				if (selectedEdgeId === edge.id) actions.cycleEdgeDirection(edge.id);
				else actions.selectEdge(edge.id);
			}
			function onAddNode() {
				const rect = bodyRef.current?.getBoundingClientRect();
				const cx = (rect?.width ?? 800) / 2;
				const cy = (rect?.height ?? 600) / 2;
				const offset = nodes.length % 5 * 36;
				actions.addNode(cx + offset, cy + offset);
			}
			function onToggleConnect() {
				actions.toggleConnectMode();
			}
			function onEnterClick() {
				const selected = selectedNodeId === null ? void 0 : nodeById.get(selectedNodeId);
				if (selected !== void 0) {
					onEnterNode(selected);
					return;
				}
				actions.toggleEnterMode();
			}
			function onExpandClick() {
				if (selectedNodeId !== null) {
					actions.openInstanceList(selectedNodeId);
					return;
				}
				actions.toggleExpandMode();
			}
			function onRegisterClick() {
				if (selectedNodeId !== null) {
					actions.openRegisterList(selectedNodeId);
					return;
				}
				actions.toggleRegisterMode();
			}
			function openRename(node) {
				setRenameValue(node.label);
				actions.openRenameInput(node.id);
			}
			function onRenameClick() {
				const selected = selectedNodeId === null ? void 0 : nodeById.get(selectedNodeId);
				if (selected !== void 0) {
					openRename(selected);
					return;
				}
				actions.toggleRenameMode();
			}
			function submitRename() {
				if (renameTarget === void 0) return;
				actions.renameNode(renameTarget.id, renameValue.trim() || renameTarget.label);
				actions.closeRenameInput();
				setRenameValue("");
			}
			function onCycleDirection() {
				if (selectedEdgeId !== null) actions.cycleEdgeDirection(selectedEdgeId);
			}
			function onExport() {
				const text = serializeGraph(nodes, edges, agents);
				const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
				const url = URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				a.download = "cluster-graph.txt";
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
				URL.revokeObjectURL(url);
			}
			function onLoadClick() {
				fileRef.current?.click();
			}
			function onLoadFile(e) {
				const file = e.target.files?.[0];
				if (file === void 0) return;
				file.text().then((text) => {
					const parsed = parseGraph(text);
					actions.loadGraph(parsed.nodes, parsed.edges);
					actions.loadAgents(parsed.agents);
					for (const agent of parsed.agents) saveAgentFile(agent.id, {
						name: agent.name,
						prompt: agent.prompt,
						mode: agent.mode,
						spaceEnabled: agent.spaceEnabled
					});
				}).catch((error) => {
					console.error("[ui-cluster] load graph failed:", error);
				});
				e.target.value = "";
			}
			function onAddAgent() {
				setSelectedAgentId(null);
				setAddingAgent(!addingAgent);
				setNewAgentId("");
				setAgentIdError(null);
			}
			function submitNewAgent() {
				const id = newAgentId.trim();
				if (!/^[a-zA-Z0-9_]+$/.test(id)) {
					setAgentIdError("只能字母、数字、下划线");
					return;
				}
				if (agents.some((a) => a.id === id)) {
					setAgentIdError("该 ID 已存在");
					return;
				}
				actions.addAgent(id, id, "", "any");
				setSelectedAgentId(id);
				createAgentDir(id, id);
				setAddingAgent(false);
				setNewAgentId("");
				setAgentIdError(null);
			}
			function onDeleteAgent(id) {
				actions.deleteAgent(id);
				if (selectedAgentId === id) setSelectedAgentId(null);
				deleteAgentDir(id);
			}
			function onSaveAgent() {
				if (selectedAgent === void 0) return;
				saveAgentFile(selectedAgent.id, {
					name: selectedAgent.name,
					prompt: selectedAgent.prompt,
					mode: selectedAgent.mode,
					spaceEnabled: selectedAgent.spaceEnabled
				});
				setSavedFlash(true);
				window.setTimeout(() => setSavedFlash(false), 1500);
			}
			const dirLabel = selectedEdge === void 0 ? t("toolbar.direction") : t(DIR_KEY[selectedEdge.direction]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: ClusterCanvas_module_css_default.backdrop,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: ClusterCanvas_module_css_default.panel,
					role: "dialog",
					"aria-label": t("canvas.title"),
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
						className: ClusterCanvas_module_css_default.header,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: ClusterCanvas_module_css_default.title,
							children: t("canvas.title")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: ClusterCanvas_module_css_default.close,
							"aria-label": t("canvas.close"),
							onClick: () => actions.setOpen(false),
							children: "✕"
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						ref: bodyRef,
						className: gridEnabled ? `${ClusterCanvas_module_css_default.body} ${ClusterCanvas_module_css_default.grid}` : ClusterCanvas_module_css_default.body,
						style: gridEnabled ? { backgroundSize: `${step}px ${step}px` } : void 0,
						onPointerDown: onBodyPointerDown,
						onDoubleClick: onBodyDoubleClick,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
								className: ClusterCanvas_module_css_default.svg,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("marker", {
									id: "cluster-arrow-end",
									viewBox: "0 0 10 10",
									refX: "9",
									refY: "5",
									markerWidth: "7",
									markerHeight: "7",
									orient: "auto",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
										className: ClusterCanvas_module_css_default.arrow,
										d: "M 0 0 L 10 5 L 0 10 z"
									})
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("marker", {
									id: "cluster-arrow-start",
									viewBox: "0 0 10 10",
									refX: "1",
									refY: "5",
									markerWidth: "7",
									markerHeight: "7",
									orient: "auto",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
										className: ClusterCanvas_module_css_default.arrow,
										d: "M 10 0 L 0 5 L 10 10 z"
									})
								})] }), edges.map((edge) => {
									const a = nodeById.get(edge.from);
									const b = nodeById.get(edge.to);
									if (a === void 0 || b === void 0) return null;
									const p = edgePoints(a, b);
									const isSelected = edge.id === selectedEdgeId;
									return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
										x1: p.x1,
										y1: p.y1,
										x2: p.x2,
										y2: p.y2,
										className: ClusterCanvas_module_css_default.edgeHit,
										onPointerDown: (e) => e.stopPropagation(),
										onClick: (e) => {
											e.stopPropagation();
											onEdgeClick(edge);
										}
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
										x1: p.x1,
										y1: p.y1,
										x2: p.x2,
										y2: p.y2,
										className: isSelected ? ClusterCanvas_module_css_default.edgeSelected : ClusterCanvas_module_css_default.edge,
										markerEnd: edge.direction === "none" ? void 0 : "url(#cluster-arrow-end)",
										markerStart: edge.direction === "double" ? "url(#cluster-arrow-start)" : void 0
									})] }, edge.id);
								})]
							}),
							nodes.map((node) => {
								const isSource = connectSourceId === node.id;
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: [
										ClusterCanvas_module_css_default.node,
										node.id === selectedNodeId ? ClusterCanvas_module_css_default.nodeSelected : "",
										isSource ? ClusterCanvas_module_css_default.nodeConnectSource : "",
										anyMode ? ClusterCanvas_module_css_default.nodeConnectMode : ""
									].filter(Boolean).join(" "),
									style: {
										left: node.x,
										top: node.y,
										width: 120,
										height: 48
									},
									onPointerDown: (e) => onNodePointerDown(e, node),
									onPointerMove: onNodePointerMove,
									onPointerUp: onNodePointerEnd,
									onPointerCancel: onNodePointerEnd,
									onDoubleClick: (e) => onNodeDoubleClick(e, node),
									children: [node.label, node.agentId !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: ClusterCanvas_module_css_default.nodeAgentLine,
										children: agents.find((a) => a.id === node.agentId)?.name ?? node.agentId
									})]
								}, node.id);
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: agentsBarOpen ? ClusterCanvas_module_css_default.agentsBar : ClusterCanvas_module_css_default.agentsBarCollapsed,
								onPointerDown: (e) => e.stopPropagation(),
								children: agentsBarOpen ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: ClusterCanvas_module_css_default.agentsBarHeader,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("agents.title") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											className: ClusterCanvas_module_css_default.agentsBarCollapseBtn,
											onClick: () => actions.setAgentsBarOpen(false),
											children: "«"
										})]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: ClusterCanvas_module_css_default.agentsList,
										children: agents.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
											className: ClusterCanvas_module_css_default.agentsEmpty,
											children: t("agents.empty")
										}) : agents.map((a) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: a.id === selectedAgentId ? `${ClusterCanvas_module_css_default.agentRow} ${ClusterCanvas_module_css_default.agentRowActive}` : ClusterCanvas_module_css_default.agentRow,
											onClick: () => setSelectedAgentId(a.id),
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: ClusterCanvas_module_css_default.agentRowName,
												children: a.name
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: ClusterCanvas_module_css_default.agentRowDelete,
												onClick: (e) => {
													e.stopPropagation();
													onDeleteAgent(a.id);
												},
												children: "✕"
											})]
										}, a.id))
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: ClusterCanvas_module_css_default.agentsAddBtn,
										onClick: onAddAgent,
										children: ["＋ ", t("agents.add")]
									}),
									addingAgent && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: ClusterCanvas_module_css_default.agentForm,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
												className: ClusterCanvas_module_css_default.agentNameInput,
												value: newAgentId,
												placeholder: t("agents.idPlaceholder"),
												onChange: (e) => {
													setNewAgentId(e.target.value);
													setAgentIdError(null);
												},
												onKeyDown: (e) => {
													if (e.key === "Enter") submitNewAgent();
												}
											}),
											agentIdError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: ClusterCanvas_module_css_default.agentIdError,
												children: agentIdError
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
												type: "button",
												className: ClusterCanvas_module_css_default.agentSaveBtn,
												onClick: submitNewAgent,
												children: ["✓ ", t("agents.confirm")]
											})
										]
									}),
									selectedAgent !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: ClusterCanvas_module_css_default.agentForm,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: ClusterCanvas_module_css_default.agentIdReadonly,
												children: [
													t("agents.idLabel"),
													"：",
													selectedAgent.id
												]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
												className: ClusterCanvas_module_css_default.agentNameInput,
												value: selectedAgent.name,
												placeholder: t("agents.name"),
												onChange: (e) => actions.updateAgent(selectedAgent.id, { name: e.target.value })
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
												className: ClusterCanvas_module_css_default.agentPromptInput,
												value: selectedAgent.prompt,
												placeholder: t("agents.prompt"),
												onChange: (e) => actions.updateAgent(selectedAgent.id, { prompt: e.target.value })
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
												className: ClusterCanvas_module_css_default.modeSelector,
												children: MODE_OPTIONS.map((m) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													className: selectedAgent.mode === m ? ClusterCanvas_module_css_default.modeBtnActive : ClusterCanvas_module_css_default.modeBtn,
													onClick: () => actions.updateAgent(selectedAgent.id, { mode: m }),
													children: t(`mode.${m}`)
												}, m))
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: ClusterCanvas_module_css_default.modeSelector,
												children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
													type: "button",
													className: ClusterCanvas_module_css_default.modeBtn,
													onClick: () => {
														openAgentSpace(selectedAgent.id);
													},
													children: ["📁 ", t("agents.space")]
												}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													role: "switch",
													"aria-checked": selectedAgent.spaceEnabled,
													className: selectedAgent.spaceEnabled ? ClusterCanvas_module_css_default.modeBtnActive : ClusterCanvas_module_css_default.modeBtn,
													onClick: () => actions.updateAgent(selectedAgent.id, { spaceEnabled: !selectedAgent.spaceEnabled }),
													children: selectedAgent.spaceEnabled ? t("agents.spaceEnabled") : t("agents.spaceDisabled")
												})]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
												type: "button",
												className: ClusterCanvas_module_css_default.agentSaveBtn,
												onClick: onSaveAgent,
												children: ["💾 ", t("agents.save")]
											}),
											savedFlash && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: ClusterCanvas_module_css_default.saveToast,
												children: t("agents.saved")
											})
										]
									})
								] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: ClusterCanvas_module_css_default.agentsBarExpandBtn,
									onClick: () => actions.setAgentsBarOpen(true),
									children: "»"
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: ClusterCanvas_module_css_default.toolbar,
								onPointerDown: (e) => e.stopPropagation(),
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: onAddNode,
										children: ["＋ ", t("toolbar.add")]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => actions.deleteSelection(),
										disabled: selectedNodeId === null && selectedEdgeId === null,
										children: ["🗑 ", t("toolbar.delete")]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: connectMode ? ClusterCanvas_module_css_default.active : void 0,
										onClick: onToggleConnect,
										children: ["↔ ", t("toolbar.connect")]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: onCycleDirection,
										disabled: selectedEdgeId === null,
										children: ["⇄ ", dirLabel]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: enterMode ? ClusterCanvas_module_css_default.active : void 0,
										onClick: onEnterClick,
										children: ["▸ ", t("toolbar.enter")]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: expandMode ? ClusterCanvas_module_css_default.active : void 0,
										onClick: onExpandClick,
										children: ["▤ ", t("toolbar.expand")]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: registerMode ? ClusterCanvas_module_css_default.active : void 0,
										onClick: onRegisterClick,
										children: ["⚙ ", t("toolbar.register")]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: renameMode ? ClusterCanvas_module_css_default.active : void 0,
										onClick: onRenameClick,
										children: ["✎ ", t("toolbar.rename")]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: onExport,
										children: ["⬇ ", t("toolbar.export")]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: onLoadClick,
										children: ["⬆ ", t("toolbar.load")]
									})
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: ClusterCanvas_module_css_default.gridSettings,
								onPointerDown: (e) => e.stopPropagation(),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: ClusterCanvas_module_css_default.gridRow,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: ClusterCanvas_module_css_default.gridLabel,
										children: t("grid.toggle")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										role: "switch",
										"aria-checked": gridEnabled,
										className: gridEnabled ? ClusterCanvas_module_css_default.switchOn : ClusterCanvas_module_css_default.switch,
										onClick: () => actions.toggleGrid(),
										children: gridEnabled ? t("grid.on") : t("grid.off")
									})]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: ClusterCanvas_module_css_default.gridRow,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: ClusterCanvas_module_css_default.gridLabel,
										children: t("grid.size")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: ClusterCanvas_module_css_default.gridSizes,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: gridSize === "small" ? ClusterCanvas_module_css_default.sizeActive : ClusterCanvas_module_css_default.size,
												onClick: () => actions.setGridSize("small"),
												children: t("grid.small")
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: gridSize === "medium" ? ClusterCanvas_module_css_default.sizeActive : ClusterCanvas_module_css_default.size,
												onClick: () => actions.setGridSize("medium"),
												children: t("grid.medium")
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: gridSize === "large" ? ClusterCanvas_module_css_default.sizeActive : ClusterCanvas_module_css_default.size,
												onClick: () => actions.setGridSize("large"),
												children: t("grid.large")
											})
										]
									})]
								})]
							}),
							menuNode !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: ClusterCanvas_module_css_default.nodeMenu,
								style: {
									left: menuNode.x + 120 + 8,
									top: menuNode.y
								},
								onPointerDown: (e) => e.stopPropagation(),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => actions.startConnect(menuNode.id),
									children: ["🔗 ", t("menu.connect")]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => actions.deleteNode(menuNode.id),
									children: ["🗑 ", t("menu.delete")]
								})]
							}),
							expandNode !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: ClusterCanvas_module_css_default.nodeMenu,
								style: {
									left: expandNode.x + 120 + 8,
									top: expandNode.y
								},
								onPointerDown: (e) => e.stopPropagation(),
								children: [expandNode.instances.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: ClusterCanvas_module_css_default.instanceEmpty,
									children: t("instance.empty")
								}) : expandNode.instances.map((sessionId, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									title: sessionId,
									onClick: () => {
										openSession(sessionId);
										actions.closeInstanceList();
										actions.setOpen(false);
									},
									children: [
										"💬 ",
										t("instance.session"),
										" ",
										index + 1
									]
								}, sessionId)), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => actions.closeInstanceList(),
									children: ["✕ ", t("instance.close")]
								})]
							}),
							registerNode !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: ClusterCanvas_module_css_default.nodeMenu,
								style: {
									left: registerNode.x + 120 + 8,
									top: registerNode.y
								},
								onPointerDown: (e) => e.stopPropagation(),
								children: [
									agents.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: ClusterCanvas_module_css_default.instanceEmpty,
										children: t("register.empty")
									}) : agents.map((a) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => actions.bindAgentToNode(registerNode.id, a.id),
										children: a.name
									}, a.id)),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => actions.bindAgentToNode(registerNode.id, null),
										children: t("register.unbind")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => actions.closeRegisterList(),
										children: ["✕ ", t("instance.close")]
									})
								]
							}),
							renameTarget !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: ClusterCanvas_module_css_default.nodeMenu,
								style: {
									left: renameTarget.x + 120 + 8,
									top: renameTarget.y
								},
								onPointerDown: (e) => e.stopPropagation(),
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										className: ClusterCanvas_module_css_default.agentNameInput,
										value: renameValue,
										placeholder: t("rename.placeholder"),
										onChange: (e) => setRenameValue(e.target.value),
										onKeyDown: (e) => {
											if (e.key === "Enter") submitRename();
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: submitRename,
										children: ["✓ ", t("agents.confirm")]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => actions.closeRenameInput(),
										children: ["✕ ", t("instance.close")]
									})
								]
							}),
							(connectMode || enterMode || expandMode || registerMode || renameMode || selectedEdge !== void 0) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: ClusterCanvas_module_css_default.hint,
								children: connectMode ? t("hint.connect") : enterMode ? t("hint.enter") : expandMode ? t("hint.expand") : registerMode ? t("hint.register") : renameMode ? t("hint.rename") : t("hint.edge")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								ref: fileRef,
								type: "file",
								accept: ".txt,text/plain,application/json",
								className: ClusterCanvas_module_css_default.fileInput,
								onChange: onLoadFile
							})
						]
					})]
				})
			});
		}
		//#endregion
		//#region src/client/stores.ts
		/** Cluster-mode store: canvas open/closed state plus the node-graph editor state. */
		const DIRECTION_ORDER = [
			"none",
			"single",
			"double"
		];
		/** Highest numeric suffix among ids carrying the given prefix (0 when none). */
		function maxSeq(items, prefix) {
			let max = 0;
			for (const item of items) {
				if (!item.id.startsWith(prefix)) continue;
				const n = Number.parseInt(item.id.slice(prefix.length), 10);
				if (Number.isFinite(n) && n > max) max = n;
			}
			return max;
		}
		/**
		* Create the cluster-mode store handle. One handle is shared by the sidebar
		* action and the canvas entry, so the open/closed state stays in sync across
		* both; the graph state rides the same store and therefore survives opening
		* and closing the canvas.
		* @returns the store handle (spec + type + identity + factory in one).
		*/
		function createClusterStore() {
			return (0, _deepseek_ai_dsh_client_runtime_client.defineStore)({
				persist: "dsh.cluster",
				init: () => ({
					open: false,
					nodes: [],
					edges: [],
					selectedNodeId: null,
					selectedEdgeId: null,
					connectMode: false,
					connectSourceId: null,
					menuNodeId: null,
					enterMode: false,
					expandMode: false,
					expandTargetId: null,
					registerMode: false,
					registerTargetId: null,
					renameMode: false,
					renameTargetId: null,
					gridEnabled: true,
					gridSize: "medium",
					nodeSeq: 0,
					edgeSeq: 0,
					agents: [],
					agentSeq: 0,
					agentsBarOpen: true
				}),
				actions: {
					setOpen: (d, open) => {
						d.open = open;
						if (!open) {
							d.selectedNodeId = null;
							d.selectedEdgeId = null;
							d.connectMode = false;
							d.connectSourceId = null;
							d.menuNodeId = null;
							d.enterMode = false;
							d.expandMode = false;
							d.expandTargetId = null;
							d.registerMode = false;
							d.registerTargetId = null;
							d.renameMode = false;
							d.renameTargetId = null;
						}
					},
					addNode: (d, cx, cy) => {
						d.nodeSeq += 1;
						const id = `n${d.nodeSeq}`;
						const step = d.gridEnabled ? GRID_PX[d.gridSize] : 1;
						d.nodes.push({
							id,
							x: snap(cx - 120 / 2, step),
							y: snap(cy - 48 / 2, step),
							label: `节点 ${d.nodeSeq}`,
							instances: [],
							agentId: null
						});
						d.selectedNodeId = id;
						d.selectedEdgeId = null;
						d.menuNodeId = null;
					},
					moveNode: (d, id, x, y) => {
						const node = d.nodes.find((n) => n.id === id);
						if (node === void 0) return;
						const step = d.gridEnabled ? GRID_PX[d.gridSize] : 1;
						node.x = snap(x, step);
						node.y = snap(y, step);
					},
					deleteNode: (d, id) => {
						d.nodes = d.nodes.filter((n) => n.id !== id);
						d.edges = d.edges.filter((e) => e.from !== id && e.to !== id);
						if (d.selectedNodeId === id) d.selectedNodeId = null;
						if (d.connectSourceId === id) d.connectSourceId = null;
						if (d.menuNodeId === id) d.menuNodeId = null;
						if (d.renameTargetId === id) d.renameTargetId = null;
					},
					deleteEdge: (d, id) => {
						d.edges = d.edges.filter((e) => e.id !== id);
						if (d.selectedEdgeId === id) d.selectedEdgeId = null;
					},
					deleteSelection: (d) => {
						if (d.selectedEdgeId !== null) {
							d.edges = d.edges.filter((e) => e.id !== d.selectedEdgeId);
							d.selectedEdgeId = null;
						} else if (d.selectedNodeId !== null) {
							const id = d.selectedNodeId;
							d.nodes = d.nodes.filter((n) => n.id !== id);
							d.edges = d.edges.filter((e) => e.from !== id && e.to !== id);
							d.selectedNodeId = null;
							if (d.connectSourceId === id) d.connectSourceId = null;
							if (d.renameTargetId === id) d.renameTargetId = null;
						}
						d.menuNodeId = null;
					},
					selectNode: (d, id) => {
						d.selectedNodeId = id;
						d.selectedEdgeId = null;
						d.menuNodeId = null;
					},
					selectEdge: (d, id) => {
						d.selectedEdgeId = id;
						d.selectedNodeId = null;
						d.menuNodeId = null;
					},
					clearSelection: (d) => {
						d.selectedNodeId = null;
						d.selectedEdgeId = null;
						d.menuNodeId = null;
					},
					toggleConnectMode: (d) => {
						d.connectMode = !d.connectMode;
						d.connectSourceId = null;
						d.menuNodeId = null;
						d.enterMode = false;
						d.expandMode = false;
						d.expandTargetId = null;
						d.registerMode = false;
						d.registerTargetId = null;
						d.renameMode = false;
						d.renameTargetId = null;
					},
					startConnect: (d, id) => {
						d.connectMode = true;
						d.connectSourceId = id;
						d.menuNodeId = null;
					},
					cancelConnect: (d) => {
						d.connectMode = false;
						d.connectSourceId = null;
					},
					pickConnectNode: (d, id) => {
						if (d.connectSourceId === null) {
							d.connectSourceId = id;
							return;
						}
						if (d.connectSourceId === id) {
							d.connectSourceId = null;
							return;
						}
						const from = d.connectSourceId;
						d.edgeSeq += 1;
						const edgeId = `e${d.edgeSeq}`;
						d.edges.push({
							id: edgeId,
							from,
							to: id,
							direction: "single"
						});
						d.selectedEdgeId = edgeId;
						d.selectedNodeId = null;
						d.connectMode = false;
						d.connectSourceId = null;
					},
					cycleEdgeDirection: (d, id) => {
						const edge = d.edges.find((e) => e.id === id);
						if (edge === void 0) return;
						edge.direction = DIRECTION_ORDER[(DIRECTION_ORDER.indexOf(edge.direction) + 1) % DIRECTION_ORDER.length] ?? "none";
					},
					openMenu: (d, id) => {
						d.menuNodeId = id;
						d.selectedNodeId = id;
						d.selectedEdgeId = null;
					},
					closeMenu: (d) => {
						d.menuNodeId = null;
					},
					toggleGrid: (d) => {
						d.gridEnabled = !d.gridEnabled;
					},
					setGridSize: (d, size) => {
						d.gridSize = size;
					},
					addInstance: (d, nodeId, sessionId) => {
						const node = d.nodes.find((n) => n.id === nodeId);
						if (node === void 0 || node.instances.includes(sessionId)) return;
						node.instances.push(sessionId);
					},
					toggleEnterMode: (d) => {
						d.enterMode = !d.enterMode;
						d.expandMode = false;
						d.connectMode = false;
						d.connectSourceId = null;
						d.expandTargetId = null;
						d.registerMode = false;
						d.registerTargetId = null;
						d.renameMode = false;
						d.renameTargetId = null;
						d.menuNodeId = null;
					},
					toggleExpandMode: (d) => {
						d.expandMode = !d.expandMode;
						d.enterMode = false;
						d.connectMode = false;
						d.connectSourceId = null;
						d.expandTargetId = null;
						d.registerMode = false;
						d.registerTargetId = null;
						d.renameMode = false;
						d.renameTargetId = null;
						d.menuNodeId = null;
					},
					openInstanceList: (d, nodeId) => {
						d.expandTargetId = nodeId;
					},
					closeInstanceList: (d) => {
						d.expandTargetId = null;
					},
					toggleRegisterMode: (d) => {
						d.registerMode = !d.registerMode;
						d.enterMode = false;
						d.expandMode = false;
						d.connectMode = false;
						d.connectSourceId = null;
						d.expandTargetId = null;
						d.registerTargetId = null;
						d.renameMode = false;
						d.renameTargetId = null;
						d.menuNodeId = null;
					},
					openRegisterList: (d, nodeId) => {
						d.registerTargetId = nodeId;
					},
					closeRegisterList: (d) => {
						d.registerTargetId = null;
					},
					toggleRenameMode: (d) => {
						d.renameMode = !d.renameMode;
						d.renameTargetId = null;
						d.enterMode = false;
						d.expandMode = false;
						d.connectMode = false;
						d.connectSourceId = null;
						d.expandTargetId = null;
						d.registerMode = false;
						d.registerTargetId = null;
						d.menuNodeId = null;
					},
					openRenameInput: (d, nodeId) => {
						d.renameTargetId = nodeId;
					},
					closeRenameInput: (d) => {
						d.renameTargetId = null;
					},
					renameNode: (d, id, label) => {
						const node = d.nodes.find((n) => n.id === id);
						if (node === void 0) return;
						node.label = label;
					},
					bindAgentToNode: (d, nodeId, agentId) => {
						const node = d.nodes.find((n) => n.id === nodeId);
						if (node === void 0) return;
						node.agentId = agentId;
						d.registerTargetId = null;
						d.registerMode = false;
					},
					addAgent: (d, id, name, prompt, mode) => {
						d.agents.push({
							id,
							name,
							prompt,
							mode,
							spaceEnabled: false
						});
						d.agentSeq += 1;
					},
					deleteAgent: (d, id) => {
						d.agents = d.agents.filter((a) => a.id !== id);
					},
					updateAgent: (d, id, patch) => {
						const agent = d.agents.find((a) => a.id === id);
						if (agent === void 0) return;
						if (patch.name !== void 0) agent.name = patch.name;
						if (patch.prompt !== void 0) agent.prompt = patch.prompt;
						if (patch.mode !== void 0) agent.mode = patch.mode;
						if (patch.spaceEnabled !== void 0) agent.spaceEnabled = patch.spaceEnabled;
					},
					setAgentsBarOpen: (d, open) => {
						d.agentsBarOpen = open;
					},
					loadGraph: (d, nodes, edges) => {
						d.nodes = nodes;
						d.edges = edges;
						d.nodeSeq = maxSeq(nodes, "n");
						d.edgeSeq = maxSeq(edges, "e");
						d.selectedNodeId = null;
						d.selectedEdgeId = null;
						d.connectMode = false;
						d.connectSourceId = null;
						d.menuNodeId = null;
						d.enterMode = false;
						d.expandMode = false;
						d.expandTargetId = null;
						d.registerMode = false;
						d.registerTargetId = null;
						d.renameMode = false;
						d.renameTargetId = null;
					},
					loadAgents: (d, agents) => {
						d.agents = agents;
					}
				}
			});
		}
		//#endregion
		//#region src/client/locales.ts
		/** `cluster` namespace dictionaries: sidebar action, canvas chrome, and graph editor copy. */
		/** Simplified Chinese dictionary (the key-set source of truth). */
		const zh = {
			"action.label": "集群模式",
			"canvas.title": "集群模式",
			"canvas.close": "关闭",
			"toolbar.add": "添加节点",
			"toolbar.delete": "删除",
			"toolbar.connect": "连线",
			"toolbar.direction": "方向",
			"toolbar.export": "导出",
			"toolbar.load": "加载",
			"toolbar.enter": "进入节点",
			"toolbar.expand": "展开实例",
			"toolbar.register": "注册 Agent",
			"toolbar.rename": "重命名",
			"rename.placeholder": "节点名称",
			"menu.connect": "连线",
			"menu.delete": "删除",
			"instance.empty": "无实例",
			"instance.session": "会话",
			"instance.close": "关闭",
			"register.empty": "暂无 Agent，请先在左侧添加",
			"register.unbind": "解绑",
			"agents.title": "Agent 区域",
			"agents.add": "添加 Agent",
			"agents.empty": "暂无 Agent",
			"agents.name": "名字",
			"agents.prompt": "提示词",
			"agents.save": "保存到磁盘",
			"agents.idPlaceholder": "Agent ID（字母/数字/下划线）",
			"agents.confirm": "确定",
			"agents.saved": "已保存",
			"agents.idLabel": "Agent ID",
			"agents.space": "Agent 空间",
			"agents.spaceEnabled": "已启用",
			"agents.spaceDisabled": "已禁用",
			"grid.toggle": "网格",
			"grid.on": "开",
			"grid.off": "关",
			"grid.size": "网格大小",
			"grid.small": "小",
			"grid.medium": "中",
			"grid.large": "大",
			"dir.none": "无箭头",
			"dir.single": "单向",
			"dir.double": "双向",
			"hint.connect": "连接模式：点击目标节点完成连线，再次点击源节点取消",
			"hint.edge": "连线已选中：点「方向」或再次点击该连线切换箭头",
			"hint.enter": "进入模式：点击节点进入新对话",
			"hint.expand": "展开模式：点击节点查看会话实例",
			"hint.register": "注册模式：点击节点选择要绑定的 Agent",
			"hint.rename": "重命名模式：点击节点输入新名称",
			"mode.single": "单例",
			"mode.multi": "多例",
			"mode.any": "随意"
		};
		/** English dictionary, checked complete against the zh key set. */
		const en = {
			"action.label": "Cluster Mode",
			"canvas.title": "Cluster Mode",
			"canvas.close": "Close",
			"toolbar.add": "Add node",
			"toolbar.delete": "Delete",
			"toolbar.connect": "Connect",
			"toolbar.direction": "Direction",
			"toolbar.export": "Export",
			"toolbar.load": "Load",
			"toolbar.enter": "Enter node",
			"toolbar.expand": "Instances",
			"toolbar.register": "Register Agent",
			"toolbar.rename": "Rename",
			"rename.placeholder": "Node label",
			"menu.connect": "Connect",
			"menu.delete": "Delete",
			"instance.empty": "No instances",
			"instance.session": "Session",
			"instance.close": "Close",
			"register.empty": "No agents; add one on the left first",
			"register.unbind": "Unbind",
			"agents.title": "Agents",
			"agents.add": "Add Agent",
			"agents.empty": "No agents",
			"agents.name": "Name",
			"agents.prompt": "Prompt",
			"agents.save": "Save to disk",
			"agents.idPlaceholder": "Agent ID (letters/digits/underscore)",
			"agents.confirm": "Confirm",
			"agents.saved": "Saved",
			"agents.idLabel": "Agent ID",
			"agents.space": "Agent Space",
			"agents.spaceEnabled": "Enabled",
			"agents.spaceDisabled": "Disabled",
			"grid.toggle": "Grid",
			"grid.on": "On",
			"grid.off": "Off",
			"grid.size": "Grid size",
			"grid.small": "Small",
			"grid.medium": "Medium",
			"grid.large": "Large",
			"dir.none": "No arrow",
			"dir.single": "Single",
			"dir.double": "Double",
			"hint.connect": "Connect mode: click a target node to link it, click the source again to cancel",
			"hint.edge": "Edge selected: use \"Direction\" or click the edge again to cycle the arrow",
			"hint.enter": "Enter mode: click a node to open a new conversation",
			"hint.expand": "Expand mode: click a node to list its sessions",
			"hint.register": "Register mode: click a node to pick an Agent",
			"hint.rename": "Rename mode: click a node to rename it",
			"mode.single": "Single",
			"mode.multi": "Multi",
			"mode.any": "Any"
		};
		/** Dictionary namespace owned by this plugin. */
		const NS = "cluster";
		//#endregion
		//#region src/client/index.ts
		/** Services required by the cluster-mode surface. */
		const inject = [
			"slots",
			"locale",
			"sessions",
			"workspaces",
			"remote"
		];
		/**
		* Register the sidebar foot action and the frame-wide canvas overlay. Both
		* entries share one store handle so the button and the canvas agree on the
		* open/closed state; the canvas also receives a session-navigation port that
		* turns nodes into agents the user can enter as native conversations.
		* @param ctx - Client root context.
		*/
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "ui-cluster: dictionaries");
			const store = createClusterStore();
			let clusterFs;
			let lastGraph;
			const flushGraph = () => {
				if (clusterFs === void 0 || lastGraph === void 0) return;
				clusterFs.syncGraph(lastGraph.nodes, lastGraph.edges).catch((error) => {
					console.error("[ui-cluster] syncGraph failed:", error);
				});
			};
			ctx.effect(async () => {
				const dispose = await ctx.remote.$mount(TYPERT_REMOTE);
				clusterFs = ctx.get("remote.clusterAgentFs");
				if (clusterFs === void 0) throw new Error("[ui-cluster] the clusterAgentFs Remote namespace did not mount");
				flushGraph();
				return () => {
					clusterFs = void 0;
					dispose();
				};
			}, "ui-cluster: clusterAgentFs remote");
			ctx.effect(() => ctx.on("connection/reset", flushGraph), "ui-cluster: graph sync on connection");
			const graphPort = () => ({
				enterNode: async (workspaceId) => {
					if (workspaceId === void 0) {
						ctx.workspaces.startSession();
						return null;
					}
					try {
						const sessionId = await ctx.workspaces.connectWorkspace(workspaceId);
						ctx.sessions.open(sessionId);
						return String(sessionId);
					} catch (error) {
						console.error("[ui-cluster] enter node failed:", error);
						return null;
					}
				},
				openSession: (sessionId) => {
					ctx.sessions.open(sessionId);
				},
				createAgentDir: async (id, name) => {
					if (clusterFs !== void 0) await clusterFs.create(id, name);
				},
				saveAgentFile: async (id, props) => {
					if (clusterFs !== void 0) await clusterFs.save(id, props);
				},
				deleteAgentDir: async (id) => {
					if (clusterFs !== void 0) await clusterFs.delete(id);
				},
				openAgentSpace: async (id) => {
					if (clusterFs !== void 0) return await clusterFs.openAgentSpace(id);
					return "";
				},
				reportBinding: async (sessionId, agentId) => {
					if (clusterFs !== void 0) await clusterFs.reportBinding(sessionId, agentId);
				},
				syncGraph: async (nodes, edges) => {
					const normalized = nodes.map((node) => ({
						id: node.id,
						agentId: node.agentId ?? null
					}));
					lastGraph = {
						nodes: normalized,
						edges
					};
					if (clusterFs !== void 0) try {
						await clusterFs.syncGraph(normalized, edges);
					} catch (error) {
						console.error("[ui-cluster] syncGraph failed:", error);
					}
				}
			});
			ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({
				name: "sidebar.footer.action",
				id: "cluster-mode",
				order: 10,
				locale: NS,
				store,
				inject: graphPort
			}, ClusterAction));
			ctx.slots.inject("shell.overlay", () => ctx.slots.register({
				name: "shell.overlay",
				id: "cluster-canvas",
				order: 0,
				locale: NS,
				store,
				inject: graphPort
			}, ClusterCanvas));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map