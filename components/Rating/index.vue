<template lang="pug">
div(class="flex flex-row w-full h-auto gap-x-4 text-2xl items-center justify-center ")
    div(ref="root" class="w-full flex flex-row justify-center items-center")
        RatingStar(type="full" id=0 class="w-12 h-12" @rate="(id) => rate(id)" @fill="(event, id) => fill(event, id)" @unfill="(event, id) => unfill(event, id)")
        RatingStar(type="half" id=2 class="w-12 h-12" @rate="(id) => rate(id)" @fill="(event, id) => fill(event, id)" @unfill="(event, id) => unfill(event, id)")
        RatingStar(type="empty" id=4 class="w-12 h-12" @rate="(id) => rate(id)" @fill="(event, id) => fill(event, id)" @unfill="(event, id) => unfill(event, id)")
        RatingStar(type="empty" id=6 class="w-12 h-12" @rate="(id) => rate(id)" @fill="(event, id) => fill(event, id)" @unfill="(event, id) => unfill(event, id)")
        RatingStar(type="empty" id=8 class="w-12 h-12" @rate="(id) => rate(id)" @fill="(event, id) => fill(event, id)" @unfill="(event, id) => unfill(event, id)")
    
    
    
    </template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
let rated = ref(6);
const root: Ref<HTMLElement | null> = ref(null);

const rate = (rating: number) => {
  const stars = root.value?.querySelectorAll(".star");
  let i = 0;
  rated.value = rating;
  stars?.forEach((star) => {
    if (i <= rated.value) star.classList.add("filter-gold");

    i++;
  });
  console.log(rated);
};

const fill = (event: any, id: number) => {
  const stars = root.value?.querySelectorAll(".star");
  let i = 0;
  stars?.forEach((star) => {
    if (i <= id) star.classList.add("filter-gold");
    else star.classList.remove("filter-gold");

    i++;
  });

  console.log(id);
};

const unfill = (event: any, id: number) => {
  const stars = root.value?.querySelectorAll(".star");
  let i = 0;
  stars?.forEach((star) => {
    star.classList.remove("filter-gold");
    i++;
  });
  rate(rated.value);

  console.log(id);
};

onMounted(() => {
  rate(rated.value);
});
</script>
<style lang="scss">
.filter-gold {
  filter: invert(0%) sepia(96%) saturate(1208%) hue-rotate(359deg)
    brightness(101%) contrast(107%);
}
</style>
