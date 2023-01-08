<template lang="pug">
div.our-ep(class="flex flex-col md:flex-row w-full h-auto justify-end space-x-24 items-center")
    div(class="border-[1px] w-[21rem] h-[21rem] flex items-center justify-center")
        img(:src="props.img"  class=" shadow-lg w-64 h-64" alt="")
    div(class="flex-col w-1/2")
        h2(class="text-3xl") {{props.title}}
        h3(class="text-base mt-6")  {{props.description}}
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style lang="sass"></style>
