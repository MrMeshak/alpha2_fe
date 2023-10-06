import styles from './category.module.scss';
import { IProduct } from '../../firestore/schema';
import ProductList from '../productList/productList';
import CategoryHeader from './categoryHeader';
import { categoryHeaderResolver } from './resolvers/categoryHeaderResolver';

export interface ICategoryProps {
  category: string;
  productData: IProduct[];
}

export default function Category({ category, productData }: ICategoryProps) {
  const categoryHeaderData = categoryHeaderResolver(category);

  return (
    <div className={styles.category}>
      <CategoryHeader categoryHeaderData={categoryHeaderData} />
      <div className={styles.category_productListContainer}>
        <ProductList productsData={productData} />
      </div>
    </div>
  );
}
