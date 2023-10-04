import { IProduct } from '../../../firestore/schema';

export interface IProduct_GalleryData {
  images: string[];
}

export function productGalleryResolver(productData: IProduct, variantIndex: number): IProduct_GalleryData {
  const images = productData.variants[variantIndex].images;
  return { images };
}
