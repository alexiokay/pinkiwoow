import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import uniqid from "uniqid";
import { useStorage } from "@vueuse/core";

const pinia = createPinia();
pinia.use(piniaPersist);

export const useMainStore = defineStore("Main", {
  state: () => {
    return {
      // all these properties will have their type inferred automatically

      isMobileNavbarOpen: useStorage("isMobileNavbarOpen", false),
    };
  },
  getters: {
    getIsMobileNavbarOpen(state) {
      return state.isMobileNavbarOpen;
    },
  },
  actions: {
    hideMobileNavbar() {
      this.isMobileNavbarOpen = false;
    },
    showMobileNavbar() {
      this.isMobileNavbarOpen = true;
    },
  },

  persist: {
    enabled: true,
  },
});

export default pinia;
