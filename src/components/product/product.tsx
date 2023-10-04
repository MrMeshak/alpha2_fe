import styles from './product.module.scss';
import { useState } from 'react';
import { IProduct } from '../../firestore/schema';
import ProductSlider from './productSlider';
import ProductHeader from './productHeader';
import { productHeaderResolver } from './resolvers/productHeaderResolver';
import { productSliderResolver } from './resolvers/productSliderResolver';
import { productInfoResolver } from './resolvers/productInfoResolver';
import ProductInfo from './productInfo';
import ProductSelector from './productSelector';
import { productSelectorResolver } from './resolvers/productSelectorResolver';
import ProductForm from './productForm';
import { productFormResolver } from './resolvers/productFormResolver';
import ProductGallery from './productGallery';
import { productGalleryResolver } from './resolvers/productGalleryResolver';

export interface IProductProps {
  productData: IProduct;
}

export default function Product({ productData }: IProductProps) {
  const [variantIndex, setVariantIndex] = useState(0);
  const productGalleryData = productGalleryResolver(productData, variantIndex);
  const productSliderData = productSliderResolver(productData, variantIndex);
  const productSelectorData = productSelectorResolver(productData, variantIndex);
  const productHeaderData = productHeaderResolver(productData, variantIndex);
  const productInfoData = productInfoResolver(productData, variantIndex);
  const productFormData = productFormResolver(productData, variantIndex);

  const handleSelection = (index: number) => {
    setVariantIndex(index);
  };

  return (
    <div className={styles.product}>
      <div className={styles.product_gallery}>
        <ProductGallery productGalleryData={productGalleryData} />
        <ProductSlider productSliderData={productSliderData} key={`productSlider-${variantIndex}`} />
      </div>
      <div className={styles.product_info}>
        <ProductSelector productSelectorData={productSelectorData} handleSelection={handleSelection} />
        <ProductHeader productHeaderData={productHeaderData} />
        <ProductInfo productInfoData={productInfoData} />
        <ProductForm productFormData={productFormData} onSubmit={() => {}} />
      </div>
    </div>
  );
}
