<template lang="pug">
div.improve-process-container(class=" flex bg-[#292929] items-start justify-center h-[50rem] p-7 lg:p-12 xl:px-16 mt-24 text-white")
    div(class="bg-[#656565]  h-16 w-full ")
      h3(class="text-white text-center w-full h-full text-2xl font-semibold flex items-center justify-center tracking-wider") Improove your process with us
      div(class="flex w-full py-7 justify-between")
        div(class="w-[18%] h-[auto] ")
          img(src="/images/process/collect.png" class="")
          h5(class="text-3xl text-center mt-3  font-semibold") 1. COLLECT with StrawCart
          hr(class="mt-4 mb-4")
          h6(class="tracking-widest") With strawcart you collect more, easier and faster.
        div(class="w-[18%] h-auto ")
          img(src="/images/process/collect2.png" class="")
          h5(class="text-3xl text-center mt-3  font-semibold") 2. PRESTIGE with StrawBox
          hr(class="mt-4 mb-4")
          h6(class="tracking-widest") Sell your goods with nice, prestige boxes.
        div(class="w-[18%] h-auto ")
          img(src="/images/process/store.png" class="")
          h5(class="text-3xl text-center mt-3  font-semibold") 3. STORE with StrawTote
          hr(class="mt-4 mb-4")
          h6(class="tracking-widest") With StrawTotes you can effectively store StrawBoxes and save a lot of space inside your warehouse
        div(class="w-[18%] h-auto ")
          img(src="/images/process/quality-check.png" class="aspect-square")
          h5(class="text-3xl text-center mt-3  font-semibold") 4. MANAGE with StrawHouse
          hr(class="mt-4 mb-4")
          h6(class="tracking-widest") Temporarly store pallets with Strawtotes inside small and mobile warehouse on a field.
        div(class="w-[18%] h-auto ")
          img(src="/images/process/sell.png" class="aspect-w-1 aspect-h-1")
          h5(class="text-3xl text-center mt-3 font-semibold") 5. SELL with StrawStore
          hr(class="mt-4 mb-4")
          h6(class="tracking-widest") Easly sell your goods with StrawStores anywhere you want.

      button(class="w-[25rem] float-right mr-12 lg:mr-28 -rotate-6 tracking-widest h-auto p-3 bg-[#CE3030] font-itim  text-white text-3xl font-semibold rounded-lg drop-shadow-[0.2rem_0.3rem_0.2rem_rgba(0,0,0,0.5)]") Tell me more about that!
        img(src="/images/strawberry.png" class="w-2/6 absolute top-[-50px] right-[-65px]")
div.improve-process-container(class="relative border-y-2 border-zinc-900  flex bg-[#292929] items-start justify-center h-[8rem] p-7 lg:p-12 xl:px-16 text-white")
    div.triangle-left(class="absolute bottom-[-9rem]  left-0  ")
    div.triangle-right(class="absolute bottom-[-9rem]  right-0  ")

</template>

<script setup lang="ts"></script>

<style lang="sass">
.improve-process-container
  width: 100vw
  position: relative
  left: 50%
  right: 50%
  margin-left: -50vw
  margin-right: -50vw

.triangle-left
  width: 0
  height: 0
  border-top: 9rem solid #292929
  border-right:  18rem solid transparent

.triangle-right
  width: 0
  height: 0
  border-top:  9rem solid #292929
  border-left: 18rem solid transparent
</style>
