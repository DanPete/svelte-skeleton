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
  default: () => _layout,
  load: () => load
});
var import_bye_20937311 = __toModule(require("../../../chunks/bye-20937311.js"));
var import_hello_3a287199 = __toModule(require("../../../chunks/hello-3a287199.js"));
var import_index_756e41cf = __toModule(require("../../../chunks/index-756e41cf.js"));
async function load() {
  const posts = { "../../posts/bye.md": import_bye_20937311._, "../../posts/hello.md": import_hello_3a287199._ };
  const postsList = Object.values(posts);
  const postsMeta = postsList.map((post) => post.metadata);
  return { props: { posts: postsMeta } };
}
const _layout = (0, import_index_756e41cf.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<div class="${"flex gap-6"}"><aside><h5>Archive</h5>
    <ul>${(0, import_index_756e41cf.a)(posts, (post) => {
    return `<li><a sveltekit:prefetch href="${"/posts/" + (0, import_index_756e41cf.e)(post.slug)}">${(0, import_index_756e41cf.e)(post.title)}</a></li>`;
  })}</ul></aside>
  <div>${slots.default ? slots.default({}) : ``}</div></div>`;
});
