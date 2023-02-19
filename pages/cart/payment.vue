<template lang="pug">
form#payment-form(class="mx-4 mt-16 w-[25rem]")
    div#payment-element

    button( id="submit" class="w-full bg-green-600 h-10 rounded-md mt-6")
            a(class="text-white text-base font-semibold") Continue

            
    div#error-message
    <!-- Display error message to your customers here -->


</template>

<script setup lang="ts">
import { loadStripe } from "@stripe/stripe-js";
import { useUserStore } from "@/stores/User";
import { useCartStore } from "@/stores/Cart";

definePageMeta({
  title: "Payment",
  description: "Payment",
  meta: [
    // <meta name="description" content="My amazing site">
    {
      hid: `description`,
      name: "description",
      content: "PinkiWoow - Customized mugs, t-shirts, and more!",
    },
  ],
});
const userStore = useUserStore();
const cartStore = useCartStore();
const config = useRuntimeConfig();

definePageMeta({
  //include script link
  script: [
    {
      src: "https://js.stripe.com/v3/",
      async: true,
      defer: true,
    },
  ],
});
const STRIPE_PUBLIC_KEY = config.STRIPE_PUBLIC_KEY;
console.log("STRIPE_PUBLIC_KEY", STRIPE_PUBLIC_KEY);

const stripe = Stripe(STRIPE_PUBLIC_KEY);

//let stripe = loadStripe(STRIPE_PUBLIC_KEY);
let elements: any = null;
let options = {};

const loadElements = async () => {
  options = {
    clientSecret: cartStore.getTempOrder.client_secret,

    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  elements = stripe.elements(options);

  // Create and mount the Payment Element
  const paymentElement = elements.create("payment");
  paymentElement.mount("#payment-element");
};

const createSubmitListener = async () => {
  const form = document.getElementById("payment-form") as HTMLFormElement;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    await stripe
      .confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/cart/ready",
        },
      })
      .then(function (result: any) {
        if (result.error) {
          // Inform the customer that there was an error.
        }
        console.log("test2");
      });
  });
};
onMounted(async () => {
  await loadElements();

  createSubmitListener();
});
</script>

<style lang="sass"></style>
