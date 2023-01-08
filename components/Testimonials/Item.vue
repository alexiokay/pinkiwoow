<template lang="pug">
div(class="w-full h-[40rem] flex flex-col items-center justify-start py-4 rounded-lg space-y-5 border-[1px] border-black")
    nuxt-img(:src="props.image" format="webp"  class="rounded-full")
    div(class="flex flex-col items-center justify-start w-3/4 h-[8rem] gap-y-2")
        p(class="text-[#000000] font-intern text-4xl mt-4 text-center ")  {{props.title}}
        p(class="text-[#000000] font-intern text-xl  text-center")  {{props.description}}
    div(class="flex flex-row w-auto h-auto")
        StarFullIcon(class="text-yellow-400" v-for="i in Math.floor(props.stars)" :key="i")
       
        StarHalfIcon(v-if="halfstar" class="text-yellow-400")
        StarEmptyIcon(v-if="stars < 5 && !halfstar" class="text-yellow-400" v-for="i in 5 - Math.floor(props.stars)" :key="i")
        StarEmptyIcon(v-if="props.stars < 5 && halfstar" class="text-yellow-400" v-for="i in 5 -Math.floor(props.stars)-1" :key="i")
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { PropType } from "vue";
import StarFullIcon from "~icons/ic/outline-star";
import StarHalfIcon from "~icons/ic/outline-star-half";
import StarEmptyIcon from "~icons/ic/outline-star-border";

type Range = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

const halfstar = ref(false);

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  linkText: {
    type: String,
    required: false,
  },
  stars: {
    type: Number as PropType<Range>,
    required: true,
  },
});

if (props.stars % 1 !== 0) {
  halfstar.value = true;
}
</script>

<style lang="sass"></style>
