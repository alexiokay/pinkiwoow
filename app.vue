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
console.log(productsStore.getProducts);
productsStore.setProducts(products);

console.log(productsStore.getMousePads); //
const config = useRuntimeConfig();

const mousePads = ref(productsStore.getMousePads);
const mugs = ref(productsStore.getMugs);

console.log(mugs.value);

console.log(products);
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

const geoFindMe = () => {
  let latitude: number = 0;
  let longitude: number = 0;
  const successCallback = (position: any) => {
    console.log(position);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    fetch(`${config.API_URL}api/v1/get_geolocation`, {
      method: "POST",
      headers: {
        Host: `${config.HOST}`,
        Authorization: `${config.API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        latitude: latitude,
        longitude: longitude,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const errorCallback = (error: any) => {
    console.log(error);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
};

onMounted(() => {
  geoFindMe();
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
