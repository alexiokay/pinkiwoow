<template lang="pug">
<div  class="fixed top-0 pointer-event-none flex items-center  justify-center left-0 right-0 z-50  mx-auto w-[30rem] p-4  md:inset-0 h-screen md:h-full">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 h-[80vh] ">
        <!-- Modal header -->
        <div class="flex items-center justify-between px-5 py-3 border-b bg-slate-50 rounded-t dark:border-gray-600">
           
            h3(class="text-2xl font-medium text-gray-900 dark:text-white") Dodaj adres dostawy
          
            <button @click="$emit('close')" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal">
                <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span> 
            </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6 overflow-y-auto h-full sm:h-[60vh] justify-center items-center flex flex-col w-[30rem]">
           
            input(v-model="name_surname" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="Imię i nazwisko lub nazwa firmy")
            input(v-model="address" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="Street Address")
            input(v-model="zip_code" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="Zip code")
            input(v-model="city" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="City")
            input(v-model="country" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="Country")
            input(v-model="phone" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="Phone number")
            input(v-model="email" class="w-full rounded-full text-start p-2 px-4 h-[2.8rem] border-[1px] border-gray-300" type="text" placeholder="E-mail")

            
            <p hidden class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                p(hidden) The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
            </p>
        </div>
        <!-- Modal footer -->
        <div class="absolute  bg-slate-50  bottom-0 w-full flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            button(@click="saveShipping" class="w-full rounded-full text-center h-[2.6rem] bg-blue-600 text-lg text-white hover:bg-blue-700")
                p Zapisz
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/User";
import { ValidateShippingInputs } from "@/functions/validateInputs.ts";
const userStore = useUserStore();
const name_surname = ref("");
const address = ref("");
const zip_code = ref("");
const city = ref("");
const phone = ref("");
const email = ref("");
const config = useRuntimeConfig();
const country = ref("");

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
const emit = defineEmits(["close"]);
const saveShipping = async () => {
  console.log(inputs.value);
  if (ValidateShippingInputs(inputs.value)) {
    await useSaveShipping(inputs.value);
    emit("close");
  } else {
    console.log("niepoprawne dane");
  }
};
</script>

<style lang="sass"></style>
