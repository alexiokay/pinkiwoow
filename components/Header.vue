<template lang="pug">per-container
div(class="relative h-full overflow-hidden ")
    #header-container(class=' h-full')
        .swiper-wrapper(class='')
            .swiper-slide(v-for="slide in props.slides" class="hover:cursor-pointer  flex flex-col")
                div(class="h-full w-full flex flex-col overflow-hidden ")
                    nuxt-img.swiper-image(:src="slide.img" format="webp" class="w-full h-full object-cover ")
                
                div(class=" space-y-3 absolute flex flex-col left-[1rem] bottom-[1rem] text-black text-xl font-semibold w-[17rem] h-auto rounded-xl")
                  div.header-title(class=" text-black text-xl font-semibold w-full h-full bg-[rgba(255,255,255,0.5)] rounded-xl") Kubki z Ben10

                  div.header-desc(class=" flex flex-col  px-[0.3rem] items-start justify-start text-black text-xl text-start font-normal w-[21.5rem] md:w-[26rem] h-[4rem] bg-[rgba(255,255,255,0.5)] rounded-xl") 
                    p Poznajcie się lepiej z Benem 10 i jego przyjaciółmi.

        .swiper-pagination(class="")
</template>

<script setup lang="ts">
import { Swiper, Lazy, Pagination, Autoplay } from "swiper";
import { onMounted } from "vue";
import "swiper/css";

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
      renderBullet: function (index, className) {
        return `<span class="${className}"></span>`;
      },
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },
  });

  const owl_stage = document.querySelector("#header-container") as HTMLElement;
  owl_stage.classList.add("noselect");
});
</script>

<style lang="sass" scoped>


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
  min-height: 100%
  min-width: 100%





.swiper-pagination
    position: absolute
    top: 10px
    right: 10px
    width: auto !important
    left: auto !important
    margin: 0
    .swiper-pagination-bullet
      padding: 5px 10px
      border-radius: 0
      width: auto
      height: 30px
      text-align: center
      line-height: 30px
      font-size: 12px
      color:#000
      opacity: 1
      background: rgba(0,0,0,0.2)
    .swiper-pagination-bullet-active
      background-color: red





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
