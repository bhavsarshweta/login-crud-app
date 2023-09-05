<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha384-... " crossorigin="anonymous">
    <div>

        <!-- <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="flex flex-col drawer-content"> -->
        <!-- Navbar -->
        <div class="w-full navbar bg-gray-300">
            <!-- <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div> -->
            <div class="flex-1 px-2 mx-2  lg:block">
                <NuxtLink to="/userData"> <button :title="data.Home"
                        class=" px-2 py-1 rounded-md hover:bg-blue-600 bg-blue-500 ml-4 text-white login-button"><i
                            class="fa fa-home" aria-hidden="true"></i></button></NuxtLink>
            </div>

            <div class="flex-none lg:block">
                <ul class="menu menu-horizontal items-center">
                    <!-- Navbar menu content here -->
                    <!-- <a class="btn btn-primary" v-if="data == null" @click="signIn()"> Login </a>
                            <a class="btn " v-if="data != null" @click="signOut()">Logout</a> -->
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="m-1 text-black"><span class="mr-2 font-semibold">Language</span><i
                                class="fa fa-angle-down mr-4"></i></label>
                        <div tabindex="0"
                            class="dropdown-content menu bg-white text-black rounded-md py-2 w-32 shadow-md shadow-gray-900">
                            <langChange />
                        </div>
                    </div>

                    <button :title="data.Logout" class="rounded-md bg-blue-500 hover:bg-blue-600 login-button p-1"
                        @click="signoutmethod"><img src="../assets/icons8-logout-48.png" alt="" class="h-6 w-6"></button>

                </ul>
            </div>
        </div>
        <!-- Page content here -->
        <slot></slot>
        <!-- </div>
            
        </div> -->
        <!-- <LeftMenu></LeftMenu> -->
        <!-- <div v-if="localUser == null">

            <AppHeaderOpen></AppHeaderOpen>

        </div>

        <div v-if="localUser != null">
            <AppHeader />
        </div> -->




        <!-- <AppFooter /> -->
    </div>
</template>
<script >
import Cookie from 'js-cookie'
import { json } from 'body-parser';

export default {
    data() {
        return {
            json: {},
            data: {},
            lang: 'en',
        }
    },
    mounted() {
        this.json = JSON.parse(localStorage.getItem("data"));
        this.lang = localStorage.getItem("lang");
        this.data = this.json[this.lang]
    },
    methods: {
        async signoutmethod() {

            const response = await $fetch('api/signoutapi/signout', {
                method: 'POST',

            }).then((res) => {
                window.location.href = '/'
                alert(this.data.alert12)
            }).catch((err) => {
                console.log(err)
            })
        }
    },


}


</script>
<style scoped>
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

.login-button:active {

    transform: translateY(5px);
}
</style>