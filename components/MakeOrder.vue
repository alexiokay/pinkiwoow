<template lang="pug">
div#order(class="w-4/5 p-3 ")
    div#order-title(class='flex flex-row')
    div#order-names(class='flex flex-row justify-between h-12   ')
        div(class='w-[49.5%]')
            p(class="text-black text-lg mb-2 font-adelia ") {{$t('components.contact.name')}}
            input#customer-name(v-model="customerName" class="w-full h-full  border-[#DADADA] border-[2px] rounded-md p-2 ")
        div(class='w-[49.5%]')
            p(class="text-black text-lg mb-2 font-adelia") {{$t('components.contact.surname')}}
            input#customer-surname(v-model="customerSurname" class="w-full h-full border-[#DADADA] border-[2px] rounded-md p-2")
    div#order-email(class='flex flex-row h-12 mt-12')
        div(class='w-full')
            div(class="flex justify-between w-full")
                div(class='flex space-x-1')
                    p(class="text-black text-lg mb-2 font-adelia") {{$t('components.contact.email.text')}}
                    p(class="text-yellow-400 text-lg mb-2 font-adelia") *
                p(v-if="emailError === true && customerEmail.length >0" class="text-red-600") {{$t('components.contact.email.error')}}
                p(v-if="emailError === false" class="text-green-600") {{$t('components.contact.email.succeed')}}
            input#customer-email(@input="validateEmail" v-model="customerEmail" class="w-full h-full  border-[#DADADA] border-[2px] rounded-md p-2")
    div#order-mobile(class='flex flex-row h-12 mt-12')
        div(class='w-full')
            div(class="flex justify-between w-full")
                p(class="text-black text-lg mb-2 font-adelia") {{$t('components.contact.telephone.text')}}
                p(v-if="phoneError === true && customerPhone.length >0" class="text-red-600") {{$t('components.contact.telephone.error')}}
                p(v-if="phoneError === false" class="text-green-600") {{$t('components.contact.telephone.succeed')}}
            input#customer-phone(@input="validatePhone" v-model="customerPhone" class="w-full h-full  border-[#DADADA] border-[2px] rounded-md p-2")
    div#order-letter(class='flex flex-row h-28 mt-12')
        div(class='w-full')
            div(class="flex justify-between w-full")
                div(class='flex space-x-1')
                    p(class="text-black text-lg mb-2 font-adelia") {{$t('components.contact.message.text')}}
                    p(class="text-yellow-400 text-lg mb-2 font-adelia") *
                p(v-if="messageError === true && message.length >0" class="text-red-600") {{$t('components.contact.message.error')}}
                p(v-if="messageError === false" class="text-green-600") {{$t('components.contact.message.succeed')}}
            
            textarea#message(@input="updateMessage($event.target.value)" class="w-full h-full  border-[#DADADA] border-[2px] rounded-md p-2 ")
    div#order-policy(class='flex flex-col  mt-12')
        div(class='flex space-x-1')
                p(class="text-black text-lg mb-2 font-adelia") {{$t('components.contact.privacy_policy.title')}}
                p(class="text-yellow-400 text-lg mb-2 font-adelia") *
                p(v-if="!isPolicyAccepted" class="text-red-600") {{$t('components.contact.privacy_policy.error')}}
                p(v-else class="text-green-600") {{$t('components.contact.privacy_policy.succeed')}}
        
        div(class="flex flex-row justify-start items-center  ")
            input(v-model="isPolicyAccepted" type="checkbox" class="" )
            p(class="text-black text-lg font-adelia ml-2")  {{$t('components.contact.privacy_policy.subtitle')}}
    div#order-send(class='flex flex-row mt-12')

   
    <SmartButton :text="$t('components.contact.button')"/>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
const { t } = useLang();

const message = ref("");
const customerEmail = ref("");
const customerName = ref("");
const customerSurname = ref("");
const customerPhone = ref("");

const emailError: Ref<boolean | null> = ref(null);
const phoneError: Ref<boolean | null> = ref(null);
const messageError: Ref<boolean | null> = ref(null);
const isPolicyAccepted: Ref<boolean | null> = ref(null);

onMounted(() => {});
const updateMessage = (text: any) => {
  validateMessage();
  message.value = text;
};
const validatePhone = () => {
  const phoneValue = customerPhone.value;
  const phoneRegex = new RegExp(
    /^(\+48|0048|48)? ?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$/
  );
  if (phoneRegex.test(phoneValue)) {
    phoneError.value = false;
    return true;
  } else {
    phoneError.value = true;
    return false;
  }
};

const validateEmail = () => {
  const emailValue = customerEmail.value;
  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (emailRegex.test(emailValue)) {
    emailError.value = false;
    return true;
  } else {
    emailError.value = true;
    return false;
  }
};

const validateMessage = () => {
  const messageValue = message.value;
  if (messageValue.length > 5) {
    messageError.value = false;
    return true;
  } else {
    messageError.value = true;
    return false;
  }
};
const sendEmail = () => {
  validatePhone();
  if (validateEmail() && validateMessage()) {
    var link =
      "mailto:papadi166@gmail.com" +
      `?cc=${customerEmail.value}` +
      "&subject=" +
      encodeURIComponent(
        `Zapytanie - ${customerName.value} ${customerSurname.value}`
      ) +
      "&body=" +
      encodeURIComponent(message.value);
    window.location.href = link;
  }
};
</script>

<style lang="sass"></style>
