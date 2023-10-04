import styles from './productInfo.module.scss';
import { IProduct_InfoData } from './resolvers/productInfoResolver';

export interface IProductInfoProps {
  productInfoData: IProduct_InfoData;
}

export default function ProductInfo({ productInfoData }: IProductInfoProps) {
  const { description } = productInfoData;

  return (
    <div className={styles.productInfo}>
      <p>{description}</p>
    </div>
  );
}
