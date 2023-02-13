<template lang="pug">
div.collections-panel(class="flex relative  h-full flex-col md:flex-row w-5/6 items-start justify-center gap-x-8 md:px-16 mt-12  ")
    div#sticky(class="sticky flex md:mt-6 w-full md:w-[57%] flex-col h-auto md:h-[42rem]")
        div( class="flex h-[20rem] w-full md:h-[35rem]  relative aspect-video flex-col items-center justify-center bg-white  shadow-lg overflow-hidden  ") <!--bg-[#9DD9CF] -->
        
            img(:src="image1"  class="w-full h-full object-contain ")
           
        div(class="flex w-full items-center justify-between h-auto flex-wrap gap-x-3 mt-6 gap-y-4")
            ExampleImg(class=" w-1/6  aspect-square h-auto")
            ExampleImg(class="w-1/6  aspect-square h-auto")
            ExampleImg(class="w-1/6  aspect-square h-auto")
            ExampleImg(class="w-1/6   aspect-square h-auto")
            ExampleImg(class="w-1/6  aspect-square h-auto")
            ExampleImg(class="w-1/6   aspect-square h-auto")

        
  
        
           
       
           
    div#product-options(class="flex flex-col w-full md:w-[43%] gap-y-3 h-full items-center justify-center mt-8 md:mt-0 md:p-8   rounded-xl") <!-- bg-[#EC92BA] -->
        div(class="flex flex-col text-[#252525] justify-center items-center w-full")
            h1(class="text-2xl font-roboto w-full") MUG 11oz: {{ title }}
            p(class="w-full text-start text-lg font-semibold text-gray-500" v-if="productsStore.getCurrency === 'EUR'") {{price_model?.price_eur }} {{ productsStore.getCurrency }}
            p(class="w-full text-start text-lg font-semibold text-gray-500"  v-else-if="productsStore.getCurrency === 'PLN' && price_model?.price_pln !== null") {{price_model?.price_pln}} {{ productsStore.getCurrency }}
        p(class="text-xl font-mulish text-[#1d1d1d]") {{description}}
       



        hr(class="w-full h-[1px] border-[#F1F1F1] my-4")
        div(class="flex flex-col w-full h-auto")
            p(class="text-lg  font-semibold mb-3") Add design from...
            div(class="flex items-center text-xl text-[#17262B] justify-center w-full h-[4.5rem] border-[1px] gap-x-4 hover:bg-[#F2F2F2] smooth-color  hover:cursor-pointer border-[#CCCCCC]")
                MyDeviceIcon
                p My device
        div(class="flex flex-col w-full h-auto")
            p 11oz Size
            div(class="flex flex-row flex-wrap items-center justify-start w-full h-auto gap-x-2")
                div(class="w-14 h-14  flex items-center justify-center border-[1px] border-[#CCCCCC] bg-[#202020] font-semibold text-white hover:cursor-pointer")
                    p 11oz
                div(class="w-14 h-14  flex items-center justify-center border-[1px] border-[#CCCCCC] hover:bg-[#F2F2F2] smooth-color  hover:cursor-pointer")
                    p 11oz
                div(class="w-14 h-14   flex items-center justify-center border-[1px] border-[#CCCCCC] hover:bg-[#F2F2F2] smooth-color  hover:cursor-pointer")
                    p 11oz
                div(class="w-14 h-14   flex items-center justify-center border-[1px] border-[#CCCCCC] hover:bg-[#F2F2F2] smooth-color  hover:cursor-pointer")
                    p 11oz
                div(class="w-14 h-14   flex items-center justify-center border-[1px] border-[#CCCCCC] hover:bg-[#F2F2F2] smooth-color  hover:cursor-pointer")
                    p 11oz
  
    </template>

<script setup lang="ts">
import { onMounted } from "vue";
import MyDeviceIcon from "~icons/ic/round-computer";
import { useProductsStore } from "@/stores/Products";
const productsStore = useProductsStore();
const route = useRoute();
const config = useRuntimeConfig();
console.log(route.query);

//TODO: FInd component by name

const image1 = ref(route.query.image);
const title = ref(route.query.title);
const price_model = ref(route.query.price);
const description = ref(
  route.query.description?.toString().replace(/<[^>]*>/g, "")
);

const slug: string = route.path.split("/").pop() as string;

const product: any = productsStore.getProductBySlug(slug);
image1.value = product.image.url;
title.value = product.title;
price_model.value = product.price_model;
description.value = product.description.toString().replace(/<[^>]*>/g, "");

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 640px) {
  #sticky {
    height: calc(75vh - 4em);
  }
}
@media screen and (min-width: 640px) {
  #sticky {
    height: calc(90vh - 3em);
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
  display: flex;
  align-self: end;
  width: 57%;
  margin-bottom: 1.5rem;
}

.sticky-top {
  display: flex;
  align-self: start;
  width: 57%;
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
