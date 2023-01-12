<template lang="pug">
div(class=" w-full h-full  flex flex-col px-3  xl:p-8  mt-20")
  <!-- HEADER -->
  

  div(class="w-full h-auto flex justify-center gap-x-4 items-start   ")
    div(class="w-1/4 h-[50rem] flex flex-col rounded-xl shadow-lg px-4 py-4 space-y-4 bg-white text-xl items-center border-2 border-[#47C1BF] ")
      NuxtLink(to="/kubki") Kubki 
      p Puzzle
      p Koszulki
      p Etui
      p Kalendarze
      p Przypinki
      p Skarpetky
      p Zestawy
      p Itemy
      
    div(class="w-3/4 h-auto flex flex-col ")
      div(class="w-full h-[33rem] flex bg-white rounded-xl overflow-hidden shadow-lg")
        Header(:slides="header") 
      
      div(class="w-full h-auto flex flex-col p-4")
            p(class="text-[#434447] text-[1.5rem] font-bold") Produkty
            LazySwiper(:slides="randomProducts") 
  Wheeler(  )
  
  CollectionsPanel(class="")
  Info
  
  Video(class="mt-8 h-[45rem] w-full")
  Testimonials
 
</template>

<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelistgi the carousel CSS classes
import { mousePads, mugs, wizytowki, header } from "../libs/sliders";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const { t } = useLang();
const route = useRoute();

const randomProducts = computed(() => {
  let randomProduct_temp = [...mugs, ...mousePads].sort(
    () => Math.random() - 0.5
  );
  randomProduct_temp = randomProduct_temp.slice(0, 9);

  console.log(randomProduct_temp);
  return randomProduct_temp;
});
definePageMeta({
  pageTransition: {
    name: "page",
  },
});

type Advantage = {
  title: string;
  description: string;
  image: string;
};

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
  slideWidth: "100%",
  autoplay: 5000,
  transition: 1000,
  wrapAround: true,
});
const income_producitivity = computed(() => {
  return {
    title: t("components.advantages.income_productivity.title"),
    description: t("components.advantages.income_productivity.description"),
    image: "/images/advantages/104.png",
  };
});

const customization = computed(() => {
  return {
    title: t("components.advantages.customization.title"),
    description: t("components.advantages.customization.description"),
    image: "/images/advantages/customization.jpg",
  };
});

const framework = computed(() => {
  return {
    title: t("components.advantages.framework.title"),
    description: t("components.advantages.framework.description"),
    image: "/images/advantages/120.png",
  };
});

const peak_experience = computed(() => {
  return {
    image: "/images/advantages/appreciation.png",
    title: t("components.advantages.peak_experience.title"),
    description: t("components.advantages.peak_experience.description"),
  };
});

const support = computed(() => {
  return {
    image: "/images/advantages/support.png",
    title: t("components.advantages.support.title"),
    description: t("components.advantages.support.description"),
  };
});

const sustainability = computed(() => {
  return {
    image: "/images/advantages/sustainable.jpg",
    title: t("components.advantages.sustainability.title"),
    description: t("components.advantages.sustainability.description"),
  };
});

const slides = ref([
  {
    title: "Slide 1",
    image: "https://defjam.pl/img/imagecache/1300x500_pictures_baner_lp_88.png",
  },
  {
    title: "Slide 2",
    image:
      "https://defjam.pl/img/imagecache/1300x500_pictures_bbbbimage003.jpg",
  },
]);

setTimeout(async () => {
  const CollectionsElements = document.querySelectorAll(
    ".collections-panel"
  ) as NodeListOf<HTMLElement>;
  const stickyElement = document.querySelectorAll(
    ".sticky"
  ) as NodeListOf<HTMLElement>;
});
</script>

<style lang="sass">



.full-width
  width: 100vw
  position: relative
  left: 50%
  right: 50%
  margin-left: -50vw
  margin-right: -50vw


.carousel__prev
    box-sizing: content-box
    margin-left: 30px
    color: gray
    transform: scale(4) translate(0%, -12%)
    -webkit-transition: color 0.3s
    transition: color 0.3s

.carousel__next
    box-sizing: content-box
    margin-right: 30px
    color: gray
    transform: scale(4) translate(0%, -12%)
    -webkit-transition: color 0.3s
    transition: color 0.3s


.carousel__next:hover
    color: black




.carousel__pagination-button::after
    width: 10px
    height: 10px
    border-radius: 50%
    margin: 0 5px
    -webkit-transition: background-color 0.3s
    transition: background-color 0.3s



.advantage
  opacity: 0

.advantage-visible
  opacity: 1

.product
  opacity: 0



@media (prefers-reduced-motion: no-preference)
    .advantage-animation
        animation: something-enter 1s 1 ease-in-out forwards

@media (prefers-reduced-motion: no-preference)
    .product-animation-left
        animation: product-enter-left 1s 1 ease-in-out forwards

@media (prefers-reduced-motion: no-preference)
    .product-animation-right
        animation: product-enter-right 1s 1 ease-in-out forwards

@keyframes wipe-enter
    0%
        transform: scale(0, .025)

    50%
        transform: scale(1, .025)

@keyframes something-enter
  0%
    transform: translateY(-100px)  scale(0.55),
    opacity: 0.2
  100%
    transform: translateY(0px)   scale(1),
    opacity: 1

@keyframes product-enter-left
  0%
    transform: translateX(-300px)
    opacity: 0.3
  100%
    transform: translateX(0px)
    opacity: 1

@keyframes product-enter-right
  0%
    transform: translateX(300px)
    opacity: 0.3
  100%
    transform: translateX(0px)
    opacity: 1
</style>
