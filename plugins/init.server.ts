import { useMainStore } from "@/stores/Main";
import { useCartStore } from "@/stores/Cart";
import { useProductsStore } from "@/stores/Products";

export default defineNuxtPlugin(async (nuxtApp) => {
  const cart = useCartStore(nuxtApp.$pinia);
  const main = useMainStore(nuxtApp.$pinia);
  const products = useProductsStore(nuxtApp.$pinia);

  await main.initialize();
  await cart.initialize();
});
