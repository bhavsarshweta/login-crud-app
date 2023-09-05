<template>
    <div class="mt-10 flex justify-center login-page1 mb-5 text-black">
        <div class="w-full sm:w-1/3 shadow-md px-10 rounded-lg bg-gray-100 ">


            <h1 class="font-bold text-xl  mt-5">{{ data.createuser }}</h1>
            <h1 class="font-bold text-sm my-2">{{ data.Role }}</h1>
            <div class="flex space-x-4 mb-4">
                <div class="flex space-x-2" @click="Userdata.Role = 'Admin'">
                    <input name="role" type="radio" id="admin">
                    <span>{{ data.admin }}</span>
                </div>
                <div class="flex space-x-2" @click="Userdata.Role = 'User'">
                    <input name="role" type="radio" id="user">
                    <span>{{ data.user }}</span>
                </div>
            </div>
            <FormKit type="text" validation="required|length:5,10"
                :validation-messages="{ required: data.enterusername, length: data.umessage }" name="name" id="name"
                :label="data.enterusername" v-model="Userdata.Username" />
            <FormKit type="password" validation="required|length:5,10"
                :validation-messages="{ required: data.enterpassword, length: data.pmessage }" name="password" id="password"
                :label="data.enterpassword" v-model="Userdata.Password" />
            <div class="mt-5 flex justify-start login-button">
                <FormKit type="submit" :label="data.submit" @click="CreateUser" />
            </div>
        </div>
    </div>
</template>

<script>
definePageMeta({
    layout: "custom"
})
export default {
    data() {
        return {
            lang: "",
            json: {},
            data: {},
            Userdata: {
                Username: '',
                Role: '',
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
        // mehtod to create vendor 
        CreateUser() {
            
            if (!this.Userdata.Username && !this.Userdata.Password && !this.Userdata.Role) {
                alert(this.data.alert6);
                return;
            }
            else if (!this.Userdata.Username && !this.Userdata.Password) {
                alert(this.data.alert7);
                return;
            }
            else if (!this.Userdata.Username) {
                alert(this.data.alert8);
                return;
            }
            else if (!this.Userdata.Password) {
                alert(this.data.alert9);
                return;
            }
            else if (!this.Userdata.Role) {
                alert(this.data.alert10);
                return;
            }
            if (this.Userdata.Username.length >= 5 && this.Userdata.Username.length <= 10 &&
                this.Userdata.Password.length >= 5 && this.Userdata.Password.length <= 15) {
                const body = this.Userdata

                const response = $fetch('api/auth/signup', {
                    method: "POST",
                    body: body,
                })
                    .then((res) => {
                        
                        // let message = JSON.stringify(res.message)
                        alert(JSON.stringify(res))
                        window.location.href = "/UserData"

                    }).catch((err) => {
                        alert(err)
                    })
            }
            else {
                alert(this.data.alert10)
            }
        }
    },
};

</script>
<style scoped>
.login-page1 {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
}

@media (max-width: 640px) {
    .login-page1 {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 20vh;
    }

    .login-page1 {
        margin: 30px;
    }
}

.login-button {

    border: none;
    color: white;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
}

/* Add the button click effect */
.login-button:hover {
    background-color: white;
}

.login-button:active {

    transform: translateY(5px);
}
</style>