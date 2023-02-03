
<template lang="pug">
div
    
    
    <Transition name="jump">
            <div v-show="isOpen && !addingShipping"  @click.stop="$emit('null')" class="fixed top-0 pointer-event-none flex items-center  justify-center left-0 right-0 z-50  mx-auto w-[30rem] p-4  md:inset-0 h-screen md:h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full ">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between px-5 py-3 border-b bg-slate-50 rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                            p Default Zapisane dane
                        </h3>
                        <button @click="$emit('close'), addingShipping = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal">
                            <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span> 
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6 overflow-y-auto h-full sm:h-[60vh] w-[30rem]">
                        button(@click="addingShipping = true" class="w-full rounded-full text-center h-[2.4rem] bg-blue-50 text-sm text-blue-800 hover:bg-blue-100")
                            p Dodaj nowy Adres 
                                span(class="text-base") +
                        div(@click="checkBox($event, shipping)" :order="userStore.getDefaultShipping === shipping.id? '0': ''" v-for="(shipping, index, key) in userStore.getShippings"  class="hover:cursor-pointer h-auto flex text-start space-y-1 text-sm  flex-col  p-4  mt-4 w-full border-[1px] rounded-lg border-black justify-between ")
                            div(class="flex justify-between")
                                p {{shipping.name_surname}}
                                div( class=":hover:cursor-pointer  w-5 h-5 rounded-full p-[1px] border-[1.5px] border-[#6f6e6e] b flex items-center mr-1 justify-center hover:cursor-pointer")
                                    input.checkbox-round(type="checkbox" :checked="index === 0? true: false" class=" w-3 h-3")
                            p.order-street {{shipping.address}}
                            p.order-city {{ shipping.zip_code }} {{ shipping.city }}
                            p.order-phone {{shipping.phone}}
                            p.order-email {{shipping.email}}
                        
                        <p hidden class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            p(hidden) The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                    <!-- Modal footer -->
                    <div class="absolute bottom-0 w-full flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        button(@click="$emit('setShipping', shipping), $emit('close')" class="w-full rounded-full text-center h-[2.4rem] bg-blue-600 text-sm text-white hover:bg-blue-700")
                            p Zatwierdz
                    </div>
                </div>
            </div>
    </Transition>
    Transition(name="jump")
        LazyModalShippingAdd(v-if="isOpen && addingShipping" @close="addingShipping=false")
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/User";
import type { ShippingT } from "@/types/Shipping";
const userStore = useUserStore();
const addingShipping = ref(false);
const shipping: ShippingT | null = ref(null);
const setShipping = (index: number) => {
  console.log(index);
};
defineProps<{
  isOpen: boolean;
}>();

const checkBox = (el: any, _shipping: ShippingT) => {
  shipping.value = JSON.parse(JSON.stringify(_shipping));
  console.log(JSON.parse(JSON.stringify(_shipping)));
  const AimingCheckbox = el.currentTarget.querySelector(
    "input"
  ) as HTMLInputElement;
  console.log(AimingCheckbox);

  const parentEl = el.currentTarget.parentElement;

  let checkboxes = parentEl.querySelectorAll("input");
  //console.log(checkboxes.length);
  if (checkboxes.length === 1)
    checkboxes = parentEl.parentElement.querySelectorAll("input");
  //console.log(checkboxes.length);
  checkboxes.forEach((checkbox: HTMLInputElement) => {
    checkbox.disabled = true;
    if (checkbox.checked === true) {
      checkbox.checked = false;
      AimingCheckbox.checked = true;
    } else AimingCheckbox.checked = true;
  });
};
</script>

<style lang="scss">
.fade-enter {
}
.fade-enter-active {
  animation: fade-in 0.3s;
}
.fade-leave {
}
.fade-leave-active {
  animation: fade-out 0.3s;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.jump-enter {
}
.jump-enter-active {
  animation: jump-in 0.3s;
}
.jump-leave {
}
.jump-leave-active {
  animation: jump-out 0.3s;
}
@keyframes jump-in {
  0% {
    top: -100vh;
    opacity: 0;
    left: 20%;
  }
  30% {
    opacity: 0.6;
  }
  to {
    top: 0vh;
    opacity: 1;
  }
}
@keyframes jump-out {
  0% {
    top: 0vh;
    opacity: 1;
  }
  70% {
    opacity: 0.6;
  }
  100% {
    top: 100vh;
    opacity: 0;
    right: 14%;
  }
}
</style>

</template>

<script setup lang="ts"></script>

<style lang="sass"></style>
