import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import ProductList from '../components/productList/productList';
import { fetchProductsByCategory } from '../services/fetchProductsByCategory';
import Category from '../components/category/category';

export interface ICategoryPageProps {}

export default function CategoryPage(props: ICategoryPageProps) {
  const { category = '' } = useParams();

  const {
    data: productsData,
    isLoading,
    isError
  } = useQuery({
    queryFn: () => fetchProductsByCategory(category),
    queryKey: ['category', category]
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred</div>;
  }

  if (productsData?.length === 0) {
    return <div>No Products Found</div>;
  }

  return productsData && <Category category={category} productData={productsData} />;
}
