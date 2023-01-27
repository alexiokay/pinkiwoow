<template lang="pug">
div#cart-process(class="flex h-full w-full items-center justify-between md:justify-start md:gap-x-16")
    nuxt-img(class="w-10 h-10" src="/images/pinkiwoowLogo.webp")
    div( class="flex h-full relative")
        div(v-for="(val, index, key) in props.steps" class="w-[8rem] relative md:w-[9.5rem] h-full  flex flex-col justify-between items-center")
            button(@click="goToStep(index)" class="w-6 h-6 rounded-full items-center justify-center flex " :class="{ 'bg-gray-500 text-white': index < props.currentStep, 'bg-white border-[1px] border-gray-400': index > props.currentStep, 'bg-black text-white': index === props.currentStep }")
                p(v-if="index >= props.currentStep") {{ index }}
                IconDone(v-if="index < props.currentStep")
            p(class="text-xs text-gray-500") {{val}}
       
            hr(v-if="index !== props.steps.length -1" class="absolute top-[0.65rem] left-[5.6rem] md:left-[6.2rem] w-[5rem] md:w-[6.5rem] h-[1.5px] bg-gray-800")
 
            
           
</template>

<script setup lang="ts">
import IconDone from "~icons/material-symbols/done-rounded";
const props = defineProps<{ steps: string[]; currentStep: number }>();
const router = useRouter();
const goToStep = (index: number) => {
  if (index === 0) {
    router.push("/cart");
  }
};
</script>

<style lang="sass"></style>
