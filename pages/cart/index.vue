<template lang="pug">
div(class="flex flex-col w:full sm:w-full xl:w-[1440px] h-auto items-center px-8 lg:px-16 xl:px-24 justify-center")
    
    h1(class="mt-3  font-robotoLight self-start h-full ml-8 text-xl") KOSZYK ({{cart.length}})
    div(class="flex flex-col w-full items-start justify-center gap-y-4 md:gap-y-0 md:flex-row  gap-x-[3rem] lg:gap-x-[10rem] ") <!-- right panel -->
        div(class="flex md:sticky top-[8rem] flex-col w-full sm:w-5/6 md:w-2/6 h-[12rem] order-1 border-[1px] border-slate-300 rounded-xl")
            div(class="flex justify-between h-16 p-2 items-center")
                p Masz kod promocyjny?
                button(class="") .
            div(class="flex flex-col h-full justify-center items-center gap-y-2 bg-slate-100 rounded-t-lg")
                div(class="flex justify-between text-lg font-semibold items-center w-full")
                    p(class="ml-4") Wartość zamówienia
                    p(class="mr-4") {{cartStore.getCartTotal}} {{productsStore.getCurrency}}
                NuxtLink(to="cart/order" class="w-[90%] h-11 items-center justify-center flex text-white hover:cursor-pointer text-sm bg-[#119E00] rounded-lg") Przejdź do dostawy
                button(class="w-[90%] h-9  rounded-lg text-sm border-[1px] border-slate-300 ") Oblicz ratę lub leasing
        div(class="flex flex-col w-full md:w-4/6 h-auto order-0")
            
            div(class="hidden md:flex flex-row w-full h-auto  justify-center  font-roboto  ") <!-- cart items -->
                div(class="flex flex-col w-[30%] md:w-[20%] lg:w-[11%] h-auto")
                    p PRODUCT
                div(class="flex flex-col w-[25%] md:w-[35%]  lg:w-[41%]  h-auto")
                    input(type="checkbox" class="w-4 h-4 ml-2")
                div(class="flex flex-col  w-[19%] md:w-[15%] h-auto")
                    p(class="mr-2") PRICE
                div(class="flex flex-col justify-center items-center w-[8.8rem] h-auto")
                    p COUNT
                div(class="flex flex-col justify-center items-end w-[15%] h-auto")
                    p VALUE
            hr(class=" w-full border-[0.8px] mt-4 mb-4 hidden md:flex ")
            div#cart-process(class  ="flex md:hidden w-full h-10 bg-slate-50  ")
            div(v-for="item in cart" :key='item.title' class="flex md:flex-row w-full h-auto mt-4 justify-center space-x-2 ")
                img(class="w-1/4 h-auto aspect-square md:hidden" :src="item.image" )
                div(class="flex w-full h-auto flex-col justify-between md:hidden")
                    div(class="w-full space-x-4 flex")
                        
                        p(class="w-[80%]") {{ item.title }}
                        <!-- options button -->
                        div(class="w-[20%] relative flex flex-col justify-center items-end")
                            button.cart-item-options(@click="item.select = !item.select" :class="{'bg-slate-100': item.select}" class=" w-8 h-8 hover:bg-slate-100 rounded-full items-center flex justify-center  ")
                                OptionsIcon.cart-item-options(class="w-5 h-5 text-slate-700 pointer-events-none" )
                            div.cart-item-options( v-if="item.select == true" class=" z-20 absolute text-[slate-800] font-light flex   flex-col items-center  top-[2rem]  bg-white w-[11rem] py-2 h-auto shadow-[0px_0px_5px_1px_rgb(0,0,0,0.15)]  rounded-lg ")
                                .flex.cart-item-options(class="w-full space-x-4 h-[3.4rem] items-center justify-center mr-2 hover:cursor-pointer hover:bg-slate-50") 
                                    IconHeart(class="w-6 h-6 pointer-events-none" )
                                    p.cart-item-options Zapisz na liscie
                                .flex.cart-item-options(@click="cartStore.removeFromCart(item.id)" class="w-full space-x-4 h-[3.4rem] items-center justify-center  hover:cursor-pointer hover:bg-slate-50")  
                                    IconTrash(class="w-6 h-6 pointer-events-none" )
                                    p.cart-item-options Usuń z ksoszyka
                                
                                
                    <!-- count dropdown and price -->
                    div(class=" w-full flex flex-row justify-between items-center mt-2")
                        
                        input(v-if="item.quantity>9" type="number" class="w-[3.5rem] h-[2rem] border-[1px] border-[#a6a6a6] focus:drop-shadow-lg rounded-full text-center" :value="item.quantity" min="1" @change="item.quantity = $event.target.value")
                        select(v-if="item.quantity<=9" type="number" class="w-[3.5rem] h-[2rem] border-[1px] border-[#a6a6a6] focus:drop-shadow-lg rounded-full text-center" :value="item.quantity" min="1" @change="item.quantity = $event.target.value")
                            option(v-for="i in 9" :key="i" :value="i") {{i}}  
                            option(value="10") 9+
                        p {{item.price_pln * item.quantity}} {{productsStore.getCurrency}}

                div(class="hidden md:flex flex-col w-full md:w-[20%] lg:w-[15%] h-auto")
                    nuxt-img(class="w-full h-auto" :src="item.image" )
                div(class="hidden md:flex flex-col w-[25%] md:w-[35%]  lg:w-[36%]  h-auto")
                    input(@change="selectItem(item.id) " type="checkbox" class="w-4 h-4 ml-2")
                div(class="hidden md:flex flex-col w-[15%] h-auto ")
                    p(v-if="productsStore.getCurrency === 'EUR'") {{item.price_eur.toFixed(2)}} {{productsStore.getCurrency}}
                    p(v-if="productsStore.getCurrency === 'PLN'") {{item.price_pln.toFixed(2)}} {{productsStore.getCurrency}}
                div(class="hidden md:flex flex-row  justify-center items-start w-aut w-[8.8rem]   h-auto gap-x-2")
                    input(type="number" class="w-[3.5rem] h-[2rem] border-[1px] focus:drop-shadow-lg text-center" :value="item.quantity" min="1" @change="item.quantity = $event.target.value")
                    div( @mousedown="increaseQuantity(item.id)" v-on:mouseup="stopHolding()"  @mouseleave="stopHolding()" class="w-[2rem] h-[2rem] bg-[#434447] select-none hover:cursor-pointer flex flex-col justify-center items-center text-2xl text-white")
                        p.text-center.mb-1 +
                    div(@mousedown="decreaseQuantity(item.id)" v-on:mouseup="stopHolding()"  @mouseleave="stopHolding()" class="select-none w-[2rem] h-[2rem] bg-[#434447] hover:cursor-pointer flex flex-col justify-center items-centertext-2xl text-white")
                        p.text-center.mb-1 -
                div(class="hidden md:flex flex-col w-[15%] justify-start items-end h-auto")
                    p(class="w-[3rem] md:w-[4rem] lg:w-[5rem] flex items-center justify-center") {{(item.price_eur * item.quantity).toFixed(2) }} {{productsStore.getCurrency}}



    hr(class=" w-full border-[0.8px] mt-8 mb-4 ")
    button(@click="removeSelected()" class="hidden md:flex w-[10rem] h-[2rem] bg-[#b4b4b4] text-white  hover:cursor-pointer items-center justify-center") DELETE SELECTED
