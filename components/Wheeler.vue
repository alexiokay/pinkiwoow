<template lang="pug">
.logo-slider
  .logo-slide-track.space-x-4
    .slide.row.w-auto.items-center.flex.gap-x-8.relative(v-for="i in 14" :key="i")
        button(class="bg-[#47C1BF] text-lg rounded-full h-12 text-white w-auto px-8 absolute right-8 hover:top-[4.5rem] hover:drop-shadow-xl") Shop Collection
        p(class="font-itim text-5xl ") Last chance to buy
   
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
onMounted(() => {
  const logoSlider = document.querySelector(".logo-slider") as HTMLElement;
  const logoSlideTrack = logoSlider.querySelector(
    ".logo-slide-track"
  ) as HTMLElement;
  logoSlider.addEventListener("mouseenter", (e) => {
    logoSlideTrack.style.animationPlayState = "paused";
  });
  logoSlider.addEventListener("mouseleave", (e) => {
    logoSlideTrack.style.animationPlayState = "running";
  });
});
</script>

<style lang="css">
/* Logo Slider */

.logo-slider {
  background: white;
  -webkit-box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
  box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
  margin: auto;
  overflow: visible;
  position: relative;
  width: 100%;
}

.logo-slider .logo-slide-track {
  -webkit-animation: logo-scroll 60s linear infinite;
  animation: logo-scroll 60s linear infinite;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: calc(650px * 14);
  animation-duration: 23s;
  animation-iteration-count: infinite;
}

.logo-slider .slide {
  height: 200px;
  width: 650px;
  padding: 0px;
}

@-webkit-keyframes logo-scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    -webkit-transform: translateX(calc(-250px * 7));
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes logo-scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    -webkit-transform: translateX(calc(-250px * 7));
    transform: translateX(calc(-250px * 7));
  }
}
</style>
