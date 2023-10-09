import styles from './productListSlider.module.scss';
import { IProduct } from '../../firestore/schema';
import ProductListCard from '../productList/productListCard';
import { productListCardDataResolver } from '../productList/resolvers/productListCardResolver';
import { useContext } from 'react';
import { favProductContext } from '../../context/favProductsContextProvider';

export interface IProductListSliderProps {
  productsData: IProduct[];
}

export default function ProductListSlider({ productsData }: IProductListSliderProps) {
  const { favProductIds } = useContext(favProductContext);

  const productCardDataArr = productsData.map((productsData) => productListCardDataResolver(productsData, favProductIds));

  return (
    <div className={styles.productListSlider}>
      {productCardDataArr.map((productListCardData) => (
        <ProductListCard productListCardData={productListCardData} />
      ))}
    </div>
  );
}
