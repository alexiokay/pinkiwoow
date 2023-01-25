import { defineStore } from "pinia";
import { createPinia } from "pinia";
import uniqid from "uniqid";
import { useStorage } from "@vueuse/core";
import { useProductsStore } from "@/stores/Products";
import piniaPersist from "pinia-plugin-persist";
import type { ProductType } from "@/types/Product";

const pinia = createPinia();

pinia.use(piniaPersist);

export type CartItem = {
  id: any;
  title: string;
  price_eur: number;
  price_pln: number;
  quantity: number;
  image: string | undefined;
  image2?: string | undefined;
  stripePriceId: string;
  select: boolean;
};

// @ts-ignore: Unreachable code error
export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      initialized: useStorage("initialized", false),
      // all these properties will have their type inferred automatically
      cart: useStorage("cart", [] as Array<CartItem>),
    };
  },
  getters: {
    getCart(state) {
      return state.cart;
    },
    getCartTotal(state) {
      const productsStore = useProductsStore(pinia);
      let total_price: any = null;

      if (productsStore.getCurrency === "PLN") {
        total_price = state.cart.reduce((total, item) => {
          return total + item.price_pln * item.quantity;
        }, 0);
      } else {
        total_price = state.cart.reduce((total, item) => {
          return total + item.price_eur * item.quantity;
        }, 0);
      }
      return total_price.toFixed(2);
    },
    getCartLength(state) {
      return state.cart.length;
    },
  },
  actions: {
    initialize() {
      // this is called when the store is initialized
      this.initialized = true;
    },

    addToCart(item: ProductType) {
      const cartItem: CartItem = {
        id: item.id,
        title: item.title,
        price_eur: item.price_model.price_eur,
        price_pln: item.price_model.price_pln,
        quantity: 1,
        image: item.image?.full_url,
        image2: item.image2?.full_url,
        stripePriceId: "nothing yet",
        select: false,
      };

      const existing_cart_item = this.cart.find(
        (cartItem) => cartItem.title === item.title
      );

      if (existing_cart_item) {
        existing_cart_item.quantity += 1;
      } else {
        this.cart.push(cartItem);
      }
    },
    removeFromCart(_item: any) {
      this.cart = this.cart.filter((item) => {
        return item.id != _item;
      });
    },

    increaseItemQuantity(id: any) {
      const item = this.cart.find((item) => item.id === id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseItemQuantity(id: any) {
      const item = this.cart.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    clearCart() {
      this.cart = [];
    },
  },

  persist: {
    enabled: true,
  },
});

export default pinia;
