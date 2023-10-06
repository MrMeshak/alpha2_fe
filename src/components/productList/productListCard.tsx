import { Link } from 'react-router-dom';
import styles from './productListCard.module.scss';
import { IProductList_CardData } from './resolvers/productListCardResolver';

export interface IProductListCardProps {
  productListCardData: IProductList_CardData;
}

export default function ProductListCard({ productListCardData }: IProductListCardProps) {
  const { id, image, title, price, previousPrice } = productListCardData;

  return (
    <div className={styles.productListCard}>
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
