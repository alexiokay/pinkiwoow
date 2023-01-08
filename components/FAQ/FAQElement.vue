<template lang="pug">
div.objective(class="flex flex-col space-y-4 justify-center w-full h-auto")
        p(@click="isOpen = !isOpen" class="text-[#1e1e1e] text-2xl hover:cursor-pointer font-semibold") {{props.title}}
        p(v-if="isOpen"  class="text-lg text-[#343434]") {{props.description}}
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: false,
  },
});
let isOpen = ref(false);
if (props.isOpen) {
  isOpen.value = props.isOpen;
}
</script>

<style lang="sass"></style>
