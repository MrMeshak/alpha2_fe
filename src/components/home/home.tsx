import { IProduct } from '../../firestore/schema';
import NavSlider from '../navSlider/navSlider';
import ProductList from '../productList/productList';
import NavBar from '../utils/navBar/navBar';
import HomeHero from './homeHero';
import HomeNavSlider from './homeNavSlider';
import HomeProductList from './homeProductList';
import HomeProductListSlider from './homeProductListSlider';
import { homeNavSliderResolver } from './resolvers/homeNavSliderResolver';
import { homeProductListResolver } from './resolvers/homeProductListResolver';
import { homeProductListSliderResolver } from './resolvers/homeProductListSliderResolver';

export interface IHomeProps {
  productsData: IProduct[];
  productsFeaturedData: IProduct[];
}

export default function Home({ productsData, productsFeaturedData }: IHomeProps) {
  const homeProductListSliderData = homeProductListSliderResolver(productsData);
  const homeNavSliderData = homeNavSliderResolver();
  const homeProductsListData = homeProductListResolver(productsData);

  return (
    <div>
      <NavBar />
      <HomeHero />
      <HomeProductListSlider homeProductListSliderData={homeProductListSliderData} />
      <HomeNavSlider homeNavSliderData={homeNavSliderData} />
      {productsData && <HomeProductList homeProductsListData={homeProductsListData} />}
    </div>
  );
}
