<template lang="pug">

div(class="relative h-auto overflow-hidden ")
  .swiper-container(class='overflow-hidden')
      .swiper-wrapper(class='')
          NuxtLink.swiper-slide(@click="goToProduct(slide)" v-for="slide in props.slides" :key="slide.title"  class="hover:cursor-pointer items-center justify-center    overflow-hidden flex flex-col ")
            div( class="w-[98%] h-[87%] md:h-[98%] m-auto mt-1 relative group text-sm rounded-xl p-2 text-start hover:shadow-[0px_0px_3px_1px_rgb(0,0,0,0.15)]")
              button(@click.stop="addToFavourites(slide.id)" class="h-8 w-8 absolute  flex  top-[1rem] right-[1rem] z-20 hover:bg-gray-100 rounded-full items-center justify-center ")
                IconHeart(v-if="!favourites.includes(slide.id)" class="w-5 h-5 text-gray-700 smooth-bg opacity-0 group-hover:opacity-100")
                IconFillHeart(v-if="favourites.includes(slide.id)" class="w-5 h-5 text-black")
              div(class="h-5  text-black w-[4.5rem] absolute flex items-center justify-center rounded-full top-[1rem] left-[1rem] z-20 border-[1px] border-gray-400")
                p(class="text-xs ") Promocja
              button#buy(@click.stop="cartStore.addToCart(slide)" class="absolute  items-center hidden group-hover:flex justify-center text-green-600 hover:text-white h-9 w-9 bottom-[0.65rem] right-[0.65rem] z-20 border-[1px] border-green-600 hover:bg-green-600 rounded-full ")
                IconAddToCart(class="w-4 h-4 ")
              div(class=" h-3/5  w-auto flex flex-col mt-4")
                nuxt-img.swiper-image(:src="slide.image?.url" :alt="slide.image?.alt"  class="aspect-square w-full h-full object-contain")
                
              p(class=" text-sm md:text-base mb-3  font-robotolight font-bold text-black mt-3") {{slide.title  }}
              div(class="absolute bottom-[0.2rem] md:bottom-[1rem] left-[1rem] ")
                p(v-if="productsStore.getCurrency === 'EUR'") {{slide.price_model.price_eur }} {{ productsStore.getCurrency }}
                p(v-else-if="productsStore.getCurrency === 'PLN' && slide.price_model.price_pln !== null") {{slide.price_model.price_pln}} {{ productsStore.getCurrency }}
          
      .swiper-pagination(class=" absolute left-0 right-0 bottom-[-58rem] ml-auto mr-auto")
</template>

<script setup lang="ts">
import { Swiper, Lazy, Pagination } from "swiper";
import type { PropType } from "vue";
import type { ProductType } from "@/types/Product";
import "swiper/css";
import "swiper/css/pagination";
import IconHeart from "~icons/ph/heart";
import IconFillHeart from "~icons/ph/heart-fill";
import IconAddToCart from "~icons/material-symbols/add-shopping-cart-rounded";
import { useProductsStore } from "@/stores/Products";
import { useCartStore } from "@/stores/Cart";
import { useUserStore } from "~~/stores/User";
import Cookies from "js-cookie";
import { addToFavourites } from "@/functions/addToFavourites";

const userStore = useUserStore();
const favourites = computed(() => userStore.favourites);
const router = useRouter();
const cartStore = useCartStore();
const productsStore = useProductsStore();
const config = useRuntimeConfig();
const props = defineProps({
  slides: {
    type: Array as PropType<ProductType[]>,
    required: true,
  },
});

onMounted(() => {
  console.log(props.slides);
  console.log(favourites);
  const evaluateMaxNofChild = (number: any) => {
    const carouselChildren = document.querySelectorAll(
      ".swiper-container .swiper-slide"
    ).length;

    return number >= carouselChildren ? carouselChildren : number;
  };

  const mySwiper = new Swiper(".swiper-container", {
    modules: [Lazy],
    preloadImages: false,
    spaceBetween: 4,
    lazy: {
      //  tell swiper to load images before they appear
      loadPrevNext: true,
      // amount of images to load
      loadPrevNextAmount: 2,
    },

    slidesPerGroup: 1,

    loopFillGroupWithBlank: true,

    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 2.5,
        spaceBetween: 4,
      },
      // when window width is >= 480px
      569: {
        slidesPerView: 3.5,
        spaceBetween: 8,
      },
      767: {
        slidesPerView: 4.5,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 5.5,
        spaceBetween: 12,
      },
    },
  });

  const owl_stage = document.querySelector(".swiper-container") as HTMLElement;
  owl_stage.classList.add("noselect");
});

const goToProduct = (slide: any) => {
  router.push({
    path: `/product/${slide.meta.slug}`,
  });
};
</script>

<style lang="sass" scoped>

.smooth-bg
  -webkit-transition: visibility 0.2s linear, opacity 0.2s linear
  -moz-transition: visibility 0.2s linear, opacity 0.2s linear
  -o-transition: visibility 0.2s linear, opacity 0.2s linear
  transition: visibility 0.2s linear, opacity 0.2s linear



.noselect
  -webkit-touch-callout: none
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none




.append-buttons
  text-align: center
  margin-top: 20px

.append-buttons a
  display: inline-block
  border: 1px solid #007aff
  color: #007aff
  text-decoration: none
  padding: 4px 10px
  border-radius: 4px
  margin: 0 10px
  font-size: 13px

.swiper-container
  width: 100%
  height: 42vh
  margin: 20px auto



.swiper-pagination > *
  width: 0.65rem
  height: 0.65rem


.swiper-slide
  width: auto
  flex-shrink: 0
  display: block
  height: 100%
  max-height: 100%


.swiper-wrapper
  max-height: 100%
  height: 100%
  display: flex

.container
  padding: 20px
  background: red
  overflow: hidden

.swiper-button-next
  right: -15px

.container-inner
  background: #000
  padding: 15px

.swiper-image
  position: relative
</style>
