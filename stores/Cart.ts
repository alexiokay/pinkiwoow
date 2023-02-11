import { defineStore } from "pinia";
import { createPinia } from "pinia";
import uniqid from "uniqid";
import { useStorage } from "@vueuse/core";
import { useProductsStore } from "@/stores/Products";
import piniaPersist from "pinia-plugin-persist";
import type { ProductType } from "@/types/Product";
import type { ShippingT } from "@/types/Shipping";
import type { CompanyDataT } from "@/types/Shipping";

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
  stripeProductId: string;
  select: boolean;
};

// @ts-ignore: Unreachable code error
export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      initialized: useStorage("initialized", false),
      // all these properties will have their type inferred automatically
      cart: useStorage("cart", [] as Array<CartItem>),
      tempOrder: useStorage("tempOrder", [] as any),
    };
  },
  getters: {
    getTempOrder(state) {
      return state.tempOrder;
    },
    getCart(state) {
      return state.cart;
    },
    getProductIds(state) {
      return state.cart.map((item) => item.stripeProductId);
    },
    getCartTotal(state) {
      const productsStore = useProductsStore(pinia);
      let total_price: any = null;
      console.log("getCartTotal");
      console.log(productsStore.getCurrency);
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
    setTempOrder(
      shipping: ShippingT | number,
      comment: string,
      companyData: CompanyDataT | null,
      client_secret: string
    ) {
      this.tempOrder = {
        shipping: shipping,
        comment: comment,
        company_data: companyData,
        client_secret: client_secret,
      };
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
        stripeProductId: item.price_model.product_id,
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
