<template lang="pug">
div(class="flex flex-col w-full items-center justify-center h-auto ")
    Product(:isConfigurable="true" :product="productsStore.getRandomProducts[0]")
</template>

<script setup lang="ts">
import { useProductsStore } from "@/stores/Products";
const productsStore = useProductsStore();
</script>

<style lang="sass"></style>
