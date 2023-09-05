<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha384-... " crossorigin="anonymous">
    <div>
        <div class="w-full flex navbar justify-end bg-gray-300">
            <div class="flex">
                <ul class="menu menu-horizontal items-center">
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class=" m-1"><span class="mr-2 font-semibold">Language</span><i
                                class="fa fa-angle-down"></i></label>
                        <div tabindex="0"
                            class="dropdown-content menu bg-white text-black rounded-md py-2 w-32 shadow-md shadow-gray-900">
                            <langChange />

                        </div>
                    </div>
                    <button title="Logout" class="rounded-md mr-2 bg-blue-500 hover:bg-blue-600 login-button p-1"
                        @click="signoutmethod"><img src="../assets/icons8-logout-48.png" alt="" class="h-6 w-6"></button>

                </ul>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: {},
            json: {},

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