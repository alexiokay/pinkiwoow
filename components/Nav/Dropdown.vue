<template lang="pug">
div(class=" w-full h-[23rem] text-[#434447] bg-[#ffffff]  shadow-lg flex flex-row justify-between items-between space-y-5 mt-[1rem] px-4 ")
    div(class="flex flex-col w-full mt-5 space-y-3 items-center")
        p(class="font-semibold")  {{$t('components.navbar.products.textiles.title').toUpperCase()}}
        hr(class="w-3/4")
        NuxtLink(class="hover:cursor-pointer " to="/") {{$t('components.navbar.products.textiles.wallets')}}
        p(class="hover:cursor-pointer") {{$t('components.navbar.products.textiles.face_masks')}}
        p(class="hover:cursor-pointer") {{$t('components.navbar.products.textiles.backpacks')}}
        p(class="hover:cursor-pointer") {{$t('components.navbar.products.textiles.tshirts')}}
        p(class="hover:cursor-pointer") {{$t('components.navbar.products.textiles.pillows')}}

        
    div(class="flex flex-col w-full space-y-3 items-center")
        p(class="font-semibold") {{$t('components.navbar.products.accessories.title')}}
        hr(class="w-3/4")
        p(class="hover:cursor-pointer") {{$t('components.navbar.products.accessories.puzzle')}}
        p(class="hover:cursor-pointer") {{$t('components.navbar.products.accessories.pins')}}
        
    div(class="flex flex-col w-full space-y-3 items-center")
        p(class="font-semibold") {{$t('components.navbar.products.ceramics.title')}}
        hr(class="w-3/4")
        NuxtLink(to="/products/mugs/1" class="hover:cursor-pointer" )  {{$t('components.navbar.products.ceramics.mugs')}}
    div(class="flex flex-col w-full space-y-3 items-center")
        p lighters
        p beer openers
        p Notes
    div(class="flex flex-col w-full space-y-3 items-center")
        p(class="font-semibold") {{$t('components.navbar.products.it.title')}}
        hr(class="w-3/4")
        p(class="hover:cursor-pointer") {{$t('components.navbar.products.it.phone_hardcase')}}
        p(class="hover:cursor-pointer") {{$t('components.navbar.products.it.phone_rubber_case')}}
        NuxtLink(to="/products/mouse-pads/1" class="hover:cursor-pointer") {{$t('components.navbar.products.it.mouse_pads')}}
    div.w-full.bg-black.absolute.bottom-0.left-0(class="h-[0.1rem]")
</template>

<script setup lang="ts"></script>

<style lang="sass"></style>
