<template lang="pug">
#cart-dropdown(class="cart-dropdown-hidden w-80  h-auto absolute px-2 top-[3.2rem] right-0 z-50 bg-white border-2 border-gray-200  drop-shadow-lg flex flex-col justify-start items-center ")
    .triangle-left(class="rotate-90 absolute top-[-1rem] right-[-3.4rem]")
    div(class="w-full flex flex-col gap-y-4")
        CartDropdownItem(v-for="item in cartStore.getCart" :key="item.id" :item="item")
    hr(class="border-1 border-gray-200 w-full mt-6")
    div(class="w-full text-xs font-normal  flex flex-row justify-start items-center mb-2 mt-4")
        p(class="text-gray-600 ") SUMA {{cartStore.getCartTotal}}ZL
    NuxtLink(class="w-full h-12 bg-white border-gray-500 border-2 text-lg mb-4 flex items-center justify-center" to="/cart") Show Cart
</template>

<script setup lang="ts">
import { ref } from "vue";
import ArrowIcon from "~icons/ic/outline-play-arrow";
import { useCartStore } from "../../stores/Cart";

let cartStore: any = ref(useCartStore());

if (process.client) {
  cartStore.value = useCartStore();
}
</script>

<style lang="css">
.triangle-left {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid rgb(229 231 235);
  position: relative;
}

.triangle-left:after {
  content: "";
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid white;
  position: absolute;
  top: -10px;
  left: 1px;
}
</style>
