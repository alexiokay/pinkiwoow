type Image = {
  url: string;
  full_url: string;
  width: number;
  height: number;
  alt: string;
} | null;

export type SlideType = {
  title: string;
  description: string;
  image: Image;
  image2: Image;
  image3: Image;
  price?: number;
};
