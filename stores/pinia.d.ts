import "pinia";

declare module "pinia" {
  export interface PiniaCustomProperties {
    setCurrency: (currency) => void;
    getCurrency: () => void;
    initialize: () => void;
  }
}
