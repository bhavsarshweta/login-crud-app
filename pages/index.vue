<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha384-... " crossorigin="anonymous">
  <div class="login-page text-black">
    <div class="w-full sm:w-1/3 shadow-xl px-10 rounded-lg bg-gray-100">
      <div class="flex items-center justify-between">
        <h1 class="font-bold text-xl mb-5 mt-5">{{ data.login }}</h1>
        <div class="dropdown dropdown-end items-center">
          <label tabindex="0" class=" m-1 space-x-2">
            <span>{{ data.lang }}:</span>
            <i class="fa fa-angle-down"></i>
          </label>
          <div tabindex="0"
            class="dropdown-content menu bg-white text-black rounded-md py-2 w-32 shadow-md shadow-gray-900">
            <langChange />

          </div>
        </div>
      </div>
      <FormKit type="text" validation="required" name="name" id="name" :label="data.enterusername"
        v-model="userData.Username" validation-label="Username" :validation-messages="{required:data.enterusername}"/>
      <FormKit type="password" validation="required" name="password" id="password" :label="data.enterpassword"
        v-model="userData.Password" validation-label="Password" :validation-messages="{required:data.enterpassword}" />
      <div class="mt-5 login-button" :class="{ 'focused': focused }">
        <FormKit type="submit" :label="data.login" @click="checkForm" />
      </div>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: false
})


import axios from 'axios';

export default {
  data() {
    return {
      lang: "",
      json: {},
      data: {},
      focused: false,
      userData: {
        action: "signin",
        Username: '',
        Password: ''
      }
    }
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
      }
      else if (!this.userData.Username) {
        alert(this.data.alert2);
        return;
      }
      else if (!this.userData.Password) {
        alert(this.data.alert3);
        return;
      }

      const response = $fetch('api/auth/signin', {
        method: 'POST',
        body: this.userData

      }).then(async (res) => {

        const user = await axios.post('api/auth/testToken').then((res1) => {

          const data = res;
          if (data.users) {
            const role = data.users;
            if (role === 'https://www.google.com') {
              window.location.href = role;
            } else if (role === '/UserData') {
              useRouter().push(role); // Redirect to '/UserData' page
            }

          }
          else {
            alert(this.data.alert4); // Display alert for incorrect username or password
          }
          return true;

          // let role = res.users
          // useRouter().push(role)
        })

      }).catch((err) => {

        console.log(err);
        alert(this.data.alert4)
      })

    }
  },

}

</script>
<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

@media (max-width: 640px) {

  .login-page {
    margin: 30px;
    min-height: 80vh;
  }
}

/* Define the button styles */
.login-button {
  border: none;
  color: white;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  background: rgb(243 244 246 / var(--tw-bg-opacity));
}

/* Add the button click effect */
.login-button:hover {
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.login-button:active {
  transform: translateY(5px);
}

.login-button:focus {
  transform: translateX(5px);
}
</style>