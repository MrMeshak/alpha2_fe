import styles from './productList.module.scss';
import { IProduct } from '../../firestore/schema';
import ProductListCard from './productListCard';
import { productListCardDataResolver } from './resolvers/productListCardResolver';
import { useContext } from 'react';
import { favProductContext } from '../../context/favProductsContextProvider';

export interface IProductListProps {
  productsData: IProduct[];
}

export default function ProductList({ productsData }: IProductListProps) {
  const { favProductIds } = useContext(favProductContext);

  const productListCardDataArr = productsData.map((productData) => productListCardDataResolver(productData, favProductIds));

  return (
    <div className={styles.productList}>
      {productListCardDataArr.map((productListCardData) => (
        <ProductListCard productListCardData={productListCardData} key={productListCardData.id} />
      ))}
    </div>
  );
}
