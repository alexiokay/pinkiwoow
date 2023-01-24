<template lang="pug">

div(class="relative h-auto overflow-hidden ")
  .swiper-container(class='')
      .swiper-wrapper(class='')
          .swiper-slide(v-for="slide in props.slides" :key="slide.title"  class="hover:cursor-pointer    overflow-hidden flex flex-col ")
            div(class="w-[98%] h-[98%] relative group text-sm rounded-xl p-2 text-start hover:shadow-[0px_0px_3px_1px_rgb(0,0,0,0.15)]")
              div(class="h-8 w-8 absolute  flex  top-[1rem] right-[1rem] z-20 hover:bg-gray-100 rounded-full items-center justify-center ")
                IconHeart(v-if="!slides.favourite" class="w-5 h-5 text-gray-700 smooth-bg opacity-0 group-hover:opacity-100")
                IconFillHeart(v-if="slides.favourite" class="w-5 h-5 text-black")
              div(class="h-5  text-black w-[4.5rem] absolute flex items-center justify-center rounded-full top-[1rem] left-[1rem] z-20 border-[1px] border-gray-400")
                p(class="text-xs ") Promocja
              button#buy(class="absolute  items-center hidden group-hover:flex justify-center text-green-600 hover:text-white h-9 w-9 bottom-[0.65rem] right-[0.65rem] z-20 border-[1px] border-green-600 hover:bg-green-600 rounded-full ")
                IconAddToCart(class="w-4 h-4 ")
              div(class=" h-3/5  w-auto flex flex-col mt-4")
                nuxt-img.swiper-image(:src="slide.image?.url" :alt="slide.image?.alt"  class="aspect-square w-full h-full object-contain")
                
              p(class=" text-base mb-3  font-robotolight font-bold text-black mt-3") {{slide.title  }}
              div(class="absolute bottom-[1rem] left-[1rem] ")
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

const productsStore = useProductsStore();
const props = defineProps({
  slides: {
    type: Array as PropType<ProductType[]>,
    required: true,
  },
});

onMounted(() => {
  const evaluateMaxNofChild = (number: any) => {
    const carouselChildren = document.querySelectorAll(
      ".swiper-container .swiper-slide"
    ).length;

    return number >= carouselChildren ? carouselChildren : number;
  };

  const mySwiper = new Swiper(".swiper-container", {
    modules: [Pagination, Lazy],
    preloadImages: false,
    spaceBetween: 4,
    lazy: {
      //  tell swiper to load images before they appear
      loadPrevNext: true,
      // amount of images to load
      loadPrevNextAmount: 2,
    },
    cssMode: true,

    slidesPerGroup: 1,

    loopFillGroupWithBlank: true,

    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 2,
        spaceBetween: 4,
      },
      // when window width is >= 480px
      569: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      767: {
        slidesPerView: 4.5,
        spaceBetween: 12,
      },
    },
  });
  function hideRedundantBullets(className: string) {
    var elems = document.querySelectorAll(className) as NodeListOf<HTMLElement>;
    var index = 0;

    length = elems.length;
    if (length === props.slides.length)
      for (; index < length; index++) {
        if (index > 0 && index < length - 1) {
          elems[index].style.display = "none";
        }
      }
  }
  hideRedundantBullets(".swiper-pagination-bullet");
  window.addEventListener("resize", (event) => {
    console.log("page is fully loaded");
    hideRedundantBullets(".swiper-pagination-bullet");
  });

  const owl_stage = document.querySelector(".swiper-container") as HTMLElement;
  owl_stage.classList.add("noselect");
});
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
  position: relative
    width: 24%
    height: 0 auto
    padding-bottom: 24%
    background-size: cover
  text-align: center
  font-size: 18px
  background: #fff
  /* Center slide text vertically */
  display: -webkit-box
  display: -ms-flexbox
  display: -webkit-flex
  display: flex
  -webkit-box-pack: center
  -ms-flex-pack: center
  -webkit-justify-content: center
  justify-content: center
  -webkit-box-align: center
  -ms-flex-align: center
  -webkit-align-items: center
  align-items: center




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
