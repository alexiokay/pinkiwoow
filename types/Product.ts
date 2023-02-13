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
  slug: string;
};

export type Rating = {
  id?: number;
  rating: number;
  user: string;
  review: string;
  product: string;
  product_slug: string;
  created_at: string;
  updated_at?: string;
};
export type SubCategory = {
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
  sub_category: SubCategory;
  rating: Rating;
  category: Object;
  quantity: number;
};
