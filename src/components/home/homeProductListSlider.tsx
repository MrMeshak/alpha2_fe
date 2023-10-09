import styles from './homeProductListSlider.module.scss';
import ProductListSlider from '../productListSlider.ts/productListSlider';
import { IHome_ProductListSliderData } from './resolvers/homeProductListSliderResolver';

export interface IHomeProductListSliderProps {
  homeProductListSliderData: IHome_ProductListSliderData;
}

export default function HomeProductListSlider({ homeProductListSliderData }: IHomeProductListSliderProps) {
  const { title, productsData } = homeProductListSliderData;
  return (
    <div className={styles.homeProductListSlider}>
      <h3 className={styles.homeProductListSlider_title}>{title}</h3>
      <ProductListSlider productsData={productsData} />
    </div>
  );
}
