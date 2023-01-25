<template lang="pug">per-container
div(class="relative h-full overflow-hidden ")
    #header-container(class=' h-[40vh] md:h-[52vh]')
        .swiper-wrapper(class='')
            .swiper-slide(v-for="slide in props.slides" class="hover:cursor-pointer  flex flex-col")
                div(class="h-[54rem] w-full flex flex-col overflow-hidden ")
                    nuxt-img.swiper-image(:src="slide.img" class="w-full h-full object-cover ")
                   
           
        .swiper-pagination(class=" absolute left-0 right-0 bottom-[-58rem] ml-auto mr-auto")
</template>

<script setup lang="ts">
import { Swiper, Lazy, Pagination, Autoplay } from "swiper";
import { onMounted } from "vue";
import "swiper/css";
import "swiper/css/pagination";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  const mySwiper = new Swiper("#header-container", {
    modules: [Pagination, Lazy, Autoplay],
    preloadImages: false,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    speed: 1000,

    lazy: {
      //  tell swiper to load images before they appear
      loadPrevNext: true,
      // amount of images to load
      loadPrevNextAmount: 1,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const owl_stage = document.querySelector("#header-container") as HTMLElement;
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

#header-container
  width: 100%



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
