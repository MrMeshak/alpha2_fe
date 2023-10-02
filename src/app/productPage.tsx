import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchProductData } from '../services/fetchProductData';
import ProductSlider from '../components/product/productSlider';
import Product from '../components/product/product';

export interface IProductPageProps {}

export default function ProductPage(props: IProductPageProps) {
  const { productId = '' } = useParams();
  const {
    data: productData,
    isLoading,
    isError,
    error
  } = useQuery({
    queryFn: () => fetchProductData(productId),
    queryKey: ['products', productId]
  });

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  if (isError) {
    return <div>Error occured </div>;
  }

  return productData && <Product productData={productData} />;
}
