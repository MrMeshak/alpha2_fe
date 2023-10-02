export interface IProduct {
  id: string;
  name: string;
  productType: string;
  categories: string[];
  searchTags: string[];
  variants: IVariant[];
}

export interface IVariant {
  id: string;
  name: string;
  description: string;
  price: IPrice;
  quantity: number;
  color: IColor;
  size: ISize;
  images: string[];
}

export interface IPrice {
  base: number;
  currency: string;
  discount: number;
}

export interface IColor {
  name: string;
  hex: string;
}

export interface ISize {
  l: number;
  w: number;
  h: number;
  unit: string;
}
