import { _ as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './langChange.1c2adcd1.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './icons8-logout-48.d5ef6e26.mjs';
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
import 'axios';

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
  },
  methods: {
    async signoutmethod() {
      await $fetch("api/signoutapi/signout", {
        method: "POST"
      }).then((res) => {
        window.location.href = "/";
        alert(this.data.alert12);
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_langChange = __nuxt_component_0;
  _push(`<!--[--><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-... " crossorigin="anonymous" data-v-becf61cb><div data-v-becf61cb><div class="w-full navbar bg-gray-300" data-v-becf61cb><div class="flex-1 px-2 mx-2 lg:block" data-v-becf61cb>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/userData" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button${ssrRenderAttr("title", $data.data.Home)} class="px-2 py-1 rounded-md hover:bg-blue-600 bg-blue-500 ml-4 text-white login-button" data-v-becf61cb${_scopeId}><i class="fa fa-home" aria-hidden="true" data-v-becf61cb${_scopeId}></i></button>`);
      } else {
        return [
          createVNode("button", {
            title: $data.data.Home,
            class: "px-2 py-1 rounded-md hover:bg-blue-600 bg-blue-500 ml-4 text-white login-button"
          }, [
            createVNode("i", {
              class: "fa fa-home",
              "aria-hidden": "true"
            })
          ], 8, ["title"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex-none lg:block" data-v-becf61cb><ul class="menu menu-horizontal items-center" data-v-becf61cb><div class="dropdown dropdown-end" data-v-becf61cb><label tabindex="0" class="m-1 text-black" data-v-becf61cb><span class="mr-2 font-semibold" data-v-becf61cb>Language</span><i class="fa fa-angle-down mr-4" data-v-becf61cb></i></label><div tabindex="0" class="dropdown-content menu bg-white text-black rounded-md py-2 w-32 shadow-md shadow-gray-900" data-v-becf61cb>`);
  _push(ssrRenderComponent(_component_langChange, null, null, _parent));
  _push(`</div></div><button${ssrRenderAttr("title", $data.data.Logout)} class="rounded-md bg-blue-500 hover:bg-blue-600 login-button p-1" data-v-becf61cb><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-6 w-6" data-v-becf61cb></button></ul></div></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/custom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-becf61cb"]]);

export { custom as default };
//# sourceMappingURL=custom.69c430cc.mjs.map
