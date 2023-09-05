import { _ as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/inputs';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/themes';
import '@formkit/observer';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  data() {
    return {
      json: {},
      data: {},
      lang: "en"
    };
  },
  mounted() {
    this.json = JSON.parse(localStorage.getItem("data"));
    this.lang = localStorage.getItem("lang");
    this.data = this.json[this.lang];
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col pt-52 sm:pt-24 items-center" }, _attrs))}><div class="space-y-8 py-10"><div class="flex justify-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/CreateUser" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="w-80 sm:w-64 py-2 px-4 text-white rounded-md bg-blue-500 hover:bg-blue-600"${_scopeId}>${ssrInterpolate($data.data.createuser)}</button>`);
      } else {
        return [
          createVNode("button", { class: "w-80 sm:w-64 py-2 px-4 text-white rounded-md bg-blue-500 hover:bg-blue-600" }, toDisplayString($data.data.createuser), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex justify-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/DisplayUser" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="w-80 sm:w-64 text-white py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600"${_scopeId}>${ssrInterpolate($data.data.displayuser)}</button>`);
      } else {
        return [
          createVNode("button", { class: "w-80 sm:w-64 text-white py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600" }, toDisplayString($data.data.displayuser), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/UserData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { UserData as default };
//# sourceMappingURL=UserData.1e246fd0.mjs.map
