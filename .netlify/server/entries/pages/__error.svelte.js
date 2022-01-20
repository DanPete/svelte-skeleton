var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _error,
  load: () => load
});
var import_index_756e41cf = __toModule(require("../../chunks/index-756e41cf.js"));
async function load({ error, status }) {
  return { props: { status, error } };
}
const _error = (0, import_index_756e41cf.c)(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error } = $$props;
  console.log(error);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `<h1 class="${"text-3xl font-black"}">Something Happened</h1>

<h3 class="${"text-xl mt-8"}">${(0, import_index_756e41cf.e)(status)} - ${(0, import_index_756e41cf.e)(error.name)}: ${(0, import_index_756e41cf.e)(error.message)}</h3>`;
});
