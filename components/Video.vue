<template lang="pug">
div.relative.w-full
    video(playsinline, autoplay, muted, loop)
        source(src="https://www.w3schools.com/html/mov_bbb.mp4", type="video/mp4")
        
        p Your browser does not support the video tag. I suggest you upgrade your browser.

    .overlay.flex.flex-col
        h2.text-6xl(class="w-2/5") Join us on our Journey...
        h2.text-3xl(class="w-2/5") Like fashion and art - sneaker design is never finished.
        button(class="w-[15rem] h-[3.5rem] bg-[#ffffff] text-[#000000]  mt-4")  Learn more
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

.overlay {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.overlay h2,
button {
  font-weight: 600;
  margin: 2rem 3rem 0;
  mix-blend-mode: hard-light;
  padding: 5px 15px;
  text-align: center;
}
</style>
