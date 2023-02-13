<template lang="pug">
div.opinion(class="w-full flex flex-col")
    .opinion-rating 
        Rating(class="w-[7rem]  h-6" width="small" :rated="props.review.rating" :editable="false")
    .opinion-message(class="h-auto w-full  mt-21")
        p(class=" text-black text-xl ")  {{props.review.review}}
    .opinion-purchased-item(class="text-sm flex space-x-2 mt-1")
        p(class="font-semibold  text-gray-800") Purchased Item:
        p(@click=" router.push({path: `/product/${props.review.product_slug}`})" class="font-semibold underline text-gray-400 hover:cursor-pointer") {{props.review.product}}
    .opinion-user-info(class="flex h-auto text-sm w-full items-center justfy-start space-x-2")
        nuxt-img(class="w-8 h-8 " src="/images/pinkiwoowLogo.webp")
        p(class="underline text-gray-500 font-semibold ") {{props.review.user}}
        p(class="text-gray-500") {{created_at}}
    
</template>

<script setup lang="ts">
import type { Rating } from "@/types/Product";
import type { PropType } from "vue";
import { ref } from "vue";
const props = defineProps<{
  review: PropType<Rating>;
}>();

const router = useRouter();
const date = new Date(props.review.created_at);
const month = date.toLocaleString("default", { month: "long" });
const created_at = ref(`${month} ${date.getDay()}, ${date.getFullYear()}`);
// format
</script>

<style lang="sass"></style>
