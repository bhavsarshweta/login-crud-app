<template>
    <div class="h-full flex flex-col pt-52 sm:pt-24 items-center">
        <div class="space-y-8 py-10">
            <div class="flex justify-center">
                <NuxtLink to="/CreateUser">
                    <button class="w-80 sm:w-64 py-2 px-4 text-white rounded-md bg-blue-500 hover:bg-blue-600">
                        {{ data.createuser }}
                    </button>
                </NuxtLink>
            </div>

            <div class="flex justify-center">
                <NuxtLink to="/DisplayUser">
                    <button class="w-80 sm:w-64 text-white py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600">
                        {{ data.displayuser }}
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
  
  
<script>
definePageMeta({
    layout: "custom1"
})
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
}
</script>
<style></style>

  
  