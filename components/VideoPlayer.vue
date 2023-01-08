<template lang="pug">
video-player(src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    poster="/images/video-placeholder.jpg"
    controls
    :loop="true"
    :volume="0.6"

    @mounted=""
    @ready=""
    @play=""
    @pause=""
    @ended=""
    @seeking=""
    class="w-full flex items-center")
    
</template>

<script setup lang="ts">
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
</script>

<style lang="sass">
.video-js .vjs-big-play-button
    position: relative
    top: 44%
    margin: 0 auto

.vjs-poster
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    background-color: black
</style>
