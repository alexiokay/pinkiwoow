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

fetch(`${config.API_URL}api/v1/get_geolocation`, {
  method: "POST",
  headers: {
    Host: `${config.HOST}`,
    Authorization: `${config.API_TOKEN}`,
    "Content-Type": "text/plain",
  },
  body: JSON.stringify({
    latitude: "51.3831461",
    longitude: "6.1921298",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
// ----------------------------

const headers = useRequestHeaders();
console.log("headers: ");
console.log(headers);

onMounted(() => {
  console.log("cookie: ");
  let cookie: any = useCookie("headers").value;
  console.log(cookie);
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
