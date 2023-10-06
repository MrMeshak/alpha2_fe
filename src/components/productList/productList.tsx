import styles from './productList.module.scss';
import { IProduct } from '../../firestore/schema';
import ProductListCard from './productListCard';
import { productListCardDataResolver } from './resolvers/productListCardResolver';

export interface IProductListProps {
  productsData: IProduct[];
}

export default function ProductList({ productsData }: IProductListProps) {
  const productListCardDataArr = productsData.map((productData) => productListCardDataResolver(productData));
  return (
    <div className={styles.productList}>
      {productListCardDataArr.map((productListCardData) => (
        <ProductListCard productListCardData={productListCardData} />
      ))}
    </div>
  );
}
