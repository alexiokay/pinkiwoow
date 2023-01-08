<template lang="pug">
div(class=" w-full h-full bg-transparent flex flex-col mt-4 px-4 ")
  div(class=" w-full text-4xl space-x-1  flex items-end justify-start tracking-wider text-black  font-normal ")
    h1 {{route.name?.toString().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}}
    p(class="text-sm") 3 produkty
  hr(class="border-[0.1px] border-gray-200  w-full mt-10 mb-5")

  div(class="w-full h-screen flex flex-col items-center justify-center")
    div(class="w-full h-full flex flex-row  justify-between")
      AlbumItem(title="StrawTote" :price="7" :stripePriceId="config.stripePrices.strawtote" img="/images/products/strawtote2.png"  img2="https://picsum.photos/222/330" :bestseller="true" :new="true")
      AlbumItem(title="StrawBox" :price="0.5" :stripePriceId="config.stripePrices.strawbox" img="/images/products/strawbox.png")
      AlbumItem(title="StrawShop" :price="250" :stripePriceId="config.stripePrices.strawshop" img="/images/products/strawShop.png")
      AlbumItem(title="StrawStore" :price="300" :stripePriceId="config.stripePrices.strawstore" img="/images/products/strawWarehouse.png")




</template>

<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
</script>

<style lang="sass"></style>
