import styles from './productListCard.module.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IProductList_CardData } from './resolvers/productListCardResolver';
import { HeartIconOutline, HeartIconSolid } from '../utils/icons/icons';
import { favProductContext } from '../../context/favProductsContextProvider';

export interface IProductListCardProps {
  productListCardData: IProductList_CardData;
}

export default function ProductListCard({ productListCardData }: IProductListCardProps) {
  const { toggleFavProduct } = useContext(favProductContext);
  const { id, image, title, price, previousPrice, isFavorite } = productListCardData;

  const handleFavBtn = () => {
    toggleFavProduct(id);
  };

  return (
    <div className={styles.productListCard}>
      <button onClick={handleFavBtn} className={styles.productListCard_favBtn}>
        {isFavorite ? <HeartIconSolid className={styles.heartSolidIcon} /> : <HeartIconOutline className={styles.heartOutlineIcon} />}
      </button>
      <Link to={`/product/${id}`}>
        <div className={styles.productListCard_image}>
          <img src={image} alt="Product image" />
        </div>
      </Link>

      <div className={styles.productListCard_info}>
        <Link to={`/product/${id}`}>
          <h3>{title}</h3>
        </Link>

        <p className={styles.productListCard_price}>
          <span>${price}</span>
        </p>
        {previousPrice && (
          <p>
            previous price: <span>${previousPrice}</span>
          </p>
        )}
      </div>
    </div>
  );
}
