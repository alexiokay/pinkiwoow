<template lang="pug">
div(class="flex flex-col w-2/4 h-auto items-center justify-center mt-3 ")
    nuxt-img(src="https://picsum.photos/400/400" format="webp"  class="w-full ")
    h3(class="text-[#000000] font-itim text-[1.5rem] mt-4")  Kubek
    div(class="w-full justify-between flex")
        button(class="w-2/5 h-[3rem] bg-[#3c9b3a] text-[#ffffff] rounded-xl mt-4")  Learn more
        button(class="w-2/5 h-[3rem] bg-[#3c9b3a] text-[#ffffff] rounded-xl mt-4")  Learn more
    Rating(class="mt-4")
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style lang="sass"></style>
