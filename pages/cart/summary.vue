<template lang="pug">
form#payment-form(class="mx-4 mt-16")
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

const userStore = useUserStore();
const cartStore = useCartStore();
const config = useRuntimeConfig();

const STRIPE_PUBLIC_KEY = config.STRIPE_PUBLIC_KEY;
console.log("STRIPE_PUBLIC_KEY", STRIPE_PUBLIC_KEY);

let stripe = loadStripe(STRIPE_PUBLIC_KEY);
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

  elements = await stripe.then((result: any) => {
    return result.elements(options);
  });

  // Create and mount the Payment Element
  const paymentElement = elements.create("payment");
  paymentElement.mount("#payment-element");
};

const confirmPayment = async () => {
  await loadStripe(STRIPE_PUBLIC_KEY).then((result: any) => {
    console.log(STRIPE_PUBLIC_KEY);
    //console.log(elements)

    stripe = result;
  });

  await stripe
    .confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `https://pinkiwoow.pl/cart/summary`,
      },
    })
    .then((result: any) => {
      console.log(result);
    })
    .catch((err: any) => {
      console.log(err);
    });
  console.log("success");
};

const createSubmitListener = async () => {
  const form = document.getElementById("payment-form") as HTMLFormElement;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    await loadStripe(STRIPE_PUBLIC_KEY).then((result: any) => {
      //console.log(elements)

      stripe = result;
    });

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      const messageContainer = document.querySelector(
        "#error-message"
      ) as HTMLDivElement;
      messageContainer.textContent = error.message;
    } else {
      console.log("success");
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  });
};
onMounted(async () => {
  await loadElements();

  createSubmitListener();
});
</script>

<style lang="sass"></style>
