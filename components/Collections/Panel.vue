<template lang="pug">
div.collections-panel(class="flex relative  h-full flex-row w-full gap-x-8 px-16 mt-12 full-width ")
    div(class="flex flex-col w-1/2 h-full items-center justify-center  py-8 shadow-lg rounded-xl bg-[#EC92BA] ") <!-- bg-[#EC92BA] -->
        CollectionsItem
        CollectionsItem
        CollectionsItem
        CollectionsItem
    div( class="sticky flex mt-6 w-1/2 h-[35rem] aspect-square flex-col items-center justify-center bg-[#9DD9CF]  shadow-lg rounded-xl overflow-hidden  ") <!--bg-[#9DD9CF] -->
        nuxt-img(src="https://picsum.photos/600/600" format="webp"  class="w-full h-full object-cover ")
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
    console.log(bottom);
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
    console.log(scroll_position);
    console.log(collectionsPanel.getBoundingClientRect().top);
  });

  function getOffset(el) {
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

<style lang="scss">
#sticky {
  position: fixed;

  top: 20%;
  left: 51%;
  width: 45.3%;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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
