<template lang="pug">
div(class="flex flex-col w-full md:w-5/6 px-10 md:px-16 items-center justify-center h-auto mt-8")
    div(class="flex w-full h-6 items-center justify-start space-x-3")
        p(class="text-3xl font-semibold") {{props.reviews.length}} reviews
        Rating(class="w-[9rem] h-6" width="small" :rated="4.5" :editable="false")
    div(class="flex w-full  h-4 items-center justify-start mt-12 space-x-2")
        div(:class="opinionType ==='item'? 'bg-gray-100 ': 'bg-white hover:bg-gray-50 hover:cursor-pointer'" class="flex w-auto space-x-3 items-center justify-start  rounded-full py-1 md:py-2 px-4 md:px-2")
            p(class="text-base md:text-lg text-gray-900") Reviews for this item
            div(class="flex   rounded-full bg-green-400 text-white h-6 w-9 items-center justify-center") {{props.reviews.length}}
        div(:class="opinionType ==='shop'? 'bg-gray-100': 'bg-white hover:bg-gray-50 hover:cursor-pointer'" class="flex w-auto space-x-3 items-center justify-start  rounded-full py-2 px-4 md:px-2")
            p(class="text-base md:text-lg text-gray-900") Reviews for this Artist
            div(class="flex rounded-full bg-green-400 h-6 text-white  w-9 items-center justify-center") 0
    hr(class="w-full h-[2px] bg-gray-300 mt-6 md:mt-5")
    OpinionsItem(class="w-full flex flex-col mt-8" v-for="review in props.reviews" :key="review" :review="review")

    div.opinions-navigation(class="flex w-full h-8 items-center justify-start space-x-3 mt-8")
        nuxt-link(class="flex w-8 h-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-50 hover:cursor-pointer")
            nuxt-img(class="w-4 h-4" src="/images/arrowLeft.svg")
        nuxt-link(class="flex w-8 h-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-50 hover:cursor-pointer")
            nuxt-img(class="w-4 h-4" src="/images/arrowRight.svg")
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { Rating } from "@/types/Product";
const opinionType = ref("item"); //shop
const props = defineProps<{
  reviews: PropType<Rating[]>;
}>();

console.log(props.reviews);
</script>

<style lang="sass"></style>
