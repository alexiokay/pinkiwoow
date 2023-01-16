<template lang="pug">
div.collections-panel(class="flex relative  h-full flex-row w-full gap-x-8 px-16 mt-12 full-width ")
    div(class="flex flex-col w-1/2 h-full items-center justify-center  py-8 shadow-lg rounded-xl border-[#EC92BA] border-2") <!-- bg-[#EC92BA] -->
        CollectionsItem(title="Ganja Mug" :bestseller="true" :price="200" :rated="8" image="images/products/mugs/ganja-left.png" image2="images/products/mugs/ganja-right.png" stripePriceId="200")
        CollectionsItem(title="Ben 10" :price="200" :rated="5" image="images/products/mugs/ben-10-left.png" image2="images/products/mugs/ben-10-right.png" stripePriceId="200")
    div( class="sticky flex mt-6 w-1/2 h-[35rem] aspect-square flex-col items-center justify-center bg-[#E4E5E9]  shadow-lg rounded-xl overflow-hidden  ") <!--bg-[#9DD9CF] -->
        img(src="/images/your-design.webp"  class="w-full h-full object-contain ")
        .collections-panel(class=" group  smooth-bg absolute text-black flex flex-col justify-around py-5 items-center w-3/4 bottom-10 rounded-xl h-2/5 bg-[rgba(255,255,255,0.7)] ")
          p(class="text-4xl font-robotolight") Get your own design
          p(class="text-xl mb-2") Express yourself
          
          NuxtLink(to="/personalize/mug" class=" flex justify-center items-center  opacity-100  smooth-bg m-0 h-12 x-4 py-4 px-5  group-hover:py-6 group-hover:px-6 smart-button  bg-[#CBCF03] text-white text-lg font-publicsans  rounded-lg shadow-xl ") Zaprojektuj własny
    div.ghost(class="w-1/2")

    </template>

<script setup lang="ts">
import { height } from "dom7";
import { on } from "events";
import { onMounted } from "vue";
onMounted(() => {
  const stickyel = document.querySelector(".sticky") as HTMLElement;
  const ghost = document.querySelector(".ghost") as HTMLElement;
  const collectionsPanel = document.querySelector(
    ".collections-panel"
  ) as HTMLElement;
  let scroll_position = 0;
  let scroll_direction = "down";

  window.addEventListener("scroll", function (e) {
    scroll_direction =
      document.body.getBoundingClientRect().top > scroll_position
        ? "up"
        : "down";
    scroll_position = document.body.getBoundingClientRect().top;

    let top = getOffset(document.querySelector(".collections-panel")).top;
    let bottom = top + collectionsPanel.offsetHeight - 770;

    if (scroll_position < -top + 180) {
      stickyel.id = "sticky";
      ghost.style.display = "flex";
    }
    if (scroll_position < -bottom) {
      //-2612
      stickyel.classList.remove("sticky-top");
      stickyel.classList.add("sticky-bottom");
      ghost.style.display = "none";
      stickyel.id = "";
    }
    if (scroll_position > -top + 180) {
      stickyel.classList.remove("sticky-bottom");
      stickyel.classList.add("sticky-top");
      ghost.style.display = "none";

      stickyel.id = "";
    }
  });

  function getOffset(el: any) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: _y, left: _x };
  }
});
</script>

<style lang="scss" scoped>
#sticky {
  position: fixed;

  top: 20%;
  left: 51%;
  width: 45.3%;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.smooth-bg {
  -webkit-transition: visibility 0.3s linear, opacity 0.3s linear;
  -moz-transition: visibility 0.3s linear, opacity 0.3s linear;
  -o-transition: visibility 0.3s linear, opacity 0.3s linear;
  transition: visibility 0.3s linear, opacity 0.3s linear;
}

.smart-button {
  -webkit-transition: padding 0.3s linear;
  -moz-transition: padding 0.3s linear;
  -o-transition: padding 0.3s linear;
  transition: padding 0.3s linear;
}

.sticky-bottom {
  position: flex;
  align-self: end;
  bottom: 0;
  left: 0;
  margin-bottom: 1.5rem;
}

.sticky-top {
  position: flex;
  align-self: start;
  top: 0;
  left: 0;
  margin-top: 1.5rem;
}
.collections-panel::-webkit-scrollbar {
  display: none;
}

.ghost {
  display: none;
}
.collections-panel-fixed {
  position: fixed;
  top: 0;
}
</style>
