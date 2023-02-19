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
import { useMainStore } from "@/stores/Main";
import type { ProductType } from "@/types/Product";

AppSetup();
const locale = useState<string>("locale.setting");
const app = useAppConfig();
const productsStore = useProductsStore();
const mainStore = useMainStore();
let products: Array<ProductType>;
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
    const localeSetting = useState<string>("locale.setting");
    if (data.country !== "ZZ") {
      console.log("setting cookie");
      // open LocationModal

      locale.value = data.country; // did'nt work
      localeSetting.value = data.country; //?? teting
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

.noselect
  -webkit-touch-callout: none
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none


*::-webkit-scrollbar
  width: 16px


*::-webkit-scrollbar-track
  border-radius: 8px
  background-color: #e7e7e7
  border: 1px solid #cacaca

*::-webkit-scrollbar-thumb
  border-radius: 8px
  border: 3px solid transparent
  background-clip: content-box
  background-color: #DB2878
</style>
