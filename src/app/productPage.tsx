import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../services/fetchProduct';
import Product from '../components/product/product';

export interface IProductPageProps {}

export default function ProductPage(props: IProductPageProps) {
  const { productId = '' } = useParams();
  const {
    data: productData,
    isLoading,
    isError
  } = useQuery({
    queryFn: () => fetchProduct(productId),
    queryKey: ['product', productId]
  });

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  if (isError) {
    return <div>Error occured </div>;
  }

  return productData && <Product productData={productData} />;
}
