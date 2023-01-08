<template lang="pug">
div(class="flex flex-row w-full")
    div(class="flex flex-col w-[45%] h-auto overflow-hidden  justify-between items-center")
        div(class="block h-[24rem] mt-12 md:h-[28rem] w-full rounded-xl ")
            img(class=" w-full object-contain rounded-xl h-full" src="/images/strawcart-model.jpg")
            
        div(class="flex flex-row w-full justify-around mb-4")
            
            div(class="flex flex-col")
                p.text-3xl Price:
                p.text-xl ${{priveOverall}}
            button( class="w-[9rem] h-[4rem] bg-[#00A3AD] rounded-xl text-white  text-xl") Add to Cart
    div(v-if="step===2" class="flex flex-col w-[55%] h-full bg-[#ffffff] justify-start items-start]  ")
        div(class="flex flex-row w-full justify-between items-center p-8")
            button(@click="step = 1" class="border-2 border-[#434447] bg-white rounded-lg w-[7rem] h-[2.5rem] flex items-center justify-around")
                BackIcon
                p Back
            CloseIcon
        h1(class=" text-xl px-4 ") Configure the StrawCart
        div(class="flex flex-row w-full items-center justify-start mt-8")
            ConfiguratorMainItem(@click="configuring = options.Wheel" :isActive="configuring.title === 'Wheels'? true: false" title="Wheel" icon="fluent-emoji-high-contrast:wheel")
            ConfiguratorMainItem(@click="configuring = options.SolarPanels" :isActive="configuring.title === 'Solar Panels'? true: false"  title="Solar Panels" icon="ic:outline-solar-power")
            ConfiguratorMainItem(@click="configuring = options.Battery" :isActive="configuring.title === 'Batteries'?true: false"  title="Battery" icon="material-symbols:battery-5-bar-sharp")
            ConfiguratorMainItem(@click="configuring = options.Motor" :isActive="configuring.title === 'Motor'?true: false"  title="Motor" icon="mdi:motor")
        hr(class=" w-[94%] border-[0.8px] border-[#DADADA] mt-8 mb-8 mx-auto  ")
        h2(class="text-xl px-4 ") {{configuring.title}}
        div(v-if="configuring.title==='Wheels'" class="flex flex-row w-full justify-start mt-8")
            ConfiguratorSecondaryItem(@click="choosed.Wheel.option = options.Wheel.options[0]" :icon="configuring.icon" :isActive="choosed.Wheel.option.id === 1? true: false"  :option="configuring.options[0]" )
            ConfiguratorSecondaryItem(@click="choosed.Wheel.option = options.Wheel.options[1]" :icon="configuring.icon" :isActive="choosed.Wheel.option.id === 2? true: false" :option="configuring.options[1]")
            ConfiguratorSecondaryItem(@click="choosed.Wheel.option = options.Wheel.options[2]" :icon="configuring.icon" :isActive="choosed.Wheel.option.id === 3? true: false" :option="configuring.options[2]")
            ConfiguratorSecondaryItem(@click="choosed.Wheel.option = options.Wheel.options[3]" :icon="configuring.icon" :isActive="choosed.Wheel.option.id === 4? true: false" :option="configuring.options[3]")
        div(v-if="configuring.title==='Solar Panels'"  class="flex flex-row w-full justify-start mt-8")
            ConfiguratorSecondaryItem(@click="choosed.SolarPanels.option = options.SolarPanels.options[0]" :icon="configuring.icon" :isActive="choosed.SolarPanels.option.id === 1? true: false"  :option="configuring.options[0]" )
            ConfiguratorSecondaryItem(@click="choosed.SolarPanels.option = options.SolarPanels.options[1]" :icon="configuring.icon" :isActive="choosed.SolarPanels.option.id === 2? true: false" :option="configuring.options[1]")
            ConfiguratorSecondaryItem(@click="choosed.SolarPanels.option = options.SolarPanels.options[2]" :icon="configuring.icon" :isActive="choosed.SolarPanels.option.id === 3? true: false" :option="configuring.options[2]")
            ConfiguratorSecondaryItem(@click="choosed.SolarPanels.option = options.SolarPanels.options[3]" :icon="configuring.icon" :isActive="choosed.SolarPanels.option.id === 4? true: false" :option="configuring.options[3]")
        div(v-if="configuring.title==='Batteries'" class="flex flex-row w-full justify-start mt-8")
            ConfiguratorSecondaryItem(@click="choosed.Battery.option = options.Battery.options[0]" :icon="configuring.icon" :isActive="choosed.Battery.option.id === 1? true: false"  :option="configuring.options[0]" )
            ConfiguratorSecondaryItem(@click="choosed.Battery.option = options.Battery.options[1]" :icon="configuring.icon" :isActive="choosed.Battery.option.id === 2? true: false" :option="configuring.options[1]")
            ConfiguratorSecondaryItem(@click="choosed.Battery.option = options.Battery.options[2]" :icon="configuring.icon" :isActive="choosed.Battery.option.id === 3? true: false" :option="configuring.options[2]")
            ConfiguratorSecondaryItem(@click="choosed.Battery.option = options.Battery.options[3]" :icon="configuring.icon" :isActive="choosed.Battery.option.id === 4? true: false" :option="configuring.options[3]")
        div(v-if="configuring.title==='Motor'"  class="flex flex-row w-full justify-start mt-8")
            ConfiguratorSecondaryItem(@click="choosed.Motor.option = options.Motor.options[0]" :icon="configuring.icon" :isActive="choosed.Motor.option.id === 1? true: false"  :option="configuring.options[0]" )
            ConfiguratorSecondaryItem(@click="choosed.Motor.option = options.Motor.options[1]" :icon="configuring.icon" :isActive="choosed.Motor.option.id === 2? true: false" :option="configuring.options[1]")
            ConfiguratorSecondaryItem(@click="choosed.Motor.option = options.Motor.options[2]" :icon="configuring.icon" :isActive="choosed.Motor.option.id === 3? true: false" :option="configuring.options[2]")
            ConfiguratorSecondaryItem(@click="choosed.Motor.option = options.Motor.options[3]" :icon="configuring.icon" :isActive="choosed.Motor.option.id === 4? true: false" :option="configuring.options[3]")
        
               
    div(v-if="step===1" class="flex flex-col w-[55%] h-full bg-[#ffffff] justify-start items-start gap-y-4 py-8  ")

        h1(class="text-2xl") Select your StrawCart model

        div#strawcart-basic(@click="changeModelToBasic" :class="{'bg-blue-500 text-white': choosedModel === 'Basic' }" class="flex w-4/5 h-24 border-2 rounded-xl p-2 gap-x-3 mt-4 hover:cursor-pointer")
            img(class="w-auto h-full" src="/images/strawcart-model.jpg")
            flex.col.w-full
                div.row.justify-between.w-full
                    h2(class="text-2xl font-medium") Strawcart Basic
                    p(class="text-xl font-medium") 770$
                h3(class="text-lg font-normal") Traditional economic but still powerfull version of strawcart. 
        div#strawcart-pro(@click="changeModelToPro" :class="{'bg-yellow-500 text-white': choosedModel === 'Pro' }"  class="flex w-4/5 h-24 border-2 rounded-xl p-2 gap-x-3 hover:cursor-pointer")
            img(class="w-auto h-full" src="/images/strawcart-model.jpg")
            flex.col.w-full
                div.row.justify-between.w-full
                    h2(class="text-2xl font-medium") Strawcart Pro
                    p(class="text-xl font-medium") 1400$
                h3(class="text-lg font-normal") Modern equipped with engine, sustainable energy version. Most efficient and prestige.
        div#strawcart-custom(@click="changeModelToCustom" :class="{'bg-green-500 text-white': choosedModel === 'Custom' }"  class="flex w-4/5 h-24 border-2 rounded-xl p-2 gap-x-3 hover:cursor-pointer")
            img(class="w-auto h-full" src="/images/strawcart-model.jpg")
            flex.col.w-full
                div.row.justify-between.w-full
                    h2(class="text-2xl font-medium") Custom
                    p(class="text-xl font-medium") from 770$
                h3(class="text-lg font-normal") Choose your own configuration and get your own Strawcart.
        
