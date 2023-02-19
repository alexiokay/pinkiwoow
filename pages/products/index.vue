<template lang="pug">
div(class="flex flex-col font-montserrat w-full px-4 md:px-2  h-full lg:px-16 xl:px-24 items-center md:items-start gap-x-28 justify-center")
            div(class="absolute top-[6rem] md:top-[9.8rem] z-10 w-full lg:-mx-16 xl:-mx-24 h-[6rem] md:h-[8rem] bg-[#47C1BF] flex flex-col ")
            h1(class="text-2xl z-20 w-full md:text-3xl text-white font-itim h-full items-center flex mt-4") Mugs
            NavHeader
            div(class="w-full mt-[9rem] h-auto flex items-center justify-between gap-x-8")
               ExampleImg(class="w-1/4 h-[13rem] object-cover")
               ExampleImg(class="w-1/4 h-[13rem] object-cover")
               ExampleImg(class="w-1/4 h-[13rem] object-cover")
               ExampleImg(class="w-1/4 h-[13rem] object-cover")
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style lang="scss"></style>
