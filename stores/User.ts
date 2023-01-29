import { defineStore } from "pinia";
import { createPinia } from "pinia";
import { useStorage } from "@vueuse/core";
import piniaPersist from "pinia-plugin-persist";

const pinia = createPinia();
pinia.use(piniaPersist);

// @ts-ignore: Unreachable code error
export const useUserStore = defineStore("User", {
  state: () => {
    return {
      username: useStorage("username", ""),
      email: useStorage("email", ""),
      token: useStorage("token", ""),
      isLogged: useStorage("isLogged", false),
      favourites: useStorage("favourites", [] as Array<number>),
      shippings: useStorage("shippings", [] as Array<Object>),
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
    getFavourites(state) {
      return state.favourites;
    },
    getShippings(state) {
      return state.shippings;
    },
    getShippingById(state) {
      return (id: number) => {
        return state.shippings.find((shipping) => shipping.id === id);
      };
    },
    getDefaultShipping(state) {
      return state.shippings.find((shipping) => shipping.is_default === true);
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
    logout() {
      this.username = "";
      this.email = "";
      this.token = "";
      this.isLogged = false;
      this.favourites = [];
      this.shippings = [];
    },
    setFavourites(favourites: Array<number>) {
      this.favourites = favourites;
    },
    setShippings(shippings: Array<Object>) {
      this.shippings = shippings;
    },
    addShipping(shipping: Object) {
      this.shippings.push(shipping);
    },
  },

  persist: {
    enabled: true,
  },
});

export default pinia;
