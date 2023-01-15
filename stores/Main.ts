import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import uniqid from "uniqid";
import { useStorage } from "@vueuse/core";
import type { Currency } from "@/types/Currency";
const pinia = createPinia();
pinia.use(piniaPersist);
// @ts-ignore: Unreachable code error
export const useMainStore = defineStore("Main", {
  state: () => {
    return {
      // all these properties will have their type inferred automatically

      isMobileNavbarOpen: useStorage("isMobileNavbarOpen", false),
      currency: useStorage("currency", "USD" as Currency),
    };
  },
  getters: {
    getIsMobileNavbarOpen(state) {
      return state.isMobileNavbarOpen;
    },
    getCurrency(state) {
      return state.currency;
    },
  },
  actions: {
    hideMobileNavbar() {
      this.isMobileNavbarOpen = false;
    },
    showMobileNavbar() {
      this.isMobileNavbarOpen = true;
    },
    setCurrentCurrency(currency: Currency) {
      this.currency = currency;
    },
  },

  persist: {
    enabled: true,
  },
});

export default pinia;
