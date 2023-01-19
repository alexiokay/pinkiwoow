<template lang="pug">

div(class="relative h-auto overflow-hidden ")
  .swiper-container(class='')
      .swiper-wrapper(class='')
          .swiper-slide(v-for="slide in props.slides" :key="slide.title"  class="hover:cursor-pointer  flex flex-col ")
            div(class="h-[54rem] w-full flex flex-col ")
              img.swiper-image(:src="slide.image?.url" :alt="slide.image?.alt" class="swiper-lazy overflow-hidden rounded-lg object-contain w-full h-full")
              .swiper-lazy-preloader
            p(class=" text-lg font-robotolight font-bold text-black mt-3") {{slide.title  }}
            p(v-if="store.currency === 'EUR'") {{slide.price_model.price_eur }} {{ store.getCurrency }}
            p(v-if="store.currency === 'PLN' && slide.price_model.price_pln !== null") {{slide.price_model.price_pln}} {{ store.getCurrency }}
         
      .swiper-pagination(class=" absolute left-0 right-0 bottom-[-58rem] ml-auto mr-auto")
</template>

<script setup lang="ts">
import { Swiper, Lazy, Pagination } from "swiper";
import type { PropType } from "vue";
import type { ProductType } from "../types/Product";
import "swiper/css";
import "swiper/css/pagination";
import { useMainStore } from "@/stores/Main";

const store = ref(useMainStore());
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

<style lang="sass">


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
