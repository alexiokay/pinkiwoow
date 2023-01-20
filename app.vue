<template>
  <Html :lang="locale">
    <NuxtLayout name="default">
      <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
      <NuxtPage class="overflow-hidden" />
    </NuxtLayout>
  </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from "./utils/app";
import { useMainStore } from "@/stores/Main";
import { useCartStore } from "@/stores/Cart";
import { useProductsStore } from "@/stores/Products";
import { availableLocales } from "@/utils/lang";
import type { ProductType } from "@/types/Product";
import { ref } from "vue";
import { geoFindMe } from "./functions/functions";
import type { Ref } from "vue";
import { useGeolocation } from "@vueuse/core";
import { on } from "events";
const localeSetting = useState<string>("locale.setting");
AppSetup();
const locale = useState<string>("locale.setting");
const app = useAppConfig();
const MainStore = useMainStore();
const productsStore = useProductsStore();
let products: Array<ProductType> | null = null;
products = await getProducts();
// set products in store
MainStore.setCurrency(localeSetting.value);

productsStore.setProducts(products);

const config = useRuntimeConfig();

const mousePads = ref(productsStore.getMousePads);
const mugs = ref(productsStore.getMugs);

const options = {
  method: "GET",
  headers: {
    Host: `localhost`,
    Authorization: `${config.API_TOKEN}`,
    "Access-Control-Allow-Origin": "*",
  },
};

useGeolocationIp();
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
