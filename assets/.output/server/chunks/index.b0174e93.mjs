import { _ as __nuxt_component_0 } from './langChange.1c2adcd1.mjs';
import { u as useRouter } from './server.mjs';
import { useSSRContext, resolveComponent } from 'vue';
import axios from 'axios';
import { ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
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
      lang: "",
      json: {},
      data: {},
      focused: false,
      userData: {
        action: "signin",
        Username: "",
        Password: ""
      }
    };
  },
  mounted() {
    this.json = JSON.parse(localStorage.getItem("data"));
    this.lang = localStorage.getItem("lang");
    this.data = this.json[this.lang];
  },
  methods: {
    checkForm() {
      if (!this.userData.Username && !this.userData.Password) {
        alert(this.data.alert1);
        return;
      } else if (!this.userData.Username) {
        alert(this.data.alert2);
        return;
      } else if (!this.userData.Password) {
        alert(this.data.alert3);
        return;
      }
      $fetch("api/auth/signin", {
        method: "POST",
        body: this.userData
      }).then(async (res) => {
        await axios.post("api/auth/testToken").then((res1) => {
          const data = res;
          if (data.users) {
            const role = data.users;
            if (role === "https://www.google.com") {
              window.location.href = role;
            } else if (role === "/UserData") {
              useRouter().push(role);
            }
          } else {
            alert(this.data.alert4);
          }
          return true;
        });
      }).catch((err) => {
        console.log(err);
        alert(this.data.alert4);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_langChange = __nuxt_component_0;
  const _component_FormKit = resolveComponent("FormKit");
  _push(`<!--[--><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-... " crossorigin="anonymous" data-v-67225510><div class="login-page text-black" data-v-67225510><div class="w-full sm:w-1/3 shadow-xl px-10 rounded-lg bg-gray-100" data-v-67225510><div class="flex items-center justify-between" data-v-67225510><h1 class="font-bold text-xl mb-5 mt-5" data-v-67225510>${ssrInterpolate($data.data.login)}</h1><div class="dropdown dropdown-end items-center" data-v-67225510><label tabindex="0" class="m-1 space-x-2" data-v-67225510><span data-v-67225510>${ssrInterpolate($data.data.lang)}:</span><i class="fa fa-angle-down" data-v-67225510></i></label><div tabindex="0" class="dropdown-content menu bg-white text-black rounded-md py-2 w-32 shadow-md shadow-gray-900" data-v-67225510>`);
  _push(ssrRenderComponent(_component_langChange, null, null, _parent));
  _push(`</div></div></div>`);
  _push(ssrRenderComponent(_component_FormKit, {
    type: "text",
    validation: "required",
    name: "name",
    id: "name",
    label: $data.data.enterusername,
    modelValue: $data.userData.Username,
    "onUpdate:modelValue": ($event) => $data.userData.Username = $event,
    "validation-label": "Username",
    "validation-messages": { required: $data.data.enterusername }
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormKit, {
    type: "password",
    validation: "required",
    name: "password",
    id: "password",
    label: $data.data.enterpassword,
    modelValue: $data.userData.Password,
    "onUpdate:modelValue": ($event) => $data.userData.Password = $event,
    "validation-label": "Password",
    "validation-messages": { required: $data.data.enterpassword }
  }, null, _parent));
  _push(`<div class="${ssrRenderClass([{ "focused": $data.focused }, "mt-5 login-button"])}" data-v-67225510>`);
  _push(ssrRenderComponent(_component_FormKit, {
    type: "submit",
    label: $data.data.login,
    onClick: $options.checkForm
  }, null, _parent));
  _push(`</div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-67225510"]]);

export { index as default };
//# sourceMappingURL=index.b0174e93.mjs.map
