<template lang="pug">
div.row(class="w-full h-20 justify-between px-2 gap-x-2 items-start")
    div.col(class="w-1/4 h-full")
        img(class="w-16 h-16" :src="item.image")
    div(class="w-3/4 h-full justify-between text-black text-sm font-flamabook").col
        p {{item.title}}
        div
            p {{item.price}} ZL
            p Ilosc: {{item.quantity}}
    CloseIcon(@click="$emit(close)" class="w-4 h-4 hover:cursor-pointer")
</template>

<script setup lang="ts">
import CloseIcon from "~icons/ic/outline-close";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="sass"></style>
