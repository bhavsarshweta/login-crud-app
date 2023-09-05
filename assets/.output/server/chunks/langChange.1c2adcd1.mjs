import axios from 'axios';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {
  data() {
    return {};
  },
  async mounted() {
    await axios.get("/api/data/data").then((res) => {
      let data = JSON.stringify(res.data);
      localStorage.setItem("data", data);
      if (!localStorage.getItem("lang")) {
        localStorage.setItem("lang", "en");
      }
    }).catch((err) => console.log(err));
  },
  methods: {
    changeLanguage(locale) {
      localStorage.setItem("lang", locale);
      location.reload();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col bg-white" }, _attrs))}><button class="hover:bg-blue-500 hover:text-white">English</button><button class="hover:bg-blue-500 hover:text-white">\u0939\u093F\u0902\u0926\u0940</button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/langChange.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=langChange.1c2adcd1.mjs.map
