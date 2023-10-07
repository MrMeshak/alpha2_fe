import { IProduct } from '../../firestore/schema';
import NavSlider from '../navSlider/navSlider';
import ProductList from '../productList/productList';
import HomeHero from './homeHero';
import HomeNavSlider from './homeNavSlider';
import HomeProductList from './homeProductList';
import HomeProductListSlider from './homeProductListSlider';
import { homeProductListResolver } from './resolvers/homeProductListResolver';

export interface IHomeProps {
  productsData: IProduct[];
  productsFeaturedData: IProduct[];
}

export default function Home({ productsData }: IHomeProps) {
  const homeProductsListData = homeProductListResolver(productsData);

  return (
    <div>
      <HomeHero />
      <HomeProductListSlider />
      <HomeNavSlider />
      {productsData && <HomeProductList homeProductsListData={homeProductsListData} />}
    </div>
  );
}
