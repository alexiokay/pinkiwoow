<template lang="pug">
div.col-1(class="w-2/4 h-full flex flex-col space-y-3")
  div.album-cover-image(class=`squared overflow-hidden `  :style="{ backgroundImage: `url(${props.image})`, backgroundSize : 'contain' , backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}" @mouseenter="changeToImage(props.image2? props.image2: props.image, $event)" @mouseleave="changeToImage(props.image, $event)")
    div(class="absolute top-4 right-4 w-[6rem] h-auto space-y-3 flex flex-col items-end justify-center text-sm")
          div(v-if="new" class="  w-[4.7rem] h-4 bg-green-600 text-white flex items-center justify-center text-sm")
                  p( class="mb-[1px]") NOWOŚĆ
          div(v-if="props.bestseller" class="   w-[6rem] h-4 bg-blue-600 text-white flex items-center justify-center text-sm")
                  p( class="mb-[1px]") BESTSELLER
    div(class="group w-full h-full flex absolute bottom-0 right-0 flex-row justify-end items-end space-x-2 p-1")
        
          button.item-button1(class=" group-hover:animate-showUp  animate-hideDown  flex text-gray-600  h-10 w-10 bg-transparent border-[1px] border-gray-600  items-center justify-center") 
              IconHeart(class=" ")
          button.item-button2(@click="addToCart" class=" group-hover:animate-showUp flex h-10 w-10 bg-gray-600 hover:bg-black  items-center justify-center") 
              IconCart(class="text-white")
              
div(class="flex flex-col font-montserrat justify-center items-center")
    p(class="text-2xl font-semibold") {{$props.title}}
    p {{  props.description }}
    p {{ $props.price }} {{ productsStore.getCurrency }}
    

    Rating(class="mt-4" width="small" :rated="props.rated" :editable="false")
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import IconCart from "~icons/ph/shopping-cart-simple-fill";
import IconHeart from "~icons/ph/heart-fill";
import { useCartStore } from "@/stores/Cart";
import uniqid from "uniqid";
import { useProductsStore } from "@/stores/Products";
const productsStore = useProductsStore();
type Range =
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 4.5
  | 5
  | 5.5
  | 6
  | 6.5
  | 7
  | 7.5
  | 8
  | 8.5
  | 9;

const changeToImage = (imga: String, event: any) => {
  event.target.style.backgroundImage = `url(${imga})`;
};

let cartStore: any = ref(useCartStore());

cartStore.value = useCartStore();

const generateItem = () => {
  const exampleItem = {
    id: uniqid(),
    title: props.title,
    price: props.price,
    price_pln: props.price_pln,
    quantity: 1,
    image: props.image,
    stripeProductId: props.stripeProductId,
    select: false,
  };

  return exampleItem;
};

const addToCart = () => {
  cartStore.value.addToCart(generateItem());
};

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  price_pln: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: false,
  },
  bestseller: {
    type: Boolean,
    required: false,
  },
  new: {
    type: Boolean,
    required: false,
  },
  stripeProductId: {
    type: String,
    required: true,
  },
  rated: {
    type: Number as PropType<Range>,
    required: true,
  },
});
</script>

<style lang="sass">
.item-button1:hover
    -webkit-transition: color 0.2s
    -webkit-transition: border-color 0.2s
    transition:  border-color 0.2s
    transition: color 0.2s
    color: black
    border-color: black


.item-button2:hover
    -webkit-transition: background-color 0.2s
    transition:  background-color 0.2s

.item-button1
    animation: hideDown 0.2s forwards
    bottom: -50px
.item-button2
    animation: hideDown 0.2s forwards
    bottom: -50px



.squared
    position: relative
    width: 100%
    height: 0
    padding-bottom: 100%
    background-size: cover


@keyframes hideDown
    0%
        transform: translateY(0px)
        opacity: 1
    100%
        transform: translateY(50px)
        opacity: 0
</style>
