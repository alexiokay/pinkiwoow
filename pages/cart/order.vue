<template lang="pug">
NuxtLayout(name="secondary")
  div(class="flex flex-col  w-full items-center justify-center h-auto mt-20 ")
    
      LazyModalShipping#shipping-modal(@setShipping="(_shipping) => {shipping = _shipping}" :isOpen="isModalShipping" @close="isModalShipping = false")
      div(class="flex flex-col w-full items-center md:items-start  justify-center gap-y-4 md:gap-y-0 md:flex-row  gap-x-[3rem] lg:gap-x-[10rem] ") <!-- right panel -->
          div(class="flex flex-col w-full md:w-4/6 h-auto ")
              h1(class="text-2xl font-montserrat w-full text-start md:text-center underline mb-4") Dostawa i płatność
              p(class="text-xl font-semibold mb-4")  Dostawa
            
                          
              div(class="flex flex-col h-auto  w-full border-[0.7px] rounded-xl  border-slate-200 z-10")  
                  div(@click=" shippingMethod != 'courier-inpost'? shippingMethod = 'courier-inpost': null" :class="shippingMethod === 'courier-inpost'? ' border-gray-800 border-[1px] rounded-xl h-[15.3rem] space-y-4': 'rounded-t-xl h-auto space-y-1 hover:cursor-pointer'" class="full     px-6 py-2  z-20 bg-white ")
                      div(@click="checkBox($event), shippingMethod = 'courier-inpost'" class="hover:cursor-pointer flex w-full relative space-x-3 selection:h-auto justify-start items-center")
                          div( class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                              input.checkbox-round(type="checkbox" checked class="w-3 h-3")
                          p(class="text-base font-semibold ") Kurier – InPost ( bezpłatnie )
                          ShippingIcon(class="w-7 h-auto absolute right-0")
                      div(v-if="shippingMethod === 'courier-inpost'" class="flex w-full h-auto justify-start items-start px-8 gap-x-4 ")
                          div(class="w-[10rem] text-center text-sm space-y-2")
                              div(@click="isShippingExpress = false" :class="!isShippingExpress? 'border-black': 'border-gray-200'" class=" hover:cursor-pointer w-full h-[8rem] border-[1px]   text-sm py-3 rounded-lg  flex flex-col px-4 items-center justify-around")
                                  ShippingIcon(class="w-8 h-auto")
                                  p Dostawa Standardowa
                              p(v-if="shippingMethod === 'courier-inpost' && !isShippingExpress") Zamówienie dostaniesz: {{inpostShippingDate}}    
                          div(class="w-[10rem] text-center text-sm space-y-2 ")
                              div(@click="isShippingExpress = true" :class="isShippingExpress? 'border-black': 'border-gray-200'" class="hover:cursor-pointer w-full h-[8rem] border-[1px]  text-sm py-3 rounded-lg  flex flex-col px-4 items-center justify-around")
                                  ShippingIcon(class="w-8 h-auto")
                                  p Dostawa Expresowa
                              p(v-if="shippingMethod === 'courier-inpost' && isShippingExpress") Zamówienie dostaniesz: {{inpostShippingDate}}      
                      p( v-if="shippingMethod !== 'courier-inpost'" class="ml-8 text-sm") Zamówienie dostaniesz: {{inpostShippingDate}}  
                  div(@click="checkBox($event), shippingMethod = 'personal-collection'" :class="shippingMethod === 'personal-collection'? ' border-gray-800 border-[1px] rounded-xl h-[3rem]': 'border-gray-200  h-[3rem] border-y-[1px]'" class='w-full flex  relative py-2 px-6  justify-start space-x-4 items-center hover:cursor-pointer')
                      div( class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center ")
                          input.checkbox-round(type="checkbox" class="w-3 h-3")
                      div(class="flex flex-col w-auto")
                          p Odbiór w salonie PinkiWoow (zobacz mape)
                          p 
                      WarehouseIcon(class="w-8 h-auto absolute right-6")
                
                  div(@click="checkBox($event), shippingMethod = 'parcel-locker'" :class="shippingMethod === 'parcel-locker'? ' border-gray-800 border-[1px] rounded-xl h-[3rem]': 'rounded-t-xl h-[3rem] '" class='w-full flex  px-6 relative py-2  justify-start space-x-4 items-center hover:cursor-pointer')
                      div( class="w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center ")
                          input.checkbox-round(type="checkbox" class="w-3 h-3")
                      div(class="flex flex-col w-auto")
                          p Paczkomaty
                          p 
                      WarehouseIcon(class="w-8 h-auto absolute right-6")
                
              div(class="flex flex-col h-auto w-full mt-8 space-y-3")
                  p(class="text-xl font-semibold") Kupujesz jako
                  div(class="w-full h-auto flex justify-between gap-x-2")
                      div.check-option(@click="buyAs = 'person', checkBox($event)" :class="buyAs === 'person'? 'border-black': 'border-gray-300'" class="hover:cursor-pointer h-[4rem] w-1/2 border-[1px] rounded-lg  flex space-x-2 p-4 items-center ")
                          div( class="pointer-events-none w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                              input.checkbox-round(type="checkbox" checked class="pointer-events-none w-3 h-3")
                          p( class="pointer-events-none")  Osoba prywatna
                      div.check-option(@click="buyAs = 'company', checkBox($event)" :class="buyAs === 'company'? 'border-black': 'border-gray-300'" class="hover:cursor-pointer h-[4rem] w-1/2 border-[1px] rounded-lg flex space-x-2 p-4 items-center ")
                          div( class="pointer-events-none w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center justify-center hover:cursor-pointer")
                              input.checkbox-round(type="checkbox" class="pointer-events-none w-3 h-3")
                          p( class="pointer-events-none") Firma
                    
              div( class="flex flex-col  h-auto w-full mt-8 space-y-4")
                  p(class="text-xl font-semibold") Adres dostawy
                  div(v-if="shipping" class="h-auto flex text-start space-y-1 text-sm  flex-col  p-4  mt-4 w-1/2 border-[1px] rounded-lg border-black justify-between ")
                      div(class="flex justify-between")
                        p {{shipping.name_surname}}
                        a(@click="isModalShipping = true" class="hover:cursor-pointer text-sm text-blue-600") Zmień
                      p.order-street {{shipping.address}}
                      p.order-city {{shipping.zip_code}} {{shipping.city}}
                      p.order-phone {{shipping.phone}}
                      p.order-email {{shipping.email}}

                  div(v-if="!shipping" class="space-y-6 h-auto justify-center items-center md:w-2/3 flex flex-col w-full") <!-- run if user not logged in or doesn't have shipping yet -->
                    input(v-model="name_surname" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="Imię i nazwisko lub nazwa firmy")
                    input(v-model="address" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="Street Address")
                    input(v-model="zip_code" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="Zip code")
                    input(v-model="city" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="City")
                    input(v-model="country" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="Country")
                    input(v-model="phone" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="Phone number")
                    input(v-model="email" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="E-mail")
              div(class="flex flex-col  h-auto w-full mt-8 space-y-4")
                  p(class="text-xl font-semibold") Dane do faktury

          
                
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



          div(class="flex md:sticky md:max-h-[80vh] top-[8rem] flex-col w-full sm:w-5/6 md:w-2/6 h-auto order-1 border-[1px] border-slate-300 rounded-xl")
              div(class="p-2 max-h-[13rem] min-h-[6rem] overflow-y-auto border-b-[1px] border-slate-200")
                  div(v-for="(val, index, key) in cartStore.getCart" class="flex flex-col h-auto ")
                      div(class="flex  gap-x-4 h-auto ")
                          nuxt-img(:src="val.image" class="w-2/6 lg:w-1/5 h-auto aspect-square")
                          div(class="flex flex-col w-4/5")
                              p(class="h-auto") {{val.title }}
                              div(class="flex justify-between")
                                  p {{val.quantity}}
                                  p(v-if="productsStore.getCurrency === 'PLN'") {{ (val.price_pln * val.quantity).toFixed(2)}} {{ productsStore.getCurrency }}
                                  p(v-if="productsStore.getCurrency === 'EUR'") {{ (val.price_eur * val.quantity).toFixed(2)}} {{ productsStore.getCurrency }}
                      hr(v-if="index !== cartStore.getCart.length -1"  class="w-[calc(100%+1.5rem)] border-[1px] border-slate-200 mt-1 mb-1 -ml-4")
                
              div(class="flex flex-col p-4 h-auto w-full border-b-[1px] border-slate-200 space-y-4 bg-white z-20")
                  div(class="flex  gap-x-4 items-center")
                      ShippingIcon(class="w-6 h-auto text-gray-600")
                      div(class="flex flex-col w-4/5")
                          p(class="h-2/3 text-sm")
                          p(v-if="shippingMethod === 'courier-inpost'") Kurier – InPost {{isShippingExpress? 'Express' : ''}}
                          p(v-if="shippingMethod === 'parcel-locker'") Paczkomat: {{ choosedLocker.name }}
                          p(v-if="shippingMethod === 'personal-collection'") Odbiór osobisty
                  div(class="flex gap-x-4 items-center")
                      BoxIcon(class="w-5 h-5 text-gray-600")
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
                      p(class="")  zł
                  button(@click="saveShippingAndGo" class="w-full m-auto mt-1 h-11 items-center justify-center flex text-white hover:cursor-pointer text-sm bg-[#119E00] rounded-full") Przejdź do płatności
                


  
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { useProductsStore } from "@/stores/Products";
import { useCartStore } from "@/stores/Cart";
import { useUserStore } from "@/stores/User";
import { useMainStore } from "~~/stores/Main";
import FastShippingIcon from "~icons/la/shipping-fast";
import ShippingIcon from "~icons/material-symbols/local-shipping-outline-rounded";
import BoxIcon from "~icons/bi/box-seam";
import WarehouseIcon from "~icons/la/warehouse";
import { ValidateShippingInputs } from "@/functions/validateInputs.ts";
let cartStore: any = useCartStore();
const mainStore = useMainStore();
let cart = ref(computed(() => useCartStore().getCart));
const userStore = useUserStore();
const productsStore: any = useProductsStore();

const router = useRouter();
// adding addres for not logged user or if doesnt have any shipping yet

const name_surname = ref("");
const address = ref("");
const zip_code = ref("");
const city = ref("");
const phone = ref("");
const email = ref("");
const country = ref("");

//
const inputs = computed(() => {
  return {
    name_surname: name_surname.value,
    address: address.value,
    zip_code: zip_code.value,
    city: city.value,
    phone: phone.value,
    email: email.value,
    country: country.value,
  };
});

type shippingMethodType =
  | "courier-inpost"
  | "parcel-locker"
  | "personal-collection";
// order settings

const shipping = ref(null);
shipping.value = userStore.getDefaultShipping;

const saveShippingAndGo = async () => {
  if (shipping === null) {
    if (ValidateShippingInputs(inputs.value)) {
      shipping.value = inputs.value;
      await useSaveShipping(inputs.value);
      router.push("/cart/summary");
    } else {
      console.log("niepoprawne dane");
    }
  } else {
    if (ValidateShippingInputs(inputs.value)) {
      router.push("/cart/summary");
    } else {
      console.log("niepoprawne dane");
    }
  }
};

const isModalShipping = ref(false);
const shippingMethod: Ref<shippingMethodType> = ref("courier-inpost");
const isShippingExpress = ref(false);
const paymentMethod = ref("przelew");
const buyAs: Ref<"company" | "person"> = ref("person");
const choosedLocker = ref({
  name: "Paczkomat 1",
  address: "ul. Kolejowa 1, 00-000 Warszawa",
});

const checkBox = (el: any) => {
  const AimingCheckbox = el.currentTarget.children[0].querySelector(
    "input"
  ) as HTMLInputElement;

  const parentEl = el.currentTarget.parentElement;

  let checkboxes = parentEl.querySelectorAll("input");
  console.log(checkboxes.length);
  if (checkboxes.length === 1)
    checkboxes = parentEl.parentElement.querySelectorAll("input");
  console.log(checkboxes.length);
  checkboxes.forEach((checkbox: HTMLInputElement) => {
    checkbox.disabled = true;
    if (checkbox.checked === true) {
      checkbox.checked = false;
      AimingCheckbox.checked = true;
    } else AimingCheckbox.checked = true;
  });
};

const getInpostShippingDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  const data = {
    price: 0,
    date: date.toLocaleString("pl-PL", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }),
  };
  return data;
};
const inpostShippingDate = ref(getInpostShippingDate().date);
const openShippingModal = () => {};

watch(
  () => isModalShipping.value,
  (val) => {
    if (val) {
      const scrollY =
        document.documentElement.style.getPropertyValue("--scroll-y");
      const body = document.body;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}`;
      body.style.overflow = "scroll";
    } else {
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }
);
onMounted(() => {
  window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty(
      "--scroll-y",
      `${window.scrollY}px`
    );
  });
});
</script>

<style lang="scss"></style>
