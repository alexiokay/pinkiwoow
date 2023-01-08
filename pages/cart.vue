<template lang="pug">
div(class="flex flex-col w-full h-auto")
    div(class="flex flex-row w-full h-auto mt-4")
        div(class="flex flex-col w-[30%] md:w-[20%] lg:w-[15%] h-auto")
            p PRODUCT
        div(class="flex flex-col w-[25%] md:w-[35%]  lg:w-[40%]  h-auto")
            input(type="checkbox" class="w-4 h-4")
        div(class="flex flex-col w-[15%] h-auto")
            p PRICE
        div(class="flex flex-col justify-center items-center w-[8.8rem] h-auto")
            p COUNT
        div(class="flex flex-col justify-center items-end w-[15%] h-auto")
            p VALUE
    hr(class=" w-full border-[0.8px] mt-4 mb-4 ")
    div(v-for="item in cart" :key='item.title' class="flex flex-row w-full h-auto mt-4")
        div(class="flex flex-col w-[30%] md:w-[20%] lg:w-[15%] h-auto")
            img(class="w-full h-auto" :src="item.image" )
        div(class="flex flex-col w-[25%] md:w-[35%]  lg:w-[40%]  h-auto")
            input(@change="selectItem(item.id) " type="checkbox" class="w-4 h-4")
        div(class="flex flex-col w-[15%] h-auto")
            p {{item.price}} zł
        div(class="flex flex-row  justify-center items-start w-aut   h-auto gap-x-2")
            input(type="number" class="w-[3rem] h-[2rem] border-[1px] focus:drop-shadow-lg text-center" :value="item.quantity" min="1" @change="item.quantity = $event.target.value")
            div(@click="cartStore.increaseItemQuantity(item.id)" @mousedown="increaseQuantity(item.id)" @mouseup="stopHolding()"  @mouseleave="stopHolding()" class="w-[2rem] h-[2rem] bg-[#434447] select-none hover:cursor-pointer flex flex-col justify-center items-center text-2xl text-white")
                p.text-center.mb-1 +
            div(@click="item.quantity >= 2?   item.quantity-- : item.quantity"  v-on:mousedown="decreaseQuantity(item)" v-on:mouseup="stopHolding()"  @mouseleave="stopHolding()" class="select-none w-[2rem] h-[2rem] bg-[#434447] hover:cursor-pointer flex flex-col justify-center items-centertext-2xl text-white")
                p.text-center.mb-1 -
        div(class="flex flex-col w-[15%] justify-start items-end h-auto")
            p {{item.price * item.quantity}} zł
    hr(class=" w-full border-[0.8px] mt-8 mb-4 ")
    button(@click="removeSelected()" class="w-[10rem] h-[2rem] bg-[#b4b4b4] text-white  hover:cursor-pointer") DELETE SELECTED
    hr(class=" w-full border-[0.8px] mt-4 mb-8 ")
    div(class="flex flex-col w-full h-auto")
    div(class="flex flex-col space-y-2 w-full")
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
    div#cart-payment-method(class="flex flex-col space-y-2 w-full")
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
    div(class="flex flex-row justify-start space-x-4 items-center")
        div(class="flex flex-col text-sm mt-4")
            p Jeżeli posiadasz kupon rabatowy wprowadź kod:
            div(class="flex flex-row space-x-4 text-[#6f6e6e]")
                p przypomnij kod
                p jak uzyskac kupon
        input(type="text" class="w-[15rem] h-[2.3rem] border-[1px] border-[#b1b1b1] l focus:shadow-xl outline-none")
        button(class="w-[10rem] h-[2.3rem] bg-[#434447] text-white  hover:cursor-pointer") AKTYWUJ KOD
    hr(class=" w-full border-[0.8px] mt-8 mb-8 ")
    
    div(class="flex flex-col md:flex-row bg-[#F6F6F6] md:bg-white w-full space-between items-between")
        div(class="flex flex-col  w-3/4 justify-between items-between h-auto")
            h2(class="text-3xl") PODSUMOWANIE
            p(class="text-2xl") KONTYNUUJ ZAKUPY
        div(class="flex flex-col w-full md:w-[30rem] space-y-4 ")
            div.row.w-full.justify-between.items-center
                p RAZEM
                p(class="text-xl w-2/5") {{cartStore.getCartTotal}} zł
            div.row.w-full.justify-between.items-center
                p(class="text-xl") DO ZAPŁATY
                p(class="text-xl w-2/5") {{cartStore.getCartTotal}} zł
            div.row.w-full.justify-between.items-center
                p Czas realizacji [dni robocze]:
                p(class="text-xl w-2/5")  1
            div(class="flex flex-col")
                p(class="") Masz prawo do odstąpienia od umowy w terminie 14 dni.
                p Koszt zwrotu zamówienia ponosi kupujący. Regulamin

            button(class="w-[19rem] h-[3rem] mt-2 flex items-center justify-center ml-auto bg-[#667185] hover:bg-black text-white text-2xl smooth-color tracking-wide hover:cursor-pointer") PREJDZ DALEJ
</template>

<script setup lang="ts">
import { useCartStore } from "../stores/Cart";
import type { Ref } from "vue";

let cartStore: any = ref(useCartStore());
let cart = ref(computed(() => useCartStore().getCart));
onMounted(() => {
  if (process.client) {
    cartStore.value = useCartStore();
  }
});

console.log(cart.value);

let interval: any = null;

const increaseQuantity = (itemId: any) => {
  if (process.client)
    setTimeout(() => {
      interval = setInterval(() => {
        cartStore.value.increaseItemQuantity(itemId);
      }, 130);
    }, 300);
};

const getCart = (itemId: any) => {
  if (process.client) {
    return cartStore.value.getCart;
  }
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
const decreaseQuantity = (item: any) => {
  setTimeout(() => {
    interval = setInterval(() => {
      if (item.quantity >= 2) {
        item.quantity--;
      }
    }, 130);
  }, 300);
};

const stopHolding = () => {
  clearInterval(interval);
  interval = null;
};

const removeSelected = () => {
  if (process.client) {
    selectedItems.value.forEach((item: any) => {
      cartStore.value.removeFromCart(item);
    });
    selectedItems.value = [];
  }
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
