<template lang="pug">
div.advantage-wrapper(class="flex h-full w-full gap-y-24 text-center  flex-wrap justify-between items-between mt-12")

    div.advantage(class=" w-1/2 md:w-1/3 items-center flex flex-col order-3 " )
        img(class="h-[9rem] md:h-[12rem] object-cover " :src="props.item1.image")
        div(class=" flex flex-col items-center  space-y-4" )
            h3(class="text-2xl md:text-3xl  mt-2 font-intern") {{props.item1.title}}
            h4 {{props.item1.description}}
        
    div.advantage(class="  w-1/2 md:w-1/3  items-center  flex flex-col order-2" )
        img(class=" h-[9rem] md:h-[12rem] object-cover " :src="props.item2.image" )
        div(class=" flex flex-col items-center  space-y-4" )
            h3(class="text-2xl md:text-3xl  mt-2 font-intern") {{props.item2.title}}
            h4 {{props.item2.description}} 
        
        
    div.advantage(class=" w-1/2 md:w-1/3   flex flex-col items-center order-1" )
        img(class="h-[9rem] md:h-[12rem] object-cover " :src="props.item3.image")
        div(class=" flex flex-col items-center space-y-4" )
            h3(class="text-2xl md:text-3xl  mt-2 font-intern") {{props.item3.title}}
            h4 {{props.item3.description}} 

    div.advantage(class=" w-1/2 md:w-1/3  flex flex-col items-center  order-0" )
      img(class="h-[9rem] md:h-[12rem] object-cover " :src="props.item4.image")
      div(class=" flex flex-col items-center space-y-4" )
          h3(class="text-2xl md:text-3xl  mt-2 font-intern") {{props.item4.title}}
          h4 {{props.item4.description}} 


    div.advantage(class=" w-1/2 md:w-1/3   flex flex-col items-center " )
      img(class="h-[9rem] md:h-[12rem] object-cover " :src="props.item5.image")
      div(class=" flex flex-col items-center  space-y-4" )
          h3(class="text-2xl md:text-3xl  mt-2 font-intern") {{props.item5.title}}
          h4 {{props.item5.description}}


    div.advantage(class="  w-1/2 md:w-1/3   flex flex-col items-center order-6" )
      img(class="h-[9rem] md:h-[12rem] object-cover " :src="props.item6.image")
      div(class=" flex flex-col items-center  space-y-4" )
          h3(class="text-2xl md:text-3xl  mt-2 font-intern") {{props.item6.title}}
          h4 {{props.item6.description}}
        

</template>

<script setup lang="ts">
export interface Advantage {
  title: string;
  description: string;
  image: string;
}

interface Props {
  item1: Advantage;
  item2: Advantage;
  item3: Advantage;
  item4: Advantage;
  item5: Advantage;
  item6: Advantage;
}

const props = defineProps<Props>();
</script>

<style lang="sass"></style>
