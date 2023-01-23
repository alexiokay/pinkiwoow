<template lang="pug">
#user-dropdown(class="  w-[calc(30vw+10em)]  px-5 space-y-4 h-screen   top-0   rounded-b-lg rounded-r-lg right-0  z-40 bg-white  shadow-[0px_0px_10px_-2px_rgb(0,0,0,0.15)]  flex-col justify-start items-center ")
    div.flex.justify-start.text-xl.space-x-3.items-center(:class="isUserMobileDropdown? '' : ' md:hidden '" class="flex  -mx-5  h-14 px-4 bg-[#F5F5F5] w-[calc(30vw+6em)]  border-b-[1px] border-gray-300 ")
        CloseIcon(@click="$emit('close')" class="hover:cursor-pointer h-5 w-5")
        p Menu
    div(class="flex flex-col justify-center items-center space-y-2 w-full")
        button#dropdown-login(class="w-full h-10 md:h-8 rounded-full hover:bg-blue-700 bg-blue-600 text-white text-sm  flex items-center justify-center") Login
        div(class="flex h-5 w-full justify-center items-center ")
            hr(class="w-3/5 h-[1.4px] bg-gray-200")
            p(class="w-full text-center") Nie masz konta?
            hr(class="w-3/5 h-[1.4px] bg-gray-200")
        button#dropdown-register(class="w-full h-10 md:h-8  rounded-full bg-white text-blue-600 border-[1px] border-blue-600 text-sm  flex items-center justify-center") Zarejestruj się
    hr(class="w-[17rem] h-0.3 bg-gray-200 -mx-[12px] my-4")
    div(class="flex w-[calc(30vw+10em)] -mx-[12px] md:w-[17rem] flex-col justify-center  items-center  ")
        button.flex(class="w-full text-slate-700 text-sm  space-x-3 h-[2.4rem] items-center justify-start px-5  hover:cursor-pointer hover:bg-slate-50") 
            UserIcon(class="w-6 h-6 pointer-events-none" )
            p Twoje konto
        button.flex(class="w-full text-slate-700 text-sm  space-x-3 h-[2.4rem] items-center justify-start px-5  hover:cursor-pointer hover:bg-slate-50")  
            OrderIcon(class="w-6 h-6 pointer-events-none" )
            p Zamówienia
        button.flex(class="w-full text-slate-700 text-sm  space-x-3 h-[2.4rem] items-center justify-start px-5  hover:cursor-pointer hover:bg-slate-50")  
            IconHeart(class="w-6 h-6 pointer-events-none" )
            p Listy zakupowe
        button.flex(class="w-full text-slate-700 text-sm  space-x-3 h-[2.4rem] items-center justify-start px-5  hover:cursor-pointer hover:bg-slate-50")  
            OpinionIcon(class="w-6 h-6 pointer-events-none" )
            p Opinie
        button.flex(class="w-full text-slate-700 text-sm  space-x-3 h-[2.4rem] items-center justify-start px-5  hover:cursor-pointer hover:bg-slate-50")  
            ShippingDataIcon(class="w-6 h-6 pointer-events-none" )
            p Dane do zamówień
        button.flex(class="w-full text-slate-700 text-sm  space-x-3 h-[2.4rem] items-center justify-start px-5  hover:cursor-pointer hover:bg-slate-50")  
            SettingsIcon(class="w-6 h-6 pointer-events-none" )
            p Ustawienia konta
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import IconHeart from "~icons/ph/heart";
import UserIcon from "~icons/heroicons/user-circle";
import OrderIcon from "~icons/icon-park-outline/transaction-order";
import OpinionIcon from "~icons/ic/outline-rate-review";
import ShippingDataIcon from "~icons/material-symbols/badge-outline-rounded";
import SettingsIcon from "~icons/mdi/settings-outline";
import CloseIcon from "~icons/ic/outline-close";

const isUserMobileDropdown = useState("isUserMobileDropdown");
</script>

<style lang="css"></style>
