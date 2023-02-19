<template lang="pug">
NuxtLayout(name="secondary")
 
    div(class="flex flex-col w-full h-auto items-center  px-2 md:px-0 justify-center")
        div(class="flex flex-col w-[25rem]  text-center h-auto gap-y-4 mt-12 items-center justify-center")
            IconSuccesfullyOrdered(class="w-[6rem] md:w-[9rem] h-[6rem] md:h-[9rem] text-blue-500")
            div(class="flex flex-col items-center text-lg md:text-3xl")
                h2 Thank You!
                h1(v-if="order.order_id") Your Order succesfully
                    p been placed.
                h1(v-else) Something get wrong
                    
            p(class="text-sm text-gray-400") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nunc, eget aliquam nisl nisl eu lectus. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nunc, eget aliquam nisl nisl eu lectus.
            button(class="bg-orange-500 w-[20rem] rounded-full py-2 px-4 text-white") View Order Status
       
        div#more-products(class="w-full md:w-3/5 h-auto mt-8  flex flex-col items-center justify-center gap-y-6")
            p(class="font-bold w-full text-end text-sm -mb-4") Order {{order.order_id}}
            div.product-card(class="w-full h-[9rem] p-4 flex items-center justify-center space-x-4 border-2 border-gray-200")
                ExampleImg(class="w-auto object-cover md:h-[7rem] h-[6rem] aspect-square")
                div(class="flex flex-col items-start justify-start w-4/6 h-full")
                    p(class="font-bold") Product Name
                    p(class="text-sm text-gray-400") Perfuct product bla bla bla
                p(class="font-bold w-1/6 text-end h-full") $99.99
            div.product-card(class="w-full h-[9rem] p-4 flex items-center justify-center space-x-4 border-2 border-gray-200")
                ExampleImg(class="w-auto object-cover md:h-[7rem] h-[6rem] aspect-square")
                div(class="flex flex-col items-start justify-start w-4/6 h-full")
                    p(class="font-bold") Product Name
                    p(class="text-sm text-gray-400") Perfuct product bla bla bla
                p(class="font-bold w-1/6 text-end h-full") $99.99
        div#order-summary(class="flex flex-col text-gray-700  w-full md:w-3/5 mt-8 gap-y-2")
         
            p(class="font-bold text-lg ") Order Summary
            div(class="flex w-full justify-between items-center")
                p(class="text-sm font-semibold ") Sub Total
                p(class="text-sm ") $99.99
           
            hr(class="border-gray-200")
            div(class="flex w-full justify-between items-center")
                p(class="text-sm font-semibold") Tax
                p(class="text-sm ") $99.99
  
            hr(class="border-gray-200")
            div(class="flex w-full justify-between  items-center")
                p(class="text-sm font-semibold ") Shipping
                p(class="text-sm ") $99.99
        
            hr(class="border-gray-200")
            div#total( class="flex w-full justify-end space-x-10 items-center")
                p(class="text font-bold") Total
                p(class="text font-bold") $99.99
        div#shipping-info(class="bg-slate-50 h-auto w-[25rem] mt-8 rounded-lg p-6 flex flex-col items-center justify-center")
            p(class="text-lg  font-bold mb-3") Your order is being shipped
            p(class="text-sm text-gray-600 ") 1234, 7th Street Name, Red light
            p(class="text-sm text-gray-600") Tower, New York, NY 10001

        div#might-like(class="w-full md:w-3/5 h-auto mt-[5rem] flex flex-col items-center justify-center gap-y-6")
            div(class="flex gap-x-2 w-full items-center justify-center ")
                hr(class="border-gray-200 border-[1px] w-full ")
                p(class="w-full text-center text-base font-bold") You might like these
                hr(class="border-gray-200 border-[1px] w-full ")
            div(class="flex w-full h-auto justify-between items-center")
                ExampleImg(class="w-auto object-cover md:h-[14rem] h-[8rem] aspect-square rounded-lg")
                ExampleImg(class="w-auto object-cover md:h-[14rem] h-[8rem] aspect-square rounded-lg")
                ExampleImg(class="w-auto object-cover md:h-[14rem] h-[8rem] aspect-square rounded-lg")
                
        div#has-question(class="flex flex-col mt-12")
            p(class="text-lg font-bold mb-4") Do you have any questions about order?

            div(class="flex flex-col items-center justify-center gap-y-2")
                p Call our customer care number 123456789
                p Monday - Friday 9:00 AM - 5:00 PM
                p email us example@example.com
               
</template>

<script setup lang="ts">
import IconSuccesfullyOrdered from "~icons/lucide/package-check";
import { useCartStore } from "@/stores/Cart";

const cartStore = useCartStore();
const order = ref(cartStore.getTempOrder);
const route = useRoute();
</script>

<style lang="sass"></style>
