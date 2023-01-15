import { useMainStore } from "@/stores/Main";
import { useCartStore } from "@/stores/Cart";

export default defineNuxtPlugin(async (nuxtApp) => {
  const cart = useCartStore(nuxtApp.$pinia);
  const main = useMainStore(nuxtApp.$pinia);

  await main.initialize();
  await cart.initialize();
});
