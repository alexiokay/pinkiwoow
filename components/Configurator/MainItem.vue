<template lang="pug">
div(class="flex flex-col w-1/5 justify-center items-center focused:bg-red-500")
        div(:class="{'bg-blue-500 text-white': props.isActive === true }" class="flex flex-col w-[5rem] h-[5rem] items-center justify-center rounded-xl border-[1px] bg-white drop-shadow-lg border-[#434447] hover:cursor-pointer")
            Icon(:icon="props.icon" class="w-2/4 h-2/4 ")
        p(class="text-center mt-4") {{props.title}}
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
  },
});
</script>

<style lang="sass"></style>