</template>

<script setup lang="ts">
import CloseIcon from "~icons/ic/outline-close";
import BackIcon from "~icons/material-symbols/arrow-back";
import WheelIcon from "~icons/fluent-emoji-high-contrast/wheel";
import SolarIcon from "~icons/ic/outline-solar-power";
import BatteryIcon from "~icons/material-symbols/battery-5-bar-sharp";
import MotorIcon from "~icons/mdi/motor";
import type { Ref } from "vue";
const step = ref(1);
const choosedModel: Ref<"Basic" | "Pro" | "Custom"> = ref("Basic");
const priveOverall = computed(
  () =>
    choosed.value.Wheel.option.price +
    choosed.value.SolarPanels.option.price +
    choosed.value.Battery.option.price +
    choosed.value.Motor.option.price
);

const changeModelToPro = () => {
  choosed.value.Wheel.option = options.Wheel.options[3];
  choosed.value.SolarPanels.option = options.SolarPanels.options[3];
  choosed.value.Battery.option = options.Battery.options[3];
  choosed.value.Motor.option = options.Motor.options[3];
  choosedModel.value = "Pro";
};
const changeModelToBasic = () => {
  choosed.value.Wheel.option = options.Wheel.options[0];
  choosed.value.SolarPanels.option = options.SolarPanels.options[0];
  choosed.value.Battery.option = options.Battery.options[0];
  choosed.value.Motor.option = options.Motor.options[0];
  choosedModel.value = "Basic";
};

