import { _ as __nuxt_component_0 } from './langChange.1c2adcd1.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './icons8-logout-48.d5ef6e26.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';
import 'axios';

const _sfc_main = {
  data() {
    return {
      data: {},
      json: {},
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
  const _component_langChange = __nuxt_component_0;
  _push(`<!--[--><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-... " crossorigin="anonymous" data-v-b41d634e><div data-v-b41d634e><div class="w-full flex navbar justify-end bg-gray-300" data-v-b41d634e><div class="flex" data-v-b41d634e><ul class="menu menu-horizontal items-center" data-v-b41d634e><div class="dropdown dropdown-end" data-v-b41d634e><label tabindex="0" class="m-1" data-v-b41d634e><span class="mr-2 font-semibold" data-v-b41d634e>Language</span><i class="fa fa-angle-down" data-v-b41d634e></i></label><div tabindex="0" class="dropdown-content menu bg-white text-black rounded-md py-2 w-32 shadow-md shadow-gray-900" data-v-b41d634e>`);
  _push(ssrRenderComponent(_component_langChange, null, null, _parent));
  _push(`</div></div><button title="Logout" class="rounded-md mr-2 bg-blue-500 hover:bg-blue-600 login-button p-1" data-v-b41d634e><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-6 w-6" data-v-b41d634e></button></ul></div></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/custom1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custom1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b41d634e"]]);

export { custom1 as default };
//# sourceMappingURL=custom1.ab407871.mjs.map
