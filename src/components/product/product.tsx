import { useState } from 'react';
import { IProduct } from '../../firestore/schema';
import ProductSlider from './productSlider';

export interface IProductProps {
  productData: IProduct;
}

export default function Product({ productData }: IProductProps) {
  const [variantIndex, setVariantIndex] = useState(0);

  const variant = productData.variants[variantIndex];

  return (
    <div>
      <ProductSlider images={variant.images} />
    </div>
  );
}
