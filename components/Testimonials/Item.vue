<template lang="pug">
div(class="w-full md:w-1/4 h-auto md:h-[25.5rem] flex flex-col items-center smooth-shadow hover:shadow-[0px_0px_35px_1px_rgb(0,0,0,0.15)] justify-center py-4  space-y-5 border-[1px] border-[#E35796]")
    
    nuxt-img(:src="props.image" loading="lazy"  class="rounded-full w-2/6")
    div(class="flex flex-row w-auto h-auto") 
        StarFullIcon(class="text-[#FF9529]" v-for="i in Math.floor(props.stars)" :key="i")
       
        StarHalfIcon(v-if="halfstar" class="text-[#FF9529]")
        StarEmptyIcon(v-if="stars < 5 && !halfstar" class="text-[#FF9529]" v-for="i in 5 - Math.floor(props.stars)" :key="i")
        StarEmptyIcon(v-if="props.stars < 5 && halfstar" class="text-[#FF9529]" v-for="i in 5 -Math.floor(props.stars)-1" :key="i")
    div(class="flex flex-col items-center font-flamabook font-normal justify-start text-[#656163] w-3/4 h-[8rem] gap-y-2")
       
        p(class="text-[#000000]  text-lg  text-center")  {{props.description}}
        p(class="text-[#000000]  text-lg mt-2 text-center ")  {{props.title?.toUpperCase()}}
   
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

<style lang="sass">
.smooth-shadow

  transition: box-shadow 0.35s ease-in-out
</style>
