import { IProduct } from '../../../firestore/schema';

export interface IProduct_SliderData {
  images: string[];
}

export function productSliderResolver(productData: IProduct, variantIndex: number): IProduct_SliderData {
  const images = productData.variants[variantIndex].images;
  return { images };
}
