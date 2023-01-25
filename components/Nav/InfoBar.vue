<template lang="pug">
div.w-full.p-2.flex.justify-center.items-center.text-white(v-show="canAdditionalNavbars"  class="bg-[#47C1BF] h-[2.3rem] md:h-auto ")
    p(class="mb-1") {{props.title}} 

</template>

<script setup lang="ts">
const route = useRoute();
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
});

const canAdditionalNavbars = computed(() => {
  if (route.name === "login" || route.name === "register") return false;
  else return true;
});
</script>

<style lang="sass"></style>
