import { defineStore } from "pinia";
import { createPinia } from "pinia";
import { useStorage } from "@vueuse/core";
import piniaPersist from "pinia-plugin-persist";

const pinia = createPinia();
pinia.use(piniaPersist);

// @ts-ignore: Unreachable code error
export const useUserStore = defineStore("cart", {
  state: () => {
    return {
      username: useStorage("username", ""),
      email: useStorage("email", ""),
      token: useStorage("token", ""),
      isLogged: useStorage("isLogged", false),
    };
  },
  getters: {
    getUsername(state) {
      return state.username;
    },
    getEmail(state) {
      return state.email;
    },
    getToken(state) {
      return state.token;
    },
    getIsLogged(state) {
      return state.isLogged;
    },
  },
  actions: {
    setUsername(username: string) {
      this.username = username;
    },
    setEmail(email: string) {
      this.email = email;
    },
    setToken(token: string) {
      this.token = token;
    },
    setIsLogged(bool: boolean) {
      this.isLogged = bool;
    },
  },

  persist: {
    enabled: true,
  },
});

export default pinia;
