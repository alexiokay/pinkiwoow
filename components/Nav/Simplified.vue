<template lang="pug">
<NuxtLayout name="secondary">
    div(class="z-50  h-auto sm:h-[4.5rem]   w-full text-gray-500  bg-white flex flex-col items-center justify-between lg:justify-center mx-0 ") 
        div(class="h-full w-full flex sm:flex-row flex-col items-center justify-center ")
        
            NuxtLink(to="/" class=" flex items-center justify-between w-auto h-full hover:cursor-pointer")
                nuxt-img(class="w-12 h-12 sm:w-full sm:h-full" src="/images/pinkiwoowLogo.webp")
                p(class="text-2xl md:text-3xl text-pink-600 font-itim h-full items-center flex ") PinkiWoow
            CartProcess(v-if="route.path.startsWith('/cart')" class="sm:ml-4 sm:h-8 sm:w-auto" :steps="['Koszyk', 'Dostawa', 'Płatnosc', 'Gotowe']" )
        hr(class="mt-2 sm:mt-0 w-full h-[1px] bg-gray-200")
</NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";

const route = useRoute();
</script>

<style lang="sass"></style>
