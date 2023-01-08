<template lang="pug">
div.w-full.h-auto.p-2.flex.justify-center.items-center.text-white(class="bg-[#47C1BF]")
    p {{props.title}} 

</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
});
</script>

<style lang="sass"></style>
