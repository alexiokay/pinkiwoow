<template lang="pug">
div#smart-button(class="hover:bg-[#d6d6d6]  hover:cursor-pointer w-full h-14 flex justify-center items-center text-2xl text-black font-adelia bg-[#ffd100]")
    p {{props.text}}
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style lang="sass">
#smart-button
  -webkit-transition-property: color, background-color
  transition-property: color, background-color, border
  -webkit-transition-duration: 0.4s
  transition-duration: 0.4s
  -moz-osx-font-smoothing: grayscale
  cursor: pointer
</style>
