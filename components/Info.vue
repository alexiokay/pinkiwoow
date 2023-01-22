<template lang="pug">
div(class="flex flex-row flex-wrap gap-y-20 h-auto w-auto   py-12 md:-mx-8 ")
    div(class="flex flex-row w-1/2 gap-x-4 px-4 justify-center items-center")
        PhoneIcon(class=" w-12 h-12 md:w-20 md:h-20")
        div(class="flex flex-col  ")
            p(class="text-2xl md:text-3xl font-roboto") Call us Anytime
            p(class="text-lg") +48 797 951 650
    div(class="flex flex-row w-1/2 gap-x-4 justify-center items-center")
        FastShippingIcon(class="w-12 h-12 md:w-20 md:h-20")
        div(class="flex flex-col  ")
            p(class="text-2xl md:text-3xl font-roboto") Fast Shipping
            p(class="text-lg") +48 797 951 650
    div(class="flex flex-row w-1/2 gap-x-4 justify-center items-center")
        ReturnIcon(class="w-12 h-12 md:w-20 md:h-20")
        div(class="flex flex-col  ")
            p(class="text-2xl md:text-3xl font-roboto") Free returns
            p(class="text-lg") +48 797 951 650
    div(class="flex flex-row w-1/2 gap-x-4 justify-center items-center")
        LockedIcon(class="w-12 h-12 md:w-20 md:h-20")
        div(class="flex flex-col ")
            p(class="text-2xl md:text-3xl font-roboto") Safe payments
            p(class="text-lg") +48 797 951 650
</template>

<script setup lang="ts">
import PhoneIcon from "~icons/lucide/phone-call";
import FastShippingIcon from "~icons/la/shipping-fast";
import ReturnIcon from "~icons/game-icons/return-arrow";
import LockedIcon from "~icons/material-symbols/lock-outline";
</script>

<style lang="sass"></style>
