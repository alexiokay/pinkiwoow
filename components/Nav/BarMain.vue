<template lang="pug">

div#navbar-wrapper(class="z-50 overlaying drop-shadow-xl md:drop-shadow-none w-full text-gray-500 h-auto flex flex-col items-center justify-between lg:justify-center mx-0 bg-white") 
  div(@click="closeMobileNavbar()" class="w-full h-screen bg-[rgba(0,0,0,0.25)] z-40 fixed top-0 block md:hidden" v-if="mobileMenu && loaded")
        ClientOnly
          MobileSideBar#mobile-menu(v-if="loaded" :class="mobileMenu? 'show-right ' : 'hide-left '" class="z-10 block md:hidden")
    
  
  div#navbar-content1(class="z-50  flex items-center justify-between w-full h-[4.9rem] text-xs md:px-16 ")
    NavSearchBar.h-full(class='w-full') sda
    NuxtLink(class=" w-48 h-[4.9rem] flex justify-center items-center" to="/")
      nuxt-img#logo(class=" h-[4.9rem]" src='/images/pinkiwoowLogo.png' alt="logo" format="webp") 
      p(class="text-3xl text-pink-600 font-itim") PinkiWoow
    div#mobile-nav(v-if="mobileMenu && loaded" class="flex md:hidden items-center space-x-2 w-full h-full")
      MenuIcon#mobile-menu-button(@click="showMobileNavbar" class=" hover:cursor-pointer w-9 h-9 ")
      
      NuxtLink(class="w-9 h-9 flex items-center justify-center relative" to="/cart")
          IconCart(class="w-full h-full text-gray-500")
          p(class="absolute top-[0.6rem]  text-white") {{cartStore.getCartLength}}
    div(v-if="!mobileMenu && !loaded" class="flex space-x-3 w-full justify-end items-center")
      <LanguageSwitcher  />
      
      div(v-show="route.name!=='cart'" class='hidden md:flex relative w-[13.3rem] h-[3.1rem] border-[1.2px] mb-2 p-[0.5rem] space-x-2 border-[#47C1BF] items-center justify-center  ')
        ClientOnly(placeholder="Loading...")
          div(class="w-12 h-12 flex items-center justify-center")
            IconCart(class="w-full h-full text-gray-500")
            p(class="absolute top-[0.9rem]  text-white") {{cartStore.getCartLength}}
          
          p ({{cartStore.getCartTotal}}{{ store.getCurrency }})
          IconDown(@click="openCartDropdown" class="text-gray-500 w-5 h-5 hover:cursor-pointer")
          NuxtLink(to="/cart" class="h-full w-[8rem] ")
            button( class='w-full h-full text-center bg-[#DB2878] hover:bg-[#47C1BF] smooth-color text-white')  {{$t('components.navbar.cart').toUpperCase()}} 
          CartDropdown(class="hidden")

      div(v-show="route.name=='cart'" class='hidden md:flex relative w-[13.3rem] h-[3.1rem] border-[1.2px] mb-2 p-[0.5rem] space-x-2 border-gray-200 items-center justify-center  ')
        p asds
        
        
        hr(class="border-1 border-gray-100 w-full")
  div#navbar-navigation(class="text-lg font-itim bg-[#F4F6F8] text-black flex items-center justify-center w-full h-[3rem] md:px-16  gap-x-4")
    NavDropdown#dropdown-1(@click="openDropdown('1')" class="dropdown-hidden hidden hover:flex absolute top-[6.90rem] left-0 z-40")
   

    div(class="h-full")
      NuxtLink(@mouseenter="openDropdown('1')" @mouseleave="closeDropdown('1')" class="group h-full relative flex items-center justify-center" to="/")
        div(class="bg-transparent smooth-color group-hover:bg-black h-[0.24rem]  w-full absolute bottom-0")
        p {{$t('components.navbar.products').toUpperCase()}}

    div.relative(class="h-full")
      NuxtLink(@mouseenter="openDropdown('2')" @mouseleave="closeDropdown('2')" class="h-full group flex items-center justify-center" to="/")
        p {{$t('components.navbar.home').toUpperCase()}}
        div(class="bg-transparent smooth-color group-hover:bg-black h-[0.24rem]  w-full absolute bottom-0")
      NavSmallDropdown#dropdown-2(@click="openDropdown('2')" class="dropdown-hidden hidden hover:flex absolute top-[2.05rem] left-0 z-40")
    div(class="h-full")
      NuxtLink(class=" relative h-full group flex items-center justify-center" to="/")
        div(class="bg-transparent smooth-color group-hover:bg-black h-[0.24rem]  w-full absolute bottom-0")
     
        p {{$t('components.navbar.contact').toUpperCase()}}
    div(class="h-full")
      NuxtLink(class=" relative h-full group flex items-center justify-center" to="/")
        div(class="bg-transparent smooth-color group-hover:bg-black h-[0.24rem]  w-full absolute bottom-0")
     
        p CUSTOM DESIGN 
  

  
    </template>

