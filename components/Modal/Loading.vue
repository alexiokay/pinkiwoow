<template lang="pug">

Transition(name="fade")
    <div v-if="props.isOpen" tabindex="-1" class="fixed top-0 pointer-event-none flex items-center bg-[rgba(0,0,0,0.55)] justify-center left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full"></div>
<Transition name="jump">
    <div v-if="props.isOpen" class="fixed top-0 bottom-0 pointer-event-none flex items-center  justify-center left-0 right-0 z-50  m-auto w-[100vw] md:w-[30rem] p-4  md:inset-0 h-min">
        Loading..
    </div>
</Transition>
    
    </template>

<script lang="ts" setup>
import { useProductsStore } from "@/stores/Products";
import { ref, computed } from "vue";

const props = defineProps<{
  isOpen: boolean;
  currency: string;
}>();
</script>

<style lang="scss"></style>
