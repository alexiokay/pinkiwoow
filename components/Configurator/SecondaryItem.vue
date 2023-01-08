<template lang="pug">
div(class="flex flex-col w-1/5 justify-center items-center ")
        div(:class="{'bg-blue-500 text-white': props.isActive === true }" class="flex flex-col w-[5.5rem] h-[8rem] items-center justify-between rounded-xl border-[1px] bg-white border-[#b5b5b5] hover:cursor-pointer")
            Icon(:icon="props.icon" class="w-2/4 h-2/4 mt-2")
            p(class="text-center mb-4") {{props.option.title}}
        p(class="text-center mb-4") {{props.option.price}}
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  option: {
    type: Object,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
  },
});
</script>

<style lang="sass"></style>
