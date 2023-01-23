<template>
  <Html :lang="locale">
    <NuxtLayout name="default">
      <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
      <NuxtPage class="" />
    </NuxtLayout>
  </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from "./utils/app";
import { useProductsStore } from "@/stores/Products";
import type { ProductType } from "@/types/Product";

AppSetup();
const locale = useState<string>("locale.setting");
const app = useAppConfig();
const productsStore = useProductsStore();
let products: Array<ProductType> | null = null;
products = await getProducts();
// set products in store

productsStore.setProducts(products);

const config = useRuntimeConfig();

// get geolocation to set default currency  and language

await fetch(`${config.API_URL}api/v1/get_geolocation_ip`, {
  method: "GET",
  headers: {
    Host: `localhost`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("from client: "), console.log(data);
    const locale = useCookie("locale");
    if (data.country !== "ZZ") {
      console.log("setting cookie");
      locale.value = data.country;
    }
    console.log("locale set to: " + locale.value);
    productsStore.setCurrency(data.country, true);
  })
  .catch((error) => {
    console.log(error);
  });
</script>

<style lang="sass">
.page-enter-active,
.page-leave-active
  transition: all 0.4s

.page-enter-from,
.page-leave-to
  opacity: 0
  filter: blur(1rem)
</style>
