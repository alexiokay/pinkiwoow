<template lang="pug">
div.sticky-panel
    header

    main
    aside.h-96
        .w-full.h-12.bg-black(class="sticky top-[15%] z-50 ")
    footer

</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.sticky-panel
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    width: 100%
    gap: 20px
    height: 4000px

    > *
        width: 100%
        border: 1px solid #ccc
        border-radius: 8px
        background: white



aside

    width: 100%
    gap: 20px
    padding: 1rem
    height: 4000px


.content
    display: flex
    flex-direction: row
    width: 100%
    gap: 20px
    padding: 1rem
    height: 4000px
    > *

        border: 1px solid #ccc
        border-radius: 8px
        background: white
header,
footer
    height:150px
</style>
