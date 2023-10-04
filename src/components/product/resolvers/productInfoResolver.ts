import { IProduct } from '../../../firestore/schema';

export interface IProduct_InfoData {
  description: string;
}

export function productInfoResolver(productData: IProduct, variantIndex: number): IProduct_InfoData {
  const description = productData.variants[variantIndex].description;
  return { description };
}
