<template>
  <div>
    <PolishFlag v-if="localeSetting === 'pl'" class="w-1/3 h-3 md:h-16" />
    <EnglishFlag v-else-if="localeSetting === 'en'" class="w-1/3 h-3 md:h-16" />
    <DeutschFlag v-else-if="localeSetting === 'de'" class="w-1/3 h-3 md:h-16" />
    <ChinneseFlag
      v-else-if="localeSetting === 'zh'"
      class="w-1/3 h-3 md:h-16"
    />
    <IndonesianFlag
      v-else-if="localeSetting === 'id'"
      class="w-1/3 h-3 md:h-16"
    />
    <JapaneseFlag
      v-else-if="localeSetting === 'ja'"
      class="w-1/3 h-3 md:h-16"
    />
    <SouthCoreanFlag
      v-else="localeSetting === 'ko'"
      class="w-1/3 h-3 md:h-16"
    />
    <NetherlandsFlag
      v-else="localeSetting === 'nl'"
      class="w-1/3 h-3 md:h-16"
    />
  </div>
</template>

<script setup lang="ts">
import PolishFlag from "~icons/circle-flags/pl";
import EnglishFlag from "~icons/circle-flags/en";
import DeutschFlag from "~icons/circle-flags/de";
import ChinneseFlag from "~icons/circle-flags/cn";
import SouthCoreanFlag from "~icons/circle-flags/ko";
import IndonesianFlag from "~icons/circle-flags/id";
import JapaneseFlag from "~icons/circle-flags/ja";
import NetherlandsFlag from "~icons/circle-flags/nl";

const localeSetting = useState<string>("locale.setting");
localeSetting.value.toLowerCase();
</script>

<style lang="sass"></style>
