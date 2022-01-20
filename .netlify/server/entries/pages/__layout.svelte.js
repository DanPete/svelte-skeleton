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
  default: () => _layout
});
var import_index_756e41cf = __toModule(require("../../chunks/index-756e41cf.js"));
var app = "";
const Header = (0, import_index_756e41cf.c)(($$result, $$props, $$bindings, slots) => {
  return `<header class="${"p-4 bg-gradient-to-r from-cyan-300 to-blue-300 shadow-lg"}"><h1 class="${"text-indigo-600 container mx-auto text-center text-3xl font-bold mb-4"}">Welcome</h1>
  <nav class="${"w-full flex justify-center"}"><ul class="${"flex gap-6"}"><a href="${"/"}" class="${"font-semibold"}">Home</a>
      <a href="${"/about"}" class="${"font-semibold"}">About</a>
      <a href="${"/posts"}" class="${"font-semibold"}">Posts</a></ul></nav></header>

`;
});
const _layout = (0, import_index_756e41cf.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_756e41cf.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"bg-blue-100 container mx-auto p-4"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"bottom-0 sticky top-full text-center font-medium p-2 bg-gray-200"}">Copywrite 2021</footer>`;
});
