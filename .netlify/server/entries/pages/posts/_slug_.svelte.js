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
  default: () => U5Bslugu5D,
  load: () => load
});
var import_index_756e41cf = __toModule(require("../../../chunks/index-756e41cf.js"));
function __variableDynamicImportRuntime0__(path) {
  switch (path) {
    case "../../posts/bye.md":
      return Promise.resolve().then(() => __toModule(require("../../../chunks/bye-20937311.js"))).then(function(n) {
        return n._;
      });
    case "../../posts/hello.md":
      return Promise.resolve().then(() => __toModule(require("../../../chunks/hello-3a287199.js"))).then(function(n) {
        return n._;
      });
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
      });
  }
}
async function load({ params }) {
  const { slug } = params;
  try {
    const Post = await __variableDynamicImportRuntime0__(`../../posts/${slug}.md`);
    return { props: { Post: Post.default } };
  } catch (error) {
    console.log(error);
    return { status: 404, error: "Post not found" };
  }
}
const U5Bslugu5D = (0, import_index_756e41cf.c)(($$result, $$props, $$bindings, slots) => {
  let { Post } = $$props;
  if ($$props.Post === void 0 && $$bindings.Post && Post !== void 0)
    $$bindings.Post(Post);
  return `<div class="${"prose"}"><div class="${"prose-h1:text-orange-600 prose-h1:mb-4"}">${(0, import_index_756e41cf.v)(Post || import_index_756e41cf.m, "svelte:component").$$render($$result, {}, {}, {})}</div></div>`;
});
