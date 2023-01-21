<template lang="pug">
div.collections-panel(class=" relative flex flex-col sm:flex-row  h-full  w-full gap-x-8 px-8 lg:px-16 mt-12 full-width ")
    div(class="flex flex-col w-full sm:w-1/2 h-full items-center justify-center order-1  py-8 shadow-lg rounded-xl border-[#EC92BA] border-2") <!-- bg-[#EC92BA] -->
        CollectionsItem(title="Ganja Mug" :bestseller="true" :price="200" :price_pln="200" :rated="8" image="images/products/mugs/ganja-left.png" image2="images/products/mugs/ganja-right.png" stripePriceId="200")
        CollectionsItem(title="Ben 10" :price="200" :price_pln="200" :rated="5" image="images/products/mugs/ben-10-left.png" image2="images/products/mugs/ben-10-right.png" stripePriceId="200")

    div#sticky( class="sm:sticky relative mb-6 overflow-hidden   flex mt-6 w-full order-0 sm:w-1/2   md:h-[60vh] aspect-square flex-col items-center justify-center bg-[#E4E5E9]  shadow-lg rounded-xl   ") <!--bg-[#9DD9CF] -->
        img(src="/images/your-design.webp"  class="w-full h-full object-contain ")
        .collections-panel(class=" group  smooth-bg absolute text-black flex flex-col justify-around py-5 items-center w-3/4 bottom-10 rounded-xl h-2/5 bg-[rgba(255,255,255,0.7)] ")
          p(class="text-4xl font-robotolight") Get your own design
          p(class="text-xl mb-2") Express yourself
          
          NuxtLink(to="/personalize/mug" class=" flex justify-center items-center  opacity-100  smooth-bg m-0 h-12 x-4 py-4 px-5  group-hover:py-6 group-hover:px-6 smart-button  bg-[#CBCF03] text-white text-lg font-publicsans  rounded-lg shadow-xl ") Zaprojektuj własny

div.collections-panel(class=" relative flex  sm:hidden  h-full flex-row w-full gap-x-8 px-8 lg:px-16 mt-12 full-width ")
  p dsaads
    </template>

<script setup lang="ts">
import { height } from "dom7";
import { on } from "events";
import { onMounted } from "vue";
</script>

<style lang="scss" scoped>
@media screen and (max-width: 640px) {
  #sticky {
    height: calc(75vh - 4em);
  }
}
@media screen and (min-width: 640px) {
  #sticky {
    height: calc(75vh - 4em);
    top: calc(11vh + 7.5em);
  }
}

.smooth-bg {
  -webkit-transition: visibility 0.3s linear, opacity 0.3s linear;
  -moz-transition: visibility 0.3s linear, opacity 0.3s linear;
  -o-transition: visibility 0.3s linear, opacity 0.3s linear;
  transition: visibility 0.3s linear, opacity 0.3s linear;
}

.smart-button {
  -webkit-transition: padding 0.3s linear;
  -moz-transition: padding 0.3s linear;
  -o-transition: padding 0.3s linear;
  transition: padding 0.3s linear;
}

.sticky-bottom {
  position: flex;
  align-self: end;
  bottom: 0;
  left: 0;
  margin-bottom: 1.5rem;
}

.sticky-top {
  position: flex;
  align-self: start;
  top: 0;
  left: 0;
  margin-top: 1.5rem;
}
.collections-panel::-webkit-scrollbar {
  display: none;
}

.ghost {
  display: none;
}
.collections-panel-fixed {
  position: fixed;
  top: 0;
}
</style>
