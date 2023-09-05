import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    async signoutmethod() {
      await $fetch("api/signoutapi/signout", {
        method: "POST"
      }).then((res) => {
        window.location.href = "/";
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="drawer"><input id="my-drawer-3" type="checkbox" class="drawer-toggle"><div class="flex flex-col drawer-content"><div class="w-full navbar bg-base-300"><div class="flex-none lg:hidden"><label for="my-drawer-3" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></div><div class="flex-1 px-2 mx-2">Saapttrini</div><div class="flex-none hidden lg:block"><ul class="menu menu-horizontal"><button class="btn">Logout</button></ul></div></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="drawer-side"><label for="my-drawer-3" class="drawer-overlay"></label><ul class="p-4 menu w-80 bg-base-100"><li><a>Logout</a></li><li><a>Some Menu</a></li></ul></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.88e4fef2.mjs.map
