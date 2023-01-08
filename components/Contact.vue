<template lang="pug">
div#contact(class="flex flex-col md:flex-row w-full h-auto")
    div(class="flex flex-col w-full items-center justify-center md:w-1/2 mt-24 mb-24") 
        h5(class="text-6xl mb-4") {{$t('components.contact.title')}} 
        p {{$t('components.contact.subtitle')}}  
        MakeOrder(class="mt-12")
    div(class="w-full md:w-1/2 h-96 md:h-auto ")
        div(class="map  w-full h-full" id="map")
</template>

<script setup lang="ts">
import { Loader } from "@googlemaps/js-api-loader";
const { t } = useLang();
const config = useRuntimeConfig();
const loader = new Loader({
  apiKey: config.GOOGLE_MAPS_API_KEY,
  version: "weekly",
  libraries: ["places"],
});

const map = ref([]);

onMounted(() => {
  setTimeout(async () => {
    await loader
      .load()
      .then((google: any) => {
        map.value = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 51.133106, lng: 23.476335 },
          zoom: 13,
        });
      })
      .catch((error: any) => {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, 1000);
});
</script>

<style lang="sass"></style>
