import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { createPinia } from "pinia";
import uniqid from "uniqid";
import { useStorage } from "@vueuse/core";
import type { Currency } from "@/types/Currency";
const pinia = createPinia();
import piniaPersist from "pinia-plugin-persist";
pinia.use(piniaPersist);
// @ts-ignore: Unreachable code error
export const useMainStore = defineStore("Main", {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      initialized: useStorage("initialized", false),
      isMobileNavbarOpen: useStorage("isMobileNavbarOpen", false),
      currency: useStorage("currency", "EUR" as Currency),
      isLocaleSet: useStorage("isLocaleSet", false),
    };
  },
  getters: {
    getIsMobileNavbarOpen(state) {
      return state.isMobileNavbarOpen;
    },
    getCurrency(state) {
      return state.currency;
    },
    isInitiated(state) {
      return state.initialized;
    },
  },
  actions: {
    initialize() {
      // this is called when the store is initialized
      this.initialized = true;
    },
    hideMobileNavbar() {
      this.isMobileNavbarOpen = false;
    },
    showMobileNavbar() {
      this.isMobileNavbarOpen = true;
    },
    setCurrency(iso: string) {
      if (iso == "pl") this.currency = "PLN";
      else this.currency = "EUR";
    },
    setLocaleSet() {
      this.isLocaleSet = true;
    },
  },

  persist: {
    enabled: true,
  },
});

export default pinia;
