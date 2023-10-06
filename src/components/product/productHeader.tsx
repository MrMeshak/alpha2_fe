import styles from './productHeader.module.scss';
import { IProduct_HeaderData } from './resolvers/productHeaderResolver';

export interface IProductHeaderProps {
  productHeaderData: IProduct_HeaderData;
}

export default function ProductHeader({ productHeaderData }: IProductHeaderProps) {
  return (
    <div className={styles.productHeader}>
      <h1>{productHeaderData.title.toUpperCase()}</h1>
      <h2>
        {productHeaderData.subtitle}, <span>{productHeaderData.size}</span>
      </h2>
      <p className={styles.productHeader_price}>
        <span>${productHeaderData.price}</span>
      </p>
      {productHeaderData.previousPrice && (
        <p className={styles.productHeader_prevPrice}>
          previous price: <span>${productHeaderData.previousPrice}</span>
        </p>
      )}
    </div>
  );
}
