import { useQuery } from 'react-query';
import { fetchProducts } from '../services/fetchProducts';
import { fetchProductsByCategory } from '../services/fetchProductsByCategory';

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  const queryProducts = useQuery({
    queryFn: () => fetchProducts(),
    queryKey: ['products']
  });

  const queryProductsFeatured = useQuery({
    queryFn: () => fetchProductsByCategory('featured'),
    queryKey: ['products', 'featured']
  });

  return <div></div>;
}
