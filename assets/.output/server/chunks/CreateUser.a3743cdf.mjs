import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {
  data() {
    return {
      lang: "",
      json: {},
      data: {},
      Userdata: {
        Username: "",
        Role: "",
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
    CreateUser() {
      if (!this.Userdata.Username && !this.Userdata.Password && !this.Userdata.Role) {
        alert(this.data.alert6);
        return;
      } else if (!this.Userdata.Username && !this.Userdata.Password) {
        alert(this.data.alert7);
        return;
      } else if (!this.Userdata.Username) {
        alert(this.data.alert8);
        return;
      } else if (!this.Userdata.Password) {
        alert(this.data.alert9);
        return;
      } else if (!this.Userdata.Role) {
        alert(this.data.alert10);
        return;
      }
      if (this.Userdata.Username.length >= 5 && this.Userdata.Username.length <= 10 && this.Userdata.Password.length >= 5 && this.Userdata.Password.length <= 15) {
        const body = this.Userdata;
        $fetch("api/auth/signup", {
          method: "POST",
          body
        }).then((res) => {
          alert(JSON.stringify(res));
          window.location.href = "/UserData";
        }).catch((err) => {
          alert(err);
        });
      } else {
        alert(this.data.alert10);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormKit = resolveComponent("FormKit");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10 flex justify-center login-page1 mb-5 text-black" }, _attrs))} data-v-8818843d><div class="w-full sm:w-1/3 shadow-md px-10 rounded-lg bg-gray-100" data-v-8818843d><h1 class="font-bold text-xl mt-5" data-v-8818843d>${ssrInterpolate($data.data.createuser)}</h1><h1 class="font-bold text-sm my-2" data-v-8818843d>${ssrInterpolate($data.data.Role)}</h1><div class="flex space-x-4 mb-4" data-v-8818843d><div class="flex space-x-2" data-v-8818843d><input name="role" type="radio" id="admin" data-v-8818843d><span data-v-8818843d>${ssrInterpolate($data.data.admin)}</span></div><div class="flex space-x-2" data-v-8818843d><input name="role" type="radio" id="user" data-v-8818843d><span data-v-8818843d>${ssrInterpolate($data.data.user)}</span></div></div>`);
  _push(ssrRenderComponent(_component_FormKit, {
    type: "text",
    validation: "required|length:5,10",
    "validation-messages": { required: $data.data.enterusername, length: $data.data.umessage },
    name: "name",
    id: "name",
    label: $data.data.enterusername,
    modelValue: $data.Userdata.Username,
    "onUpdate:modelValue": ($event) => $data.Userdata.Username = $event
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormKit, {
    type: "password",
    validation: "required|length:5,10",
    "validation-messages": { required: $data.data.enterpassword, length: $data.data.pmessage },
    name: "password",
    id: "password",
    label: $data.data.enterpassword,
    modelValue: $data.Userdata.Password,
    "onUpdate:modelValue": ($event) => $data.Userdata.Password = $event
  }, null, _parent));
  _push(`<div class="mt-5 flex justify-start login-button" data-v-8818843d>`);
  _push(ssrRenderComponent(_component_FormKit, {
    type: "submit",
    label: $data.data.submit,
    onClick: $options.CreateUser
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/CreateUser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CreateUser = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8818843d"]]);

export { CreateUser as default };
//# sourceMappingURL=CreateUser.a3743cdf.mjs.map
