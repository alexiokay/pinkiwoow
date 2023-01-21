<template lang="pug">
div(class=" w-full h-full  flex flex-col px-3  xl:p-8  ")
  <!-- HEADER -->
  

  div(class="w-full h-auto flex justify-center gap-x-4 items-start   ")
    div(class="w-1/4 h-[50rem] flex flex-col rounded-xl shadow-lg px-4 py-4 space-y-4 bg-white text-xl items-center border-2 border-[#47C1BF] ")
      NuxtLink(to="/") Kubki 
      p Puzzle
      p Koszulki
      p Etui
      p Kalendarze
      p Przypinki
      p Skarpetky
      p Zestawy
      p Itemy
      
    div(class="w-3/4 h-auto flex flex-col ")
      div(class="w-full h-[33rem] flex bg-white rounded-xl overflow-hidden shadow-lg items-center justify-center")
        ClientOnly
          Header(:slides="header") 
          template(#fallback class="w-full h-full flex justify-center items-center")
            <!-- this will be rendered on server side -->
            p Loading...
         
      
      div(class="w-full h-auto flex flex-col p-4")
            p(class="text-[#434447] text-[1.5rem] font-bold") Produkty
            ClientOnlys
              LazySwiper(:slides="randomProducts") 
  Wheeler(  )
  
  CollectionsPanel(class="")
  Info
  
  Video(class="mt-8 h-[45rem] w-full")
  Testimonials
 
</template>

<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelistgi the carousel CSS classes
import { header } from "../libs/sliders";
import "vue3-carousel/dist/carousel.css";
import { onMounted } from "vue";
import type { Ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useMainStore } from "@/stores/Main";
import { useCartStore } from "@/stores/Cart";
import { useProductsStore } from "@/stores/Products";
const { t } = useLang();
const route = useRoute();

let cartStore = useCartStore();
let store: any = ref();
const productsStore = useProductsStore();
//x-nf-client-connection-ip
//

store.value = useMainStore();
store.value.initialize(); //

cartStore.initialize();

const config = useRuntimeConfig();
const localeSetting = useState<string>("locale.setting");

const randomProducts = ref(productsStore.getRandomProducts);
console.log(randomProducts.value);

definePageMeta({
  pageTransition: {
    name: "page",
  },
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
