<template lang="pug"> 
div(class="absolute top-[6rem] md:top-[9.8rem] z-10 w-full md:-mx-16 xl:-mx-24 h-[6rem] md:h-[8rem] bg-[#47C1BF] flex flex-col ")
div(class="flex w-full h-auto")
    p(class="text-sm z-20 mt-2  text-white font-montserrat h-full items-center  flex" v-for="(val, index, key) in routes")
        span(class="underline hover:cursor-pointer" @click="router.push({path: findRoute(index, val)})")  {{ val }}
        span(v-if="index !== 0 && index !== routes.length-1" class="mx-1 -underline") > 
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const routes = ref([]);
const fillRoutes = () => {
  for (let name of route.path.split("/")) {
    if (!/^\d+$/.test(name)) routes.value.push(name);
  }
};

fillRoutes();

const findRoute = (index: number, val: string) => {
  let route = "";
  for (let i = 0; i < index; i++) {
    route += routes.value[i];
    route += "/";
  }
  route += val;
  console.log(route);
  return route;
};
</script>
<style lang="sass"></style>
