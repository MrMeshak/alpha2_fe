import { IProduct } from '../../../firestore/schema';
import { IProductList_CardData, productListCardDataResolver } from '../../productList/resolvers/productListCardResolver';

export interface IHome_ProductListData {
  title: string;
  productsData: IProduct[];
}

export function homeProductListResolver(productsData: IProduct[]) {
  return {
    title: 'Products',
    productsData
  };
}
