import { Product } from "../.nuxt/components";
type Image = {
  url: string;
  full_url: string;
  width: number;
  height: number;
  alt: string;
} | null;

type PriceModel = {
  product_id: string;
  price_eur: number;
  price_pln: number;
  Product_type: string;
};

export type Category = {
  name: string;
  description: string;
  slug: string;
};

export type ProductType = {
  // Product
  id: number;
  title: string;
  description: string;
  image: Image;
  image2: Image;
  image3: Image;
  price_model: PriceModel;
  category: Object;
  quantity: number;
};
