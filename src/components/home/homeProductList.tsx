import styles from './homeProductList.module.scss';
import ProductList from '../productList/productList';
import { IHome_ProductListData } from './resolvers/homeProductListResolver';

export interface IHomeProductListProps {
  homeProductsListData: IHome_ProductListData;
}

export default function HomeProductList({ homeProductsListData }: IHomeProductListProps) {
  const { title, productsData } = homeProductsListData;

  return (
    <div className={styles.homeProductList}>
      <h3 className={styles.homeProductList_title}>{title}</h3>
      <ProductList productsData={productsData} />
    </div>
  );
}
