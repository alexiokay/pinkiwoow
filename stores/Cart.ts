import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import uniqid from "uniqid";
import { useStorage } from "@vueuse/core";
import { useProductsStore } from "@/stores/Products";

const pinia = createPinia();
const productsStore = useProductsStore();
pinia.use(piniaPersist);

export type CartItem = {
  id: any;
  title: string;
  price: number;
  price_pln: number;
  quantity: number;
  image: string;
  stripePriceId: string;
};

type StrawTote = {
  id: 0;
  title: "Straw Tote";
  price: 110;
  quantity: number;
  image: "/images/products/strawtote2.png";
  stripePriceId: string;
};

type StrawBox = {
  id: 0;
  title: "Straw Tote";
  price: 0.5;
  quantity: number;
  image: "/images/products/strawbox.png";
  stripePriceId: string;
};

type StrawShop = {
  id: 0;
  title: "StrawShop";
  price: 250;
  quantity: number;
  image: "/images/products/strawShop.png";
  stripePriceId: string;
};

type StrawStore = {
  id: 0;
  title: "Straw Store";
  price: 300;
  quantity: number;
  image: "/images/products/strawWarehouse.png";
  stripePriceId: string;
};
// @ts-ignore: Unreachable code error
export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      initialized: useStorage("initialized", false),
      // all these properties will have their type inferred automatically
      cart: useStorage("cart", [
        {
          id: uniqid(),
          title: "Koszulka",
          price: 100,
          price_pln: 100,
          quantity: 1,
          image: "https://picsum.photos/200",
        },
        {
          id: uniqid(),
          title: "Koszulka",
          price: 100,
          price_pln: 100,
          quantity: 1,
          image: "https://picsum.photos/200",
        },
      ] as Array<CartItem>),
    };
  },
  getters: {
    getCart(state) {
      return state.cart;
    },
    getCartTotal(state) {
      let response = null;
      if (productsStore.getCurrency === "PLN") {
        response = state.cart.reduce((total, item) => {
          return total + item.price_pln * item.quantity;
        }, 0);
      } else {
        response = state.cart.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
      }
      return response;
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

    addToCart(item: CartItem) {
      const cartItem = this.cart.find(
        (cartItem) => cartItem.title === item.title
      );
      if (cartItem) {
        cartItem.quantity += 1;
        console.log(cartItem);
        console.log(
          this.cart.find((cartItem) => cartItem.title === item.title)
        );
      } else {
        this.cart.push(item);
      }
    },
    removeFromCart(_item: any) {
      console.log(_item);
      this.cart = this.cart.filter((item) => {
        return item.id != _item;
      });
      console.log(this.cart);
    },

    increaseItemQuantity(id: any) {
      const item = this.cart.find((item) => item.id === id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseItemQuantity(id: any) {
      const item = this.cart.find((item) => item.id === id);
      if (item && item.quantity > 2) {
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
