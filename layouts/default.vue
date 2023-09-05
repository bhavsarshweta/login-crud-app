<template>
    <div>

        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="flex flex-col drawer-content">
                <!-- Navbar -->
                <div class="w-full navbar bg-base-300">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div class="flex-1 px-2 mx-2">Saapttrini</div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            <!-- Navbar menu content here -->
                            <!-- <a class="btn btn-primary" v-if="data == null" @click="signIn()"> Login </a>
                            <a class="btn " v-if="data != null" @click="signOut()">Logout</a> -->
                         
                            <button class="btn" @click="signoutmethod">Logout</button>
                        
                        
                        </ul>
                    </div>
                </div>
                <!-- Page content here -->
                <slot></slot>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="p-4 menu w-80 bg-base-100">
                    <!-- Sidebar content here -->
                    <li>
                        <!-- <a v-if="localUser == null" @click="signIn()">Login</a> -->
                        <!-- <a v-if="localUser != null" @click="signOut()">Logout</a> -->
                 
                        <a @click="signoutmethod">Logout</a>

                    </li>
                    <li><a>Some Menu</a></li>

                </ul>

            </div>
        </div>
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
    data(){
        return{
          data: {}
        }
    },
    methods: {
        async signoutmethod (){
          
            const response = await $fetch('api/signoutapi/signout', {
            method: 'POST',

        }).then((res) => {
          
            window.location.href = '/'
        }).catch((err) => {
            console.log(err)
        })
        }
    },
    // mounted (){
    //     let data1 = Cookie.get('user')
    //     this.data = JSON.stringify(data1)
    //     console.log(data);
    // }
  
 }


</script>