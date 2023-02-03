script
<template lang="pug">
<!--Simple Sun and Clouds with css - Beginers css -->

div(id="default" style="display: flex, flex-direction: column  " class="h-auto flex flex-col justify-center items-center overflow-clip ")
    div#overlay(@click="mainStore.setOverlaying(false);" class="fixed overlaying top-0 left-0 w-full h-screen bg-black opacity-40 z-40 hidden-overlay")
    

    NavInfoBar(v-if="NavbarBlocker" class="" title="🥳 Free shipping on orders over $50 🥳")
    NavBarMain(v-if="NavbarBlocker" class="sticky top-0 z-50" v)
    NavSimplified(class="sticky top-0 z-50" v-else)
    
   
    div#footer-wrapper(class="  w-full h-full flex flex-col items-center justify-between lg:justify-center mx-0 ") 
        div(class="flex flex-col justify-between items-center w-full h-full   ")
            <slot class="" />
            Footer(class="mt-12")
div(class="cursor cursor--small")
canvas(class="cursor cursor--canvas" resize)
</template>

<script setup lang="ts">
import IconFb from "~icons/ic/baseline-facebook";
import IconPhone from "~icons/ic/baseline-phone";
import IconEmail from "~icons/material-symbols/alternate-email";
import { onBeforeMount } from "vue";
import { useMainStore } from "@/stores/Main";
const mainStore = useMainStore();
const router = useRouter();
const route = useRoute();

const sendEmail = () => {
  document.location = "mailto:graphicdesigner@gmail.com";
};
const NavbarBlocker = computed(() => {
  const rout = route.path;
  if (
    route.path !== "/login" &&
    route.path !== "/register" &&
    !route.path.startsWith("/cart")
  )
    return true;
  else return false;
});
onMounted(() => {});
</script>

<style lang="sass">




.panel
    margin-top: 60px
    text-align: center
    margin: 0 auto
    scroll-snap-align: center

    width: 90%
    p.title

        font-style: normal
        font-size: 5vh
        line-height: 0%
        align-self: center
        letter-spacing: 0.18em





.cursor
  position: fixed
  left: 0
  top: 0
  pointer-events: none

.cursor--small
  width: 5px
  height: 5px
  left: -2.5px
  top: -2.5px
  border-radius: 50%
  z-index: 11000
  background: var(--color-text)

.cursor--canvas
  width: 100vw
  height: 100vh
  z-index: 12000

.hidden-overlay
  visibility: hidden
  opacity: 0

.visible-overlay
  visibility: visible
  opacity: 0.4

  // sun background
</style>
