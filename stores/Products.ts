import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { createPinia } from "pinia";
import uniqid from "uniqid";
import { useStorage } from "@vueuse/core";
const pinia = createPinia();
import piniaPersist from "pinia-plugin-persist";
pinia.use(piniaPersist);
import type { ProductType, Category } from "@/types/Product";
import type { Currency } from "@/types/Currency";

type Mug = ProductType & {
  category: Category & {
    name: "Mugs";
  };
};
// @ts-ignore: Unreachable code error
export const useProductsStore = defineStore("Products", {
  state: () => {
    return {
      products: useStorage("products", [] as Array<any>),
      currency: useStorage("currency", "EUR" as Currency),
    };
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getMugs(state) {
      return state.products.filter((product: any) => {
        if (product.category) return product.category.name == "mug";
      });
    },
    getMousePads(state) {
      const mousePads = state.products.filter((product: any) => {
        if (product.category) return product.category.name == "mousepad";
      });
      return mousePads;
    },
    getRandomProducts(state) {
      const mugs = state.products.filter((product: any) => {
        if (product.category) return product.category.name == "mug";
      });
      const mousPads = state.products.filter((product: any) => {
        if (product.category) return product.category == "mousepad";
      });
      let randomProduct_temp = [...mugs, ...mousPads].sort(
        () => Math.random() - 0.5
      );
      randomProduct_temp = randomProduct_temp.slice(0, 9);

      //console.log(randomProduct_temp);
      return randomProduct_temp;
    },
    getCurrency(state) {
      return state.currency;
    },
  },
  actions: {
    setProducts(products: ProductType[]) {
      this.products = products;
    },
    setCurrency(iso: string, initializing: boolean = false) {
      const locale = useCookie("locale");
      if (iso !== "ZZ") {
        console.log("setting cookie");
        locale.value = iso;
      }
      iso = iso.toLowerCase();

      if (iso == "pl") this.currency = "PLN";
      else if (iso == "de") this.currency = "EUR";
      else if (iso == "gb") this.currency = "GBP";
      else if (iso == "id") this.currency = "IDR";
      else if (iso == "ja") this.currency = "JPY";
      else if (iso == "ko") this.currency = "KRW";
      else if (iso == "zh") this.currency = "CNY";
      else this.currency = "EUR";

      console.log("initializing: " + initializing);
      console.log("got iso: " + iso);
      console.log("currency set to: " + this.currency);
      console.log("locale set to: " + locale.value);

      // set currencyRate for each currency

      // this.products.forEach((product: any) => {
      //   product.price = product.price * product.currencyRate;
      // });
    },
  },

  persist: {
    enabled: true,
  },
});

export default pinia;
