<template lang="pug">
div(class="flex flex-row  items-start w-full")
        div(class="w-2/4 space-y-8")
            h3(class=" text-4xl md:text-6xl mt-4 underline") {{$t('components.FAQ.title')}}
            p(class="text-md md:text-lg") {{$t('components.FAQ.subtitle')}}
        div(class="flex flex-col  items-center w-2/4")
            FAQElement(:isOpen="true" :title="$t('components.FAQ.free_trial.question')" :description="$t('components.FAQ.free_trial.answer')" )
            hr(class=" w-full border-[0.8px] mt-4 mb-4 ")
            FAQElement(:title="$t('components.FAQ.broken.question')" :description="$t('components.FAQ.broken.answer')" )
            hr(class=" w-full border-[0.8px] mt-4 mb-4 ")
            FAQElement(:title="$t('components.FAQ.what_inside.question')" :description="$t('components.FAQ.what_inside.answer')" )
            hr(class=" w-full border-[0.8px] mt-4 mb-4 ")
            FAQElement(:title="$t('components.FAQ.delivery.question')" :description="$t('components.FAQ.delivery.answer')" )
            hr(class=" w-full border-[0.8px] mt-4 mb-4 ")
            FAQElement( :title="$t('components.FAQ.why.question')" :description="$t('components.FAQ.why.answer')" )
</template>

<script setup lang="ts">
const { t } = useLang();
</script>

<style lang="sass"></style>
