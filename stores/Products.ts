import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { createPinia } from "pinia";
import uniqid from "uniqid";
import { useStorage } from "@vueuse/core";
const pinia = createPinia();
import piniaPersist from "pinia-plugin-persist";
pinia.use(piniaPersist);
import type { ProductType, Category } from "@/types/Product";

type Mug = ProductType & {
  category: Category & {
    name: "Mugs";
  };
};
// @ts-ignore: Unreachable code error
export const useProductsStore = defineStore("Products", {
  state: () => {
    return {
      products: useStorage("Products", [] as ProductType[]),
    };
  },
  getters: {
    getMugs(state) {
      return state.products.filter((product: any) => {
        if (product.category) return product.category.name == "mug";
      });
    },
    getMousePads(state) {
      return state.products.filter((product: any) => {
        if (product.category) return product.category == "mousepad";
      });
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

      console.log(randomProduct_temp);
      return randomProduct_temp;
    },
  },
  actions: {
    setProducts(products: ProductType[]) {
      this.products = products;
    },
  },

  persist: {
    enabled: true,
  },
});

export default pinia;
