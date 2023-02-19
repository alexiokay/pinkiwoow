<template lang="pug">
form#payment-form(class="mx-4 mt-16 w-[25rem]")
    div#payment-element

    button( id="submit" class="w-full bg-green-600 h-10 rounded-md mt-6")
            a(class="text-white text-base font-semibold") Continue

            
    div#error-message
    <!-- Display error message to your customers here -->


</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/User";
import { useCartStore } from "@/stores/Cart";

useHead({
  title: "Payment",
  script: [
    {
      src: "https://js.stripe.com/v3/",
      async: true,
      defer: true,
    },
  ],
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
const router = useRouter();
const isLoading = ref(false);

const STRIPE_PUBLIC_KEY = config.STRIPE_PUBLIC_KEY;
console.log("STRIPE_PUBLIC_KEY", STRIPE_PUBLIC_KEY);

const stripe = Stripe(STRIPE_PUBLIC_KEY);

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

    isLoading.value = true;
    const response = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {},
      redirect: "if_required",
    });

    if (response.error) {
      isLoading.value = false;
      router.push("/cart/ready");
      console.log(`Payment Succeeded: ${response.error.message}`);
    } else {
      alert(`Something get wrong: ${response.paymentIntent.id} `);
    }
  });
};
onMounted(async () => {
  await loadElements();

  createSubmitListener();
});
</script>

<style lang="sass"></style>
