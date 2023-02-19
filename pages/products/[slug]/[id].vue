<template lang="pug">
div(class="flex flex-col font-montserrat w-full px-4   h-full md:px-16 xl:px-24 items-center md:items-start gap-x-28 justify-center")
    
    h1(class="text-2xl z-20 w-full md:text-3xl text-white font-itim h-full items-center flex mt-4") Mugs

    NavHeader
    div(class="w-full mt-[2rem] md:mt-[5rem] h-auto flex flex-wrap  items-center justify-between gap-x-4" v-if="products")
        div(  v-for="product in products"  class="w-[48%] sm:w-1/4 lg:w-[20%] h-[16rem] md:h-[17rem] lg:h-[20rem]  mt-1 relative group text-sm rounded-xl p-2 text-start hover:shadow-[0px_0px_3px_1px_rgb(0,0,0,0.15)]")
            button(@click.stop="addToFavourites(product.id)" class="h-8 w-8 absolute  flex  top-[1rem] right-[1rem] z-20 hover:bg-gray-100 rounded-full items-center justify-center ")
                IconHeart(v-if="!favourites.includes(product.id)" class="w-5 h-5 text-gray-700 smooth-bg opacity-0 group-hover:opacity-100")
                IconFillHeart(v-if="favourites.includes(product.id)" class="w-5 h-5 text-black")
            div(class="h-5  text-black w-[4.5rem] absolute flex items-center justify-center rounded-full top-[1rem] left-[1rem] z-20 border-[1px] border-gray-400")
                p(class="text-xs ") Promocja
            button#buy(@click.stop="cartStore.addToCart(product)" class="absolute  items-center hidden group-hover:flex justify-center text-green-600 hover:text-white h-9 w-9 bottom-[0.65rem] right-[0.65rem] z-20 border-[1px] border-green-600 hover:bg-green-600 rounded-full ")
                IconAddToCart(class="w-4 h-4 ")
            div(class=" h-3/5  w-auto flex flex-col mt-4")
                nuxt-img.swiper-image(:src="product.image?.url" :alt="product.image?.alt"  class="aspect-square w-full h-full object-contain")
                
            p(class=" text-sm md:text-base mb-3  font-robotolight font-bold text-black mt-3") {{product.title  }}
            div(class="absolute bottom-[0.2rem] md:bottom-[1rem] left-[1rem] ")
                p(v-if="productsStore.getCurrency === 'EUR'") {{product.price_model.price_eur }} {{ productsStore.getCurrency }}
                p(v-else-if="productsStore.getCurrency === 'PLN' && product.price_model.price_pln !== null") {{product.price_model.price_pln}} {{ productsStore.getCurrency }}
        
</template>

<script setup lang="ts">
import IconHeart from "~icons/ph/heart";
import IconFillHeart from "~icons/ph/heart-fill";
import IconAddToCart from "~icons/material-symbols/add-shopping-cart-rounded";
import { useUserStore } from "~~/stores/User";
import { useCartStore } from "@/stores/Cart";
import { useProductsStore } from "@/stores/Products";
import { addToFavourites } from "@/functions/addToFavourites";
const productsStore = useProductsStore();
const cartStore = useCartStore();
const userStore = useUserStore();
const favourites = computed(() => userStore.favourites);
const config = useRuntimeConfig();
const route = useRoute();
const options = {
  method: "GET",
  headers: {
    Host: `${config.FETCH_HOST}`,
    Authorization: `${config.API_TOKEN}`,
  },
};
const page = Number(route.path.toString().split("/").slice(-1).pop());
const offset = (page - 1) * 50;

let searching = route.path
  .toString()
  .split("/")
  .slice(-2, -1)[0]
  ?.replace(/-/g, "");
searching = searching?.substring(0, searching.length - 1);
console.log(searching);
const products = await useFetch(
  `${config.API_URL}api/v2/pages/?type=shop.ProductPage&search=${searching}&offset=${offset}&fields=title,description,image,image2,image3,price_model,category,sub_category,rating`,
  options
).then((res) => {
  const data: any = res.data.value;
  const error = res.error.value;
  if (error) {
    // dealing error
    console.log(error);
  } else {
    return data.items;
  }
});
</script>

<style lang="scss"></style>