const changeModelToCustom = () => {
  step.value = 2;
  choosedModel.value = "Custom";
};
const config = useRuntimeConfig();

const options = {
  Wheel: {
    title: "Wheels",
    icon: "fluent-emoji-high-contrast:wheel",
    options: [
      { id: 1, title: "Wheel 1", price: 200 },
      { id: 2, title: "Wheel 2", price: 300 },
      { id: 3, title: "Wheel 3", price: 400 },
      { id: 4, title: "Wheel 4", price: 500 },
    ],
  },
  SolarPanels: {
    title: "Solar Panels",
    icon: "ic:outline-solar-power",
    options: [
      { id: 1, title: "Wheel 1", price: 200 },
      { id: 2, title: "Wheel 2", price: 400 },
      { id: 3, title: "Wheel 3", price: 500 },
      { id: 4, title: "Wheel 4", price: 600 },
    ],
  },
  Battery: {
    title: "Batteries",
    icon: "material-symbols:battery-5-bar-sharp",
    options: [
      { id: 1, title: "Wheel 1", price: 200 },
      { id: 2, title: "Wheel 2", price: 300 },
      { id: 3, title: "Wheel 3", price: 400 },
      { id: 4, title: "Wheel 4", price: 500 },
    ],
  },
  Motor: {
    title: "Motor",
    icon: "mdi:motor",
    options: [
      { id: 1, title: "Wheel 1", price: 200 },
      { id: 2, title: "Wheel 2", price: 300 },
      { id: 3, title: "Wheel 3", price: 400 },
      { id: 4, title: "Wheel 4", price: 500 },
    ],
  },
};
const configuring = ref(options.Wheel);

const choosed = ref({
  Wheel: {
    title: "Wheels",
    price: 350,
    option: options.Wheel.options[0],
  },
  SolarPanels: {
    title: "Solar Panels",
    price: 550,
    option: options.SolarPanels.options[0],
  },
  Battery: {
    title: "Batteries",
    price: 250,
    option: options.Battery.options[0],
  },
  Motor: {
    title: "Motor",
    price: 450,
    option: options.Motor.options[0],
  },
});
const locale = useState<string>("locale.setting");
const { t } = useLang();
</script>

<style lang="sass"></style>
