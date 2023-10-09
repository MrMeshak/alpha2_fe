import { useQueries } from '@tanstack/react-query';
import { fetchProducts } from '../services/fetchProducts';
import { fetchProductsByCategory } from '../services/fetchProductsByCategory';
import { IProduct } from '../firestore/schema';
import Home from '../components/home/home';
import { products } from '../firestore/seed/data/products';

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  // const queryResults = useQueries({
  //   queries: [
  //     { queryKey: ['products'], queryFn: () => fetchProducts() },
  //     { queryKey: ['products', 'featured'], queryFn: () => fetchProductsByCategory('featured') }
  //   ]
  // });

  // if (queryResults.some((queryResult) => queryResult.isLoading)) {
  //   return <div>Loading ...</div>;
  // }

  // if (queryResults.some((queryResult) => queryResult.isError)) {
  //   return <div>Error occurred</div>;
  // }

  // const productsData = queryResults[0].data ?? [];
  // const productsFeaturedData = queryResults[1].data ?? [];

  return <Home productsData={products} productsFeaturedData={products} />;
}
