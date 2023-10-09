import { IProduct } from '../../../firestore/schema';

export interface IHome_ProductListSliderData {
  title: string;
  productsData: IProduct[];
}

export function homeProductListSliderResolver(productsData: IProduct[]) {
  return {
    title: 'Featured',
    productsData
  };
}
