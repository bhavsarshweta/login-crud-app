<template>
    <!-- toggle button -->
    <div class="flex flex-col bg-white">
        <button class="hover:bg-blue-500 hover:text-white" @click="changeLanguage('en')">English</button>
        <button class="hover:bg-blue-500 hover:text-white" @click="changeLanguage('hn')">हिंदी</button>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
        }
    },
    async mounted() {
        let response = await axios.get("/api/data/data")
            .then((res) => {
                let data = JSON.stringify(res.data)
                localStorage.setItem("data", data)
                if (!localStorage.getItem("lang")) {
                localStorage.setItem('lang', "en");
                    
                }
            }).catch((err) => console.log(err))
    },
    methods: {
        changeLanguage(locale) {
            localStorage.setItem('lang', locale);
            location.reload()
        },
    }
}
</script>