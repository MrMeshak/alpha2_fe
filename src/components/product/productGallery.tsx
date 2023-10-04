import styles from './productGallery.module.scss';
import { IProduct_GalleryData } from './resolvers/productGalleryResolver';

export interface IProductGalleryProps {
  productGalleryData: IProduct_GalleryData;
}

export default function ProductGallery({ productGalleryData }: IProductGalleryProps) {
  const images = productGalleryData.images;

  return (
    <div className={styles.productGallery}>
      {images.map((imageUrl, index) => (
        <img src={imageUrl} alt={`product image ${index}`} key={'productImageGallery' + index} />
      ))}
    </div>
  );
}