<script lang="ts" setup>
import IconHouse from "~icons/fa-solid/home";
import IconCart from "~icons/ph/shopping-cart-simple-fill";
import IconDown from "~icons/material-symbols/expand-circle-down-rounded";
import EmailIcon from "~icons/mi/email";
import MenuIcon from "~icons/material-symbols/menu-rounded";
import { onMounted } from "vue";
import { useCartStore } from "../../stores/Cart";
import { useMainStore } from "../../stores/Main";

let store = useMainStore();
const mobileMenu = computed(() => store.getIsMobileNavbarOpen);
const loaded = ref(false);

const route = useRoute();
const router = useRouter();
const locale = useState<string>("locale.setting");
const { t } = useLang();

let cartStore: any = ref(useCartStore());

cartStore.value = useCartStore();
store = useMainStore();

const isRouteRestriceted = computed(() => {
  if (
    route.name == "cart" ||
    route.name == "index" ||
    route.name == "configurator"
  )
    return false;
  else return true;
});

const closeMobileNavbar = () => {
  store.hideMobileNavbar();
};

const showMobileNavbar = () => {
  loaded.value = true;
  store.showMobileNavbar();
  console.log(store.getIsMobileNavbarOpen);
};

const openCartDropdown = () => {
  const cartDropdown = document.getElementById("cart-dropdown") as HTMLElement;
  cartDropdown.classList.toggle("cart-dropdown-visible");
};

const scrollToAbout = () => {
  const about = document.getElementById("navbar");
  about?.scrollIntoView({ behavior: "smooth" });
};

const scrollToContact = () => {
  const contact = document?.getElementById("contact");
  contact?.scrollIntoView({ behavior: "auto" });
  contact?.classList.add("shake");
};

const openDropdown = (dropdownName: string) => {
  if (dropdownName === "1")
    document.getElementById("dropdown-1")?.classList.add("dropdown-visible");
  else if (dropdownName === "2")
    document.getElementById("dropdown-2")?.classList.add("dropdown-visible");
};

const closeDropdown = (dropdownName: string) => {
  if (dropdownName === "1")
    document.getElementById("dropdown-1")?.classList.remove("dropdown-visible");
  else if (dropdownName === "2")
    document.getElementById("dropdown-2")?.classList.remove("dropdown-visible");
};
const toContact = () => {
  router.push({ name: "index" });
  setTimeout(() => {
    scrollToContact();
  }, 100);
};
</script>

<style lang="sass">
.smooth-color
  -webkit-transition: background 0.3s
  transition: background 0.3s
  cursor: pointer



#navbar


    a:hover
      cursor: pointer
      color: green

.shake
  animation-name: shake
  animation-duration: 2s


@keyframes shake
  0%
    transform: translate(1px, 1px) rotate(0deg)
  10%
    transform: translate(-1px, -2px) rotate(-1deg)
  20%
    transform: translate(-3px, 0px) rotate(1deg)
  30%
    transform: translate(3px, 2px) rotate(0deg)
  40%
    transform: translate(1px, -1px) rotate(1deg)
  50%
    transform: translate(-1px, 2px) rotate(-1deg)
  60%
    transform: translate(-3px, 1px) rotate(0deg)
  70%
    transform: translate(3px, 1px) rotate(-1deg)
  80%
    transform: translate(-1px, -1px) rotate(1deg)
  90%
    transform: translate(1px, 2px) rotate(0deg)
  100%
    transform: translate(1px, -2px) rotate(-1deg)

.cart-dropdown-hidden
  display: none

.cart-dropdown-visible
  display: flex
  animation: rotateMenu 300ms ease-in-out forwards
  transform-origin: top center

.dropdown-hidden
  display: none

.dropdown-visible
  display: flex
  animation: growDown 200ms ease-in-out forwards
  transform-origin: top center


@keyframes rotateMenu
  0%
    transform: rotateX(-90deg)

  70%
    transform: rotateX(20deg)

  100%
    transform: rotateX(0deg)



@keyframes growDown
    0%
        transform: scaleY(0)


    100%
        transform: scaleY(1)
</style>
