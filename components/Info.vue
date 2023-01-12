<template lang="pug">
div(class="flex flex-row flex-wrap gap-y-20 h-auto w-auto  py-12 -mx-8 ")
    div(class="flex flex-row w-1/2 gap-x-4 justify-center items-center")
        PhoneIcon(class="w-20 h-20")
        div(class="flex flex-col  ")
            p(class="text-3xl") Call us Anytime
            p(class="text-lg") +48 797 951 650
    div(class="flex flex-row w-1/2 gap-x-4 justify-center items-center")
        FastShippingIcon(class="w-20 h-20")
        div(class="flex flex-col  ")
            p(class="text-3xl") Fast Shipping
            p(class="text-lg") +48 797 951 650
    div(class="flex flex-row w-1/2 gap-x-4 justify-center items-center")
        ReturnIcon(class="w-20 h-20")
        div(class="flex flex-col  ")
            p(class="text-3xl") Free returns
            p(class="text-lg") +48 797 951 650
    div(class="flex flex-row w-1/2 gap-x-4 justify-center items-center")
        LockedIcon(class="w-20 h-20")
        div(class="flex flex-col  ")
            p(class="text-3xl") Safe payments
            p(class="text-lg") +48 797 951 650
</template>

<script setup lang="ts">
import PhoneIcon from "~icons/lucide/phone-call";
import FastShippingIcon from "~icons/la/shipping-fast";
import ReturnIcon from "~icons/game-icons/return-arrow";
import LockedIcon from "~icons/material-symbols/lock-outline";
</script>

<style lang="sass"></style>
