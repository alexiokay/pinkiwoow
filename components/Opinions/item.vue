<template lang="pug">
div.opinion(class="w-full flex flex-col")
    .opinion-rating 
        Rating(class="w-[7rem]  h-6" width="small" :rated="4.5" :editable="false")
    .opinion-message(class="h-auto w-full  mt-21")
        p(class=" text-black text-xl ")  Super, naprawdę super produkt! :)
    .opinion-purchased-item(class="text-sm flex space-x-2 mt-1")
        p(class="font-semibold  text-gray-800") Purchased Item:
        p(class="font-semibold underline text-gray-400") Boobies Ceramic Bird Mug
    .opinion-user-info(class="flex h-auto text-sm w-full items-center justfy-start space-x-2")
        nuxt-img(class="w-8 h-8 bg-black" src="/images/pinkiwoowLogo.webp ")
        p(class="underline text-gray-500 font-semibold ") Enigma Alighieri
        p(class="text-gray-500") Feb 4, 2021
    
</template>

<script setup lang="ts"></script>

<style lang="sass"></style>