</template>

<script setup lang="ts" scoped>
import OptionsIcon from "~icons/ic/outline-more-vert";
import IconHeart from "~icons/ph/heart";
import IconTrash from "~icons/ph/trash";
import { useCartStore } from "@/stores/Cart";
import type { Ref } from "vue";
import { useProductsStore } from "@/stores/Products";
let cartStore: any = ref(useCartStore());
let cart = ref(computed(() => useCartStore().getCart));
const productsStore = useProductsStore();
cartStore.value = useCartStore();
const currentStep = ref(0);

onMounted(() => {
  document.addEventListener("click", (event: any) => {
    cartStore.value = useCartStore();
    const route = useRoute();
    if (route.path == "/cart") {
      console.log(event.target);
      if (
        event.target.classList.contains(
          "cart-item-options" || event.target.closest(".cart-item-options")
        )
      ) {
        return;
      } else {
        for (let item of cart.value) {
          item.select = false;
        }
      }
    }
  });
});

console.log(cart.value);

let interval: any = null;
let downTimer: any = null;
const increaseQuantity = (itemId: any) => {
  cartStore.value.increaseItemQuantity(itemId);
  setTimeout(() => {
    interval = setInterval(() => {
      cartStore.value.increaseItemQuantity(itemId);
    }, 210);
  }, 100);
};

const selectedItems: Ref<any> = ref([]);

const selectItem = (item: any) => {
  if (selectedItems.value.includes(item)) {
    selectedItems.value = selectedItems.value.filter(
      (selectedItem: any) => selectedItem !== item
    );
  } else {
    selectedItems.value.push(item);
  }
  console.log(selectedItems.value);
};
const decreaseQuantity = (itemId: any) => {
  cartStore.value.decreaseItemQuantity(itemId);
  setTimeout(() => {
    interval = setInterval(() => {
      cartStore.value.decreaseItemQuantity(itemId);
    }, 210);
  }, 100);
};

const stopHolding = () => {
  console.log("stop holding");
  setTimeout(() => {
    clearInterval(interval);
    interval = null;
  }, 150);
};

const removeSelected = () => {
  selectedItems.value.forEach((item: any) => {
    cartStore.value.removeFromCart(item);
  });
  selectedItems.value = [];
};
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

<style lang="sass">


.checkbox-round
    background-color: white
    border-radius: 50%
    vertical-align: middle
    appearance: none
    -webkit-appearance: none
    outline: none
    cursor: pointer
    pointer-events: none

.checkbox-round:checked
    background-color: gray
</style>
