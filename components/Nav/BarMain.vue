<template lang="pug">

div#navbar-wrapper(class="z-50  overlaying drop-shadow-xl md:drop-shadow-none w-full text-gray-500 h-auto shadow-md  bg-white flex flex-col items-center justify-between lg:justify-center mx-0 ") 
  div(@click="closeMobileNavbar()" class="w-full h-screen bg-[rgba(0,0,0,0.25)] z-40 fixed top-0 block md:hidden" v-if="mobileMenu && loaded")
        ClientOnly
          MobileSideBar#mobile-menu(v-if="loaded" :class="mobileMenu? 'show-right ' : 'hide-left '" class="z-50 block md:hidden")
    
  
  div#navbar-content1(class="z-30 flex items-center justify-between w-full h-[4rem] md:h-[4.1rem] text-xs px-6 md:px-16 ")
    div#mobile-nav(class="flex md:hidden items-center space-x-2 w-[6rem] h-full")
      MenuIcon#mobile-menu-button(@click="showMobileNavbar" class=" hover:cursor-pointer w-7 h-7 text-black ")
      
    
    NavSearchBar.h-full(class='hidden md:flex w-full') 
    NuxtLink(class="select-none w-full md:ml-[7%] h-full md:h-[4.9rem] flex justify-start md:justify-center items-center" to="/")
      nuxt-img#logo(class=" h-[3.2rem] md:h-[4.9rem" sizes="sm:90px md:130px lg:150px " src='/images/pinkiwoowLogo.webp' alt="logo")
      p(class="text-2xl md:text-3xl text-pink-600 font-itim h-full items-center flex ") PinkiWoow
      <LanguageSwitcher class="h-full self-end mr-auto ml-2" />
    div(class="flex space-x-3 h-full  w-full justify-end items-center")
      
    
      

      <!-- User desktop button -->
      div#user-dropdown-wrapper(@click="openUserMobileDropdown"  @mouseenter="openUserDropdown(true)"  class="relative group hover:cursor-pointer flex   bg-white p-4 h-[3rem] lg:h-[4rem] rounded-t-lg md:hover:shadow-[0px_-3px_10px_-5px_rgb(0,0,0,0.15)]  smooth-color  items-center justify-center")
        div.dropdown-hider(:class="isUserMobileDropdown? 'hidden  ': 'md:flex'" class="absolute   top-[2.5rem] lg:top-[3.38rem] -left-[2rem] w-[4rem] h-[1rem]  bg-white z-[50] [transform:translateX(50%)]")
        UserIcon(class="h-8 w-8 text-[#DB2878] ")
        <component @close="closeUserMobileDropdown" :is="isUserDropdown ? userdropdown : null"  :class="isUserMobileDropdown? 'fixed  ': 'hidden md:-left-[13rem] lg:-left-[0rem] md:top-[3.4rem] lg:top-[4.3rem] md:absolute md:h-auto pb-4  md:w-[18.2rem] md:group-hover:flex '" class="pointer-events-auto  cursor-default  "/>
     
      NuxtLink(class="w-9 h-9 flex lg:hidden items-center justify-center relative" to="/cart")
          IconCart(class="w-full h-full text-gray-500")
          p(class="absolute top-[0.6rem]  text-white") {{cartStore.getCartLength}}
      
      div(v-show="route.name!=='cart'" class='hidden lg:flex relative w-[13.3rem] h-[3.1rem] border-[1.2px] mb-2 p-[0.5rem] space-x-2 border-[#47C1BF] items-center justify-center  ')
          div(class="w-12 h-12 flex items-center justify-center")
            IconCart(class="w-full h-full text-gray-500")
            p(class="absolute top-[0.9rem]  text-white") {{cartStore.getCartLength}}
          
          p ({{cartStore.getCartTotal}}{{ productsStore.getCurrency }})
          IconDown(@click="openCartDropdown" class="text-gray-500 w-5 h-5 hover:cursor-pointer")

          NuxtLink(to="/cart" class="h-full w-[8rem] ")
            button( class='w-full h-full text-center bg-[#DB2878] hover:bg-[#47C1BF] smooth-color text-white')  {{$t('components.navbar.cart').toUpperCase()}} 
          
          <component :is="isCartDropdown ? cartdropdown : null" />
         
      div(v-show="route.name=='cart'" class='hidden md:flex relative w-[13.3rem] h-[3.1rem] border-[1.2px] mb-2 p-[0.5rem] space-x-2 border-gray-200 items-center justify-center  ')
        p asds
        
        
        hr(class="border-1 border-gray-100 w-full")
  div#navbar-navigation(v-show="canAdditionalNavbars" :class="{'pointer-events-none': store.isOverlaying}" class=" border-[#afafaf] w-[95%] text-lg font-itim bg-white drop-shadow-xs text-black hidden md:flex items-center justify-center h-[3rem] md:px-16  gap-x-4")
    LazyHydrate(when-idle)
      NavDropdown#dropdown-1(@click="openDropdown('1')" @mouseenter="openDropdown('1')"  @mouseleave="closeDropdown('1')" class="dropdown-hidden hidden hover:flex absolute top-[6rem] left-0 z-40")
   

    div(class="h-full group")
      NuxtLink(@mouseenter="openDropdown('1')" @mouseleave="closeDropdown('1')"  class="group h-full relative flex items-center justify-center" to="/")
        div(:class="{'bg-black': isDropdown1Open }" class="bg-transparent smooth-color group-hover:bg-black h-[0.24rem]  w-full absolute bottom-0")
        p(class="text-blue-900")   {{$t('components.navbar.products').toUpperCase()}}

    div.relative(class="h-full group")
      NuxtLink(@mouseenter="openDropdown('2')" @mouseleave="closeDropdown('2')" class="h-full flex items-center justify-center" to="/")
        p(class="text-blue-900")  {{$t('components.navbar.home').toUpperCase()}}
        div(class="bg-transparent smooth-color group-hover:bg-black h-[0.24rem]  w-full absolute bottom-0")
      NavSmallDropdown#dropdown-2(@click="openDropdown('2')" class="dropdown-hidden hidden hover:flex absolute top-[2rem] left-0 z-40")
    div(class="h-full")
      NuxtLink(class=" relative h-full group flex items-center justify-center" to="/")
        div(class="bg-transparent smooth-color group-hover:bg-black h-[0.24rem]  w-full absolute bottom-0")
     
        p(class="text-blue-900") {{$t('components.navbar.contact').toUpperCase()}}
    div(class="h-full")
      NuxtLink(class=" relative h-full group flex items-center justify-center" to="/")
        div(class="bg-transparent smooth-color group-hover:bg-black h-[0.24rem]  w-full absolute bottom-0")
     
        p(class="text-blue-900")  CUSTOM DESIGN 
  

  
    </template>

