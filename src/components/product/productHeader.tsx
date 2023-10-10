import styles from './productHeader.module.scss';
import { HeartOutlineIcon, HeartSolidIcon } from '../utils/icons/icons';
import { IProduct_HeaderData } from './resolvers/productHeaderResolver';

export interface IProductHeaderProps {
  productHeaderData: IProduct_HeaderData;
  handleFavBtn: () => void;
}

export default function ProductHeader({ productHeaderData, handleFavBtn }: IProductHeaderProps) {
  return (
    <div className={styles.productHeader}>
      <div className={styles.productHeader_title}>
        <h1>{productHeaderData.title.toUpperCase()}</h1>
        <button onClick={handleFavBtn} className={styles.productHeader_title_favBtn}>
          {productHeaderData.isFavorite ? <HeartSolidIcon className={styles.heartSolidIcon} /> : <HeartOutlineIcon className={styles.heartOutlineIcon} />}
        </button>
      </div>
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
