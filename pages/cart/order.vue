<template lang="pug">
div(class="flex flex-col w-full items-center justify-center h-auto mt-20 px-8 lg:px-16 xl:px-24")
    CartProcess(:steps="['Koszyk', 'Dostawa i płatność', 'Podsumowanie', 'Gotowe']" :currentStep='currentStep')
    div(class="flex flex-col w-full items-center md:items-start  justify-center gap-y-4 md:gap-y-0 md:flex-row  gap-x-[3rem] lg:gap-x-[10rem] ") <!-- right panel -->
        div(class="flex flex-col w-full md:w-4/6 h-auto ")
            h1 Dostawa i płatność
            p Dostawa
            div(class="full h-[15.3rem] border-[1px] border-gray-800 rounded-xl px-6 py-2 space-y-4 z-20 bg-white")
                div(class="flex w-full h-auto justify-between items-center")
                    div(@click="checkBox($event)" class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                        input.checkbox-round(type="checkbox" class="w-3 h-3")
                    p(class="text-lg font-semibold ") Paczkomaty 24/7 - 13,00 zł
                    ShippingIcon(class="w-7 h-auto")
                div(class="flex w-full h-auto justify-start items-start px-8 gap-x-4 ")
                    div(class="w-[10rem] text-center text-sm space-y-2 hover:cursor-pointer")
                        div(class="w-full h-[8rem] border-[1px] border-black  text-sm py-3 rounded-lg  flex flex-col px-4 items-center justify-around")
                            ShippingIcon(class="w-8 h-auto")
                            p Dostawa Standardowa
                        p Zamówienie dostaniesz: wtorek, 31.01    
                    div(class="w-[10rem] text-center text-sm space-y-2 hover:cursor-pointer")
                        div(class="w-full h-[8rem] border-[1px] border-black  text-sm py-3 rounded-lg  flex flex-col px-4 items-center justify-around")
                            ShippingIcon(class="w-8 h-auto")
                            p Zamówienie na dzisiaj
                        
            div(class="flex flex-col h-auto rounded-b-lg w-full border-[0.7px] pt-4 px-6 border-slate-200 -mt-4 z-10")  
                div(@click="checkBox($event)" class='w-full flex h-[3rem] relative py-2  justify-start space-x-4 items-center hover:cursor-pointer')
                    div( class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center ")
                        input.checkbox-round(type="checkbox" class="w-3 h-3")
                    div(class="flex flex-col w-auto")
                        p Odbiór w punkcie (zobacz mape) >
                        p 
                    WarehouseIcon(class="w-8 h-auto absolute right-0")
                hr(class="w-[calc(100% + 4rem)] border-[0.7px] -mx-6 border-slate-200")
                div(@click="checkBox($event)" class='w-full flex h-[3rem] relative py-2  justify-start space-x-4 items-center hover:cursor-pointer')
                    div( class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center ")
                        input.checkbox-round(type="checkbox" class="w-3 h-3")
                    div(class="flex flex-col w-auto")
                        p Paczkomaty
                        p 
                    WarehouseIcon(class="w-8 h-auto absolute right-0")
               
            div(class="flex flex-col h-auto w-full mt-8 space-y-3")
                p(class="text-xl font-semibold") Kupujesz jako
                div(class="w-full h-auto flex justify-between gap-x-2")
                    div(class="h-[4rem] w-1/2 border-[1px] rounded-lg border-black flex space-x-2 p-4 items-center ")
                        div(@click="checkBox($event)" class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                            input.checkbox-round(type="checkbox" class="w-3 h-3")
                        p Osoba prywatna
                    div(class="h-[4rem] w-1/2 border-[1px] rounded-lg border-black flex space-x-2 p-4 items-center ")
                        div(@click="checkBox($event)" class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                            input.checkbox-round(type="checkbox" class="w-3 h-3")
                        p Firma
                    
            div(class="flex flex-col  h-auto w-full mt-8 space-y-4")
                p(class="text-xl font-semibold") Adres dostawy
                div(class="h-auto flex text-start space-y-1 text-sm  flex-col  p-4  mt-4 w-1/2 border-[1px] rounded-lg border-black justify-between ")
                    div(class="flex justify-between")
                       p Name Surname
                       a(class="text-sm text-blue-600") Zmień
                    p.order-street Helbeek 251
                    p.order-city 5914 SB Venlo
                    p.order-phone +48 123 456 789
                    p.order-email example@example.com
                   
            div(class="flex flex-col  h-auto w-full mt-8 space-y-4")
                p(class="text-xl font-semibold") Dane do faktury

            div(class="flex flex-col  h-auto w-full mt-8 space-y-4 bg-white z-20")
                p(class="text-xl font-semibold") Płatność
                div(class="h-auto w-full border-[1px] rounded-lg p-4 space-y-2 border-black flex flex-col")
                    div(class="h-auto relative  flex space-x-2 items-center justify-start")
                        div(@click="checkBox($event)" class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                            input.checkbox-round(type="checkbox" class="w-3 h-3")
                        p Płatność online (bezpłatnie)
                        p(class="absolute right-0") dotpay
                    p(class="ml-7 text-sm") Zapłać szybkim przelewem lub skorzystaj z płatności odroczonej PayPo.
            div(class="flex flex-col h-auto rounded-b-lg w-full border-[0.7px] pt-4 px-6 border-slate-200 -mt-4 z-10")  
                div(@click="checkBox($event)" class='w-full flex h-[3rem] relative py-2  justify-start space-x-4 items-center hover:cursor-pointer')
                    div( class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center ")
                        input.checkbox-round(type="checkbox" class="w-3 h-3")
                    div(class="flex flex-col w-auto")
                        p Odbiór w punkcie (zobacz mape) >
                        p 
                    WarehouseIcon(class="w-8 h-auto absolute right-0")
                hr(class="w-[calc(100% + 4rem)] border-[0.7px] -mx-6 border-slate-200")
                div(@click="checkBox($event)" class='w-full flex h-[3rem] relative py-2  justify-start space-x-4 items-center hover:cursor-pointer')
                    div( class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center ")
                        input.checkbox-round(type="checkbox" class="w-3 h-3")
                    div(class="flex flex-col w-auto")
                        p Paczkomaty
                        p 
                    WarehouseIcon(class="w-8 h-auto absolute right-0")
               
            div(class="flex flex-col  h-auto w-2/4 mt-8 space-y-4 bg-white z-20")
                p(class="text-xl font-semibold") Dodatkowe Informacje
                div(class="flex w-full")
                    div(class="w-[2rem]")
                        p(class="text-sm") info
                    div(class="w-full")
                        p Komentarz do zamówienia
                textarea(class="w-full h-[10rem] border-[1px] rounded-lg border-black p-4")
                   
                    


            div(class="h-auto w-full mt-8 flex flex-col")
                p Zgody formalne



        div(class="flex md:sticky md:max-h-[80vh] top-[8rem] flex-col w-full sm:w-5/6 md:w-2/6 h-auto order-1 border-[1px] border-slate-200 rounded-xl")
            div(class="p-4 max-h-[13rem] min-h-[13rem] overflow-y-auto border-b-[1px] border-slate-200")
                div(class="flex  gap-x-4 h-auto")
                    nuxt-img(src="/images/pinkiwoowLogo.webp" class="w-2/6 lg:w-1/5 h-auto aspect-square")
                    div(class="flex flex-col w-4/5")
                        p(class="h-auto") dsadasg asgsasag asg agsagasga s
                        div(class="flex justify-between")
                            p 2 szt.
                            p 4 799,00 zł
                hr(class="w-full border-[1px] border-slate-200 mt-1 mb-1")
                div(class="flex  gap-x-4 h-auto")
                    nuxt-img(src="/images/pinkiwoowLogo.webp" class="w-1/5 h-auto")
                    div(class="flex flex-col w-4/5")
                        p(class="h-auto") dsadasg asgsasag asg agsagasga s
                        div(class="flex justify-between")
                            p 2 szt.
                            p 4 799,00 zł
                hr(class="w-full border-[1px] border-slate-200 mt-1 mb-1")
                div(class="flex  gap-x-4 h-auto")
                    nuxt-img(src="/images/pinkiwoowLogo.webp" class="w-1/5 h-auto")
                    div(class="flex flex-col w-4/5")
                        p(class="h-2/3") dsadasg asgsasag asg agsagasga s
                        div(class="flex justify-between")
                            p 2 szt.
                            p 4 799,00 zł      
            div(class="flex flex-col p-4 h-auto w-full border-b-[1px] border-slate-200 space-y-4 bg-white z-20")
                div(class="flex  gap-x-4 items-center")
                    ShippingIcon(class="w-6 h-6 text-gray-600")
                    div(class="flex flex-col w-4/5")
                        p(class="h-2/3 text-sm") Sposob dostawy
                        p Kurier – InPost, UPS, FedEx, DTS, PickPack  
                div(class="flex gap-x-4 items-center")
                    ShippingIcon(class="w-6 h-6 text-gray-600")
                    div(class="flex flex-col w-4/5")
                        p(class="h-2/3 text-sm") Zamowienie dostaniesz:
                        p wtorek, 31.01
            
            div(class="flex justify-between h-16 p-4 items-center text-sm")
                p Kod Promocyjny
                input(class="w-[calc(100% - 4rem)] h-9 rounded-full border-[1px] border-slate-300 p-2")
            div(class="flex py-3 px-4 text-sm flex-col h-full justify-center items-start gap-y-2 bg-slate-100 rounded-xl")
                div(class="flex  justify-between  items-center w-full")
                    p(class="") Wartosc koszyka
                    p(class="") {{cartStore.getCartTotal}} {{productsStore.getCurrency}}
                div(class="flex  justify-between  items-center w-full")
                    p(class="") Dostawa
                    p(class="") {{}} zł
                div(class="flex  justify-between  items-center w-full")
                    
                    p(class="") Płatnosc
                    p(class="") {{}} zł
                hr(class="w-[calc(100% + 4rem)] border-[0.7px] -mx-6 border-slate-200")
                
              
                div(class="flex  justify-between text-sm font-semibold items-center w-full")
                    
                    p(class="") Do zapłaty
                    p(class="") {{totalPrice}} zł
                NuxtLink(to="/cart/summary" class="w-full m-auto mt-1 h-11 items-center justify-center flex text-white hover:cursor-pointer text-sm bg-[#119E00] rounded-full") Przejdź do płatności
               


  
</template>

<script setup lang="ts">
import { useProductsStore } from "@/stores/Products";
import { useCartStore } from "@/stores/Cart";
import FastShippingIcon from "~icons/la/shipping-fast";
import ShippingIcon from "~icons/material-symbols/local-shipping-outline-rounded";
import WarehouseIcon from "~icons/la/warehouse";
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
