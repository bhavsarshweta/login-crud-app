import axios from 'axios';
import { ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {
  data() {
    return {
      resDataSuccess: [],
      editModalData: null,
      deleteModalData: null,
      show: false,
      json: {},
      data: {},
      lang: "en"
    };
  },
  mounted() {
    this.displayUser();
    this.json = JSON.parse(localStorage.getItem("data"));
    this.lang = localStorage.getItem("lang");
    this.data = this.json[this.lang];
  },
  methods: {
    async displayUser() {
      try {
        const response = await axios.post("/api/CreateUser_Api/GetUser");
        console.log(response);
        this.resDataSuccess = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    openEditModal(data) {
      this.editModalData = {
        id: data.id,
        username: data.Username,
        password: data.newPassword
      };
      this.show = !this.show;
    },
    closeEditModal() {
      this.editModalData = null;
    },
    async updateUser() {
      try {
        const { id, username, password } = this.editModalData;
        const response = await axios.put("/api/CreateUser_Api/Update_User", {
          id,
          Username: username,
          Password: password
        });
        this.closeEditModal();
        this.displayUser();
        setTimeout(() => {
          alert("Data updated successfully");
        }, 100);
      } catch (error) {
        console.log(error);
      }
    },
    openDeleteModal(data) {
      this.deleteModalData = {
        id: data.id
      };
    },
    closeDeleteModal() {
      this.deleteModalData = null;
    },
    async deleteUser() {
      try {
        const { id } = this.deleteModalData;
        const response = await $fetch("/api/CreateUser_Api/Delete_User", {
          method: "DELETE",
          body: { id }
        });
        if (response) {
          const responseData = await response;
          this.closeDeleteModal();
          this.displayUser();
          setTimeout(() => {
            alert("Deleted successfully");
          }, 100);
        } else {
          throw new Error("Failed to delete user");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-... " crossorigin="anonymous" data-v-5e754b5e><div class="table-container bg-white text-black" data-v-5e754b5e><div class="w-full flex flex-col" data-v-5e754b5e><div class="py-6 flex w-full text-center font-semibold text-lg border-b-2" data-v-5e754b5e><div class="w-2/12 md:w-1/12 border-r border-gray-400" data-v-5e754b5e>${ssrInterpolate($data.data.sr)}</div><div class="w-2/12 md:w-1/12 border-r border-gray-400" data-v-5e754b5e>${ssrInterpolate($data.data.role)}</div><div class="w-4/12" data-v-5e754b5e>${ssrInterpolate($data.data.username)}</div><div class="w-4/12 border-l border-gray-400" data-v-5e754b5e>${ssrInterpolate($data.data.password)}</div><div class="w-2/12 border-l border-gray-400 md:block hidden" data-v-5e754b5e>${ssrInterpolate($data.data.actions)}</div></div><!--[-->`);
  ssrRenderList($data.resDataSuccess, (data, index) => {
    _push(`<div class="w-full text-center flex flex-col space-y-8 md:border-b-0 border-b border-gray-400 py-8" data-v-5e754b5e><div class="flex w-full" data-v-5e754b5e><div class="w-2/12 md:w-1/12" data-v-5e754b5e>${ssrInterpolate(index + 1)}</div><div class="w-2/12 md:w-1/12" data-v-5e754b5e>${ssrInterpolate(data.Role)}</div><div class="w-4/12" data-v-5e754b5e>${ssrInterpolate(data.Username)}</div><div class="w-4/12" data-v-5e754b5e>${ssrInterpolate(data.newPassword)}</div><div class="w-2/12 md:flex hidden justify-around" data-v-5e754b5e><div data-v-5e754b5e><button class="bg-blue-500 hover:bg-blue-600 rounded-md btn-sm text-white" title="edit" data-v-5e754b5e><i class="fas fa-edit" data-v-5e754b5e></i></button></div><div data-v-5e754b5e><button class="bg-blue-500 hover:bg-blue-600 btn-sm rounded-md text-white" title="delete" data-v-5e754b5e><i class="fa fa-trash" data-v-5e754b5e></i></button></div></div></div><div class="md:hidden flex w-full" data-v-5e754b5e><div class="w-2/12" data-v-5e754b5e></div><div class="w-2/12" data-v-5e754b5e></div><div class="w-4/12" data-v-5e754b5e><div class="flex justify-between" data-v-5e754b5e><div data-v-5e754b5e></div><div data-v-5e754b5e><button class="bg-blue-500 hover:bg-blue-600 shadow-error rounded-md btn-md text-white"${ssrRenderAttr("title", data.edit)} data-v-5e754b5e><i class="fas fa-edit" data-v-5e754b5e></i></button></div></div></div><div class="w-4/12" data-v-5e754b5e><div class="flex justify-around" data-v-5e754b5e><button class="bg-blue-500 hover:bg-blue-600 btn-md rounded-md text-white"${ssrRenderAttr("title", data.delete)} data-v-5e754b5e><i class="fa fa-trash" data-v-5e754b5e></i></button><div data-v-5e754b5e></div></div></div></div></div>`);
  });
  _push(`<!--]--></div><div style="${ssrRenderStyle($data.show ? null : { display: "none" })}" data-v-5e754b5e>`);
  if ($data.editModalData) {
    _push(`<div class="modal1" data-v-5e754b5e><div class="modal-box" data-v-5e754b5e><h3 class="font-bold text-lg mb-2" data-v-5e754b5e>${ssrInterpolate($data.data.edit)}</h3><div class="sm:col-span-4" data-v-5e754b5e><label for="username" class="block text-left text-sm font-medium leading-6 text-gray-900" data-v-5e754b5e>${ssrInterpolate($data.data.username)}</label><div class="mt-2" data-v-5e754b5e><div class="flex rounded-md shadow-sm ring-1 ring-black focus-within:ring-2 focus-within:ring-black sm:max-w-md" data-v-5e754b5e><input type="text" name="username" id="username" class="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"${ssrRenderAttr("value", $data.editModalData.username)} data-v-5e754b5e></div></div></div><div class="sm:col-span-4" data-v-5e754b5e><label for="password" class="block text-left text-sm font-medium leading-6 text-gray-900 mt-5" data-v-5e754b5e>${ssrInterpolate($data.data.password)}</label><div class="mt-2" data-v-5e754b5e><div class="flex rounded-md shadow-sm ring-1 ring-black focus-within:ring-2 focus-within:ring-black sm:max-w-md" data-v-5e754b5e><input type="text" name="username" id="username" class="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"${ssrRenderAttr("value", $data.editModalData.password)} data-v-5e754b5e></div></div></div><div class="modal-action" data-v-5e754b5e><button class="btn" data-v-5e754b5e>${ssrInterpolate($data.data.update)}</button><button class="btn" data-v-5e754b5e>${ssrInterpolate($data.data.close)}</button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($data.deleteModalData) {
    _push(`<div class="modal1" data-v-5e754b5e><div class="modal-box" data-v-5e754b5e><h3 class="font-bold text-lg mb-2" data-v-5e754b5e>${ssrInterpolate($data.data.deletemsg)}</h3><h1 data-v-5e754b5e>${ssrInterpolate($data.data.alert11)}</h1><div class="modal-action" data-v-5e754b5e><button class="btn" data-v-5e754b5e>${ssrInterpolate($data.data.delete)}</button><button class="btn" data-v-5e754b5e>${ssrInterpolate($data.data.close)}</button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/DisplayUser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DisplayUser = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5e754b5e"]]);

export { DisplayUser as default };
//# sourceMappingURL=DisplayUser.6b8004d8.mjs.map
