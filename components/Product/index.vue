<template lang="pug">
div.collections-panel(class="flex relative  h-full flex-row w-5/6 items-start justify-center gap-x-8 px-16 mt-12  ")
    div(class="sticky flex mt-6 w-[57%] flex-col h-[42rem]")
        div( class="flex h-[20rem] md:h-[35rem]  relative aspect-square flex-col items-center justify-center bg-[#E4E5E9]  shadow-lg overflow-hidden  ") <!--bg-[#9DD9CF] -->
        
            nuxt-img(src="/images/your-design.webp"  class="w-full h-full object-contain ")
            div(class=" group  smooth-bg absolute text-black flex flex-col justify-around py-5 items-center w-3/4 bottom-10 rounded-xl h-2/5 bg-[rgba(255,255,255,0.7)] ")
                p(class="text-4xl font-robotolight") Get your own design
                p(class="text-xl mb-2") Express yourself
                button(class=" flex justify-center items-center  opacity-100  smooth-bg m-0 h-12 x-4 py-4 px-5  group-hover:py-6 group-hover:px-6 smart-button  bg-[#CBCF03] text-white text-lg font-publicsans  rounded-lg shadow-xl ") Zaprojektuj własny
        div(class="flex w-full items-center justify-between h-auto flex-wrap gap-x-3 mt-6 gap-y-4")
            ExampleImg(class=" w-2/6 md:w-1/6 aspect-square h-auto")
            ExampleImg(class="w-2/6 md:w-1/6  aspect-square h-auto")
            ExampleImg(class="w-2/6 md:w-1/6 aspect-square h-auto")
            ExampleImg(class="w-2/6 md:w-1/6  aspect-square h-auto")
            ExampleImg(class="w-2/6 md:w-1/6  aspect-square h-auto")
            ExampleImg(class="w-2/6 md:w-1/6  aspect-square h-auto")

        
    div(class="ghost hidden mt-6 w-[57%] flex-col h-[42rem] invisible ")
        div( class="flex h-[20rem] md:h-[35rem]  relative aspect-square flex-col items-center justify-center bg-[#E4E5E9]  shadow-lg overflow-hidden  ") <!--bg-[#9DD9CF] -->
        
           
       
           
    div#product-options(class="flex flex-col w-[43%] gap-y-3 h-full items-center justify-center  p-8   rounded-xl") <!-- bg-[#EC92BA] -->
        div(class="flex flex-col text-[#252525] justify-center items-center w-full")
            h1(class="text-2xl font-roboto w-full") MUG 11oz: YOUR DESIGN
            p(class="text-3xl  font-roboto  mb-2 w-full") $99.00
        p(class="text-xl font-mulish text-[#1d1d1d]") Our iconic Raven sneaker - lightweight, breathable and easy slip-on, a very comfortable choice.
        p(class="text-xl font-mulish text-[#1d1d1d]") This is a demonstration theme for Shopify. All products featured with kind permission from arkkcopenhagen.com. Click here to purchase.



        hr(class="w-full h-[1px] border-[#F1F1F1] my-4")
        div(class="flex flex-col w-full h-auto")
            p(class="text-lg  font-semibold mb-3") Add design from...
            div(class="flex items-center text-xl text-[#17262B] justify-center w-full h-[4.5rem] border-[1px] gap-x-4 hover:bg-[#F2F2F2] smooth-color  hover:cursor-pointer border-[#CCCCCC]")
                MyDeviceIcon
                p My device
        div(class="flex flex-col w-full h-auto")
            p 11oz Size
            div(class="flex flex-row flex-wrap items-center justify-start w-full h-auto gap-x-2")
                div(class="w-14 h-14  flex items-center justify-center border-[1px] border-[#CCCCCC] bg-[#202020] font-semibold text-white hover:cursor-pointer")
                    p 11oz
                div(class="w-14 h-14  flex items-center justify-center border-[1px] border-[#CCCCCC] hover:bg-[#F2F2F2] smooth-color  hover:cursor-pointer")
                    p 11oz
                div(class="w-14 h-14   flex items-center justify-center border-[1px] border-[#CCCCCC] hover:bg-[#F2F2F2] smooth-color  hover:cursor-pointer")
                    p 11oz
                div(class="w-14 h-14   flex items-center justify-center border-[1px] border-[#CCCCCC] hover:bg-[#F2F2F2] smooth-color  hover:cursor-pointer")
                    p 11oz
                div(class="w-14 h-14   flex items-center justify-center border-[1px] border-[#CCCCCC] hover:bg-[#F2F2F2] smooth-color  hover:cursor-pointer")
                    p 11oz
            p dsapp
            p dsada
            p dsadsa
            p dsapp
            p dsada
            p dsadsa
            p dsapp
            p dsada
            p dsadsa
            p dsapp
            p dsada
            p dsadsa
    </template>

<script setup lang="ts">
import { height } from "dom7";
import { on } from "events";
import { onMounted } from "vue";
import MyDeviceIcon from "~icons/ic/round-computer";
onMounted(() => {
  const stickyel = document.querySelector(".sticky") as HTMLElement;
  const productOptions = document.querySelector(
    "#product-options"
  ) as HTMLElement;
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
    if (scroll_position < -top + 380) {
      // if scroll position is less than 180px from top
      stickyel.id = "sticky";
      ghost.style.display = "flex";
      //stickyel.style.width = productOptions.offsetWidth.toString() + "px";
      calculateNewScale();
    }
    if (scroll_position < -bottom + 125) {
      // if scroll position is less than 180px from bottom

      stickyel.classList.remove("sticky-top");
      stickyel.classList.add("sticky-bottom");
      ghost.style.display = "none";
      stickyel.id = "";
      stickyel.style.width = "57%";
    }
    if (scroll_position > -top + 180) {
      // if scroll position is greater than 180px from top
      stickyel.classList.remove("sticky-bottom");
      stickyel.classList.add("sticky-top");
      ghost.style.display = "none";
      stickyel.style.width = "57%";
      stickyel.id = "";
    }

    console.log(scroll_position);
    console.log(collectionsPanel.getBoundingClientRect().top);
  });

  window.addEventListener("resize", function (e) {
    //stickyel.style.width = productOptions.offsetWidth.toString() + "px";

    calculateNewScale();
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

  const calculateNewScale = () => {
    if (ghost.style.display !== "none") {
      let ghostWidth = ghost.offsetWidth;
      let ghostHeight = ghost.offsetHeight;
      let ghostLeft = getOffset(ghost).left;

      stickyel.style.width = ghostWidth + "px";
      stickyel.style.height = ghostHeight + "px";
      stickyel.style.left = ghostLeft + "px";
    }
  };
});
</script>

<style lang="scss" scoped>
#sticky {
  position: fixed;

  top: 22%;
  left: 12.5rem;

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
  display: flex;
  align-self: end;
  width: 57%;
  margin-bottom: 1.5rem;
}

.sticky-top {
  display: flex;
  align-self: start;
  width: 57%;
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
