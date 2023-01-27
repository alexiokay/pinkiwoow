<template lang="pug">
div(class="flex flex-col w-full items-center justify-center h-auto mt-20 px-8 lg:px-16 xl:px-24")
    CartProcess(:steps="['Koszyk', 'Dostawa i płatność', 'Podsumowanie', 'Gotowe']" :currentStep='currentStep')
    div(class="flex flex-col w-full items-center md:items-start  justify-center gap-y-4 md:gap-y-0 md:flex-row  gap-x-12 ") <!-- right panel -->
        div(class="flex flex-col w-full md:w-4/6 h-auto ")
            h1 Dostawa i płatność
            p Dostawa
            div(class="full h-[14rem] border-[1px] border-gray-800 rounded-xl")


        div(class="flex flex-col w-full sm:w-5/6 md:w-2/6 h-[12rem] order-1 border-[1px] border-slate-200 rounded-xl")
            div(class="flex justify-between h-16 p-2 items-center")
                p Masz kod promocyjny?
                button(class="") .
            div(class="flex flex-col h-full justify-center items-center gap-y-2 bg-slate-100 rounded-t-lg")
                div(class="flex justify-between text-lg font-semibold items-center w-full")
                    p(class="ml-4") Wartość zamówienia
                    p(class="mr-4") {{totalPrice}} zł
                NuxtLink(to="cart/order" class="w-[90%] h-11 items-center justify-center flex text-white hover:cursor-pointer text-sm bg-[#119E00] rounded-lg") Przejdź do podsumowania
                button(class="w-[90%] h-9  rounded-lg text-sm border-[1px] border-slate-300 ") Oblicz ratę lub leasing




    hr(class=" hidden md:flex w-full border-[0.8px] mt-4 mb-8 ")
    div(class="flex flex-col w-full h-auto")
    div(class="flex flex-col space-y-2 w-full   ")
        h2(class="text-3xl mb-4") FORMA DOSTAWY
        div(class="flex flex-row justify-between intems-center")
            p Kraj dostawy Polska zmien >
            p 0,00 zł
        p Odbior w punkcie (zobacz mape) >
        div(class="flex flex-row justify-start items-center space-x-3")
            div(@click="checkBox($event)" class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                input.checkbox-round(type="checkbox" class="w-3 h-3")
            
            p Paczkomaty 24/7 - 13,00 zł
            p zobacz mape 
        p Pozostale:
        div(class="flex flex-row justify-start items-center space-x-3")
            div(@click="checkBox($event)" class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                input.checkbox-round(type="checkbox" class="w-3 h-3")
            p Wysylka kurierem - 15,00 zł
    hr(class=" w-full border-[0.8px] mt-16 mb-8 ")
    div#cart-payment-method(class="flex flex-col space-y-2 w-full  ")
        h2(class="text-3xl mb-4") FORMA Platnosci
        div(class="flex flex-row justify-start items-center space-x-3")
            div(@click="checkBox($event)"  class="w-5 h-5  rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                input.checkbox-round(type="checkbox" class="w-3 h-3")
            p PLATNOSC PRY ODBIORZE A POBRANIEM
        div(class="flex flex-row justify-start items-center space-x-3")
            div(@click="checkBox($event)" class="w-5 h-5  rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                input.checkbox-round(type="checkbox" class="w-3 h-3")
            p PLATNOSC KARTA
        div(class="flex flex-row justify-start items-center space-x-3")
            div(@click="checkBox($event)" class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                input.checkbox-round(type="checkbox" class="w-3 h-3")
            p SZYBKIE PLATNOSCI INTERNETOWE
        div(class="flex flex-row justify-start items-center space-x-3")
            div(@click="checkBox($event)" class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                input.checkbox-round(type="checkbox" class="w-3 h-3")
            p PLATNOSC GOOGLE PAY
        div(class="flex flex-row justify-start items-center space-x-3")
            div(@click="checkBox($event)" class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                input.checkbox-round(type="checkbox" class="w-3 h-3")
            p PREDPLATA NA KONTO ( zwykly przelew )
        

        div(class="flex flex-row justify-start items-center space-x-3")
            div(@click="checkBox($event)" class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                input.checkbox-round(type="checkbox" class="w-3 h-3 ")
                
            p Blik
    hr(class=" w-full border-[0.8px] mt-8 mb-8 ")
    h2(class="text-3xl") KOD RABATOWY
    div(class="flex flex-col sm:flex-row justify-start space-x-4 space-y-2 items-center  ")
        div(class="flex flex-col text-sm mt-4")
            p Jeżeli posiadasz kupon rabatowy wprowadź kod:
            div(class="flex flex-row space-x-4 text-[#6f6e6e]")
                p przypomnij kod
                p jak uzyskac kupon
        input(type="text" class="w-[15rem] h-[2.3rem] border-[1px] border-[#b1b1b1] l focus:shadow-xl outline-none")
        button(class="w-[10rem] h-[2.3rem] bg-[#434447] text-white  hover:cursor-pointer") AKTYWUJ KOD
    hr(class=" w-full border-[0.8px] mt-8 mb-8 ")
    
    div(class="flex flex-col md:flex-row bg-[#F6F6F6] md:bg-white w-full space-between items-between  px-8 md:px-12")
        div(class="flex flex-col  w-3/4 justify-between items-between h-auto")
            h2(class="text-3xl") PODSUMOWANIE
            p(class="text-2xl") KONTYNUUJ ZAKUPY
        div(class="flex flex-col w-full md:w-[30rem] space-y-4 ")
            div.row.w-full.justify-between.items-center
                p RAZEM
                p(class="text-xl w-2/5") {{cartStore.getCartTotal}} {{productsStore.getCurrency}}
            div.row.w-full.justify-between.items-center
                p(class="text-xl") DO ZAPŁATY
                p(class="text-xl w-2/5") {{cartStore.getCartTotal}} {{productsStore.getCurrency}}
            div.row.w-full.justify-between.items-center
                p Czas realizacji [dni robocze]:
                p(class="text-xl w-2/5")  1
            div(class="flex flex-col")
                p(class="") Masz prawo do odstąpienia od umowy w terminie 14 dni.
                p Koszt zwrotu zamówienia ponosi kupujący. Regulamin

            button(class="w-[19rem] h-[3rem] mt-2 flex items-center justify-center ml-auto bg-[#667185] hover:bg-black text-white text-2xl smooth-color tracking-wide hover:cursor-pointer") PREJDZ DALEJ
</template>

<script setup lang="ts">
import { useProductsStore } from "@/stores/Products";
import { useCartStore } from "@/stores/Cart";
let cartStore: any = useCartStore();
let cart = ref(computed(() => useCartStore().getCart));
const productsStore: any = useProductsStore();
const currentStep = ref(1);
const checkBox = (el: any) => {
  const AimingCheckbox = el.target.querySelector("input") as HTMLInputElement;

  const paymentMethodDiv = document.querySelector(
    "#cart-payment-method"
  ) as HTMLDivElement;

  const checkboxes = paymentMethodDiv.querySelectorAll("input");

  checkboxes.forEach((checkbox: HTMLInputElement) => {
    checkbox.disabled = true;
    if (checkbox.checked === true) {
      checkbox.checked = false;
      AimingCheckbox.checked = true;
    } else AimingCheckbox.checked = true;
  });
};
</script>

<style lang="sass"></style>
