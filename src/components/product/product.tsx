import styles from './product.module.scss';
import { useContext, useState } from 'react';
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
import { favProductContext } from '../../context/favProductsContextProvider';

export interface IProductProps {
  productData: IProduct;
}

export default function Product({ productData }: IProductProps) {
  const { favProductIds, toggleFavProduct } = useContext(favProductContext);
  const [variantIndex, setVariantIndex] = useState(0);

  const productGalleryData = productGalleryResolver(productData, variantIndex);
  const productSliderData = productSliderResolver(productData, variantIndex);
  const productSelectorData = productSelectorResolver(productData, variantIndex);
  const productHeaderData = productHeaderResolver(productData, variantIndex, favProductIds);
  const productInfoData = productInfoResolver(productData, variantIndex);
  const productFormData = productFormResolver(productData, variantIndex);

  const handleSelection = (index: number) => {
    setVariantIndex(index);
  };

  const handleFavBtn = () => {
    toggleFavProduct(productData.id);
  };

  return (
    <>
      <div className={styles.product}>
        <div className={styles.product_gallery}>
          <ProductGallery productGalleryData={productGalleryData} />
          <ProductSlider productSliderData={productSliderData} key={`productSlider-${variantIndex}`} />
        </div>
        <div className={styles.product_info}>
          <ProductSelector productSelectorData={productSelectorData} handleSelection={handleSelection} />
          <ProductHeader handleFavBtn={handleFavBtn} productHeaderData={productHeaderData} />
          <ProductInfo productInfoData={productInfoData} />
          <ProductForm productFormData={productFormData} onSubmit={() => {}} />
        </div>
      </div>
    </>
  );
}