<script lang="ts" setup>
//* Importing section
//?import IconHouse from "~icons/fa-solid/home";
import IconCart from "~icons/ph/shopping-cart-simple-fill";
import IconDown from "~icons/material-symbols/expand-circle-down-rounded";
//?import EmailIcon from "~icons/mi/email";
import MenuIcon from "~icons/material-symbols/menu-rounded";
import UserIcon from "~icons/heroicons/user-circle";

import { useCartStore } from "@/stores/Cart";
import { useMainStore } from "@/stores/Main";
import { useProductsStore } from "@/stores/Products";

//* Running stores section
let cartStore: any = useCartStore();
const testCartState = useCart();
const productsStore = useProductsStore();
let store = useMainStore();

//* dynamic components section
const cartdropdown = resolveComponent("CartDropdown");
const userdropdown = resolveComponent("NavUserDropdown");

//* Helpers section
const mobileMenu = computed(() => store.getIsMobileNavbarOpen);
const loaded = ref(false);

//* Checking section
const isDropdown1Open = ref(false);
const isDropdown2Open = ref(false);
const isCartDropdown = ref(false);
const isUserDropdown = ref(false);
const isUserMobileDropdown = useState("isUserMobileDropdown", () => false);

//* router section
const route = useRoute();
const router = useRouter();
const locale = useState<string>("locale.setting");
const { t } = useLang();

//* Computed section
const canAdditionalNavbars = computed(() => {
  console.log(route.path);
  if (route.name === "login" || route.name === "register") return false;
  else return true;
});

cartStore = useCartStore();
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

//* Scroll's to section Functions
const scrollToAbout = () => {
  const about = document.getElementById("navbar");
  about?.scrollIntoView({ behavior: "smooth" });
};

const scrollToContact = () => {
  const contact = document?.getElementById("contact");
  contact?.scrollIntoView({ behavior: "auto" });
  contact?.classList.add("shake");
};

const toContact = () => {
  router.push({ name: "index" });
  setTimeout(() => {
    scrollToContact();
  }, 100);
};

//* Open/Close > dropdowns

const openDropdown = (dropdownName: string) => {
  if (dropdownName === "1")
    document.getElementById("dropdown-1")?.classList.add("dropdown-visible"),
      (isDropdown1Open.value = true);
  else if (dropdownName === "2")
    document.getElementById("dropdown-2")?.classList.add("dropdown-visible"),
      (isDropdown2Open.value = true);
};

const closeDropdown = (dropdownName: string) => {
  if (dropdownName === "1")
    document.getElementById("dropdown-1")?.classList.remove("dropdown-visible"),
      (isDropdown1Open.value = false);
  else if (dropdownName === "2")
    document.getElementById("dropdown-2")?.classList.remove("dropdown-visible"),
      (isDropdown2Open.value = false);
};

//
const openCartDropdown = async () => {
  if (!isCartDropdown.value) {
    const resolveDropdown = async () => {
      isCartDropdown.value = true;
    };
    await resolveDropdown();
  }

  const cartDropdown = document.getElementById("cart-dropdown") as HTMLElement;
  cartDropdown.classList.toggle("cart-dropdown-visible");
};

const openUserDropdown = async (bool: boolean = true) => {
  const resolveDropdown = async () => {
    if (bool) isUserDropdown.value = true;
  };
  await resolveDropdown();
  const userDropdown = document.getElementById("user-dropdown") as HTMLElement;
};

const openUserMobileDropdown = () => {
  if (window.innerWidth < 768) isUserMobileDropdown.value = true;
};
//* Open/Close < dropdowns </

//* Methods section
const closeUserMobileDropdown = () => {
  console.log("test");
  const userDropdownWrapper = document.getElementById(
    "user-dropdown-wrapper"
  ) as HTMLElement;
  userDropdownWrapper.addEventListener("click", (e) => {
    isUserMobileDropdown.value = false;
  });

  setTimeout(() => {
    userDropdownWrapper.addEventListener("click", (e) => {
      if (window.innerWidth < 768) isUserMobileDropdown.value = true;
    });
  }, 200);
};
//* Methods section </
</script>

<style lang="sass">
.smooth-color
  -webkit-transition: background 0.3s
  transition: background 0.3s




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
