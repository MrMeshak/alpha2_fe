import { useEffect, useState } from 'react';
import styles from './productSlider.module.scss';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '../utils/icons/icons';
import { IProduct_SliderData } from './resolvers/productSliderResolver';

export interface IProductSliderProps {
  productSliderData: IProduct_SliderData;
}

export default function ProductSlider({ productSliderData }: IProductSliderProps) {
  const images = productSliderData.images;
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleNextBtn = () => {
    if (sliderIndex < images.length - 1) {
      setSliderIndex(sliderIndex + 1);
    }
  };

  const handlePrevBtn = () => {
    if (sliderIndex > 0) {
      setSliderIndex(sliderIndex - 1);
    }
  };

  return (
    <div className={styles.slider_container}>
      <button className={styles.slider_btn + ' ' + styles.slider_btn___prev} onClick={handlePrevBtn}>
        <ArrowLeftCircleIcon className={styles.slider_btn_icon} />
      </button>
      <button className={styles.slider_btn + ' ' + styles.slider_btn___next} onClick={handleNextBtn}>
        <ArrowRightCircleIcon className={styles.slider_btn_icon} />
      </button>
      <div className={styles.slider} style={{ transform: `translateX(${-100 * sliderIndex}%)` }}>
        {images.map((imageUrl, index) => (
          <img src={imageUrl} alt={`product image ${index}`} key={'productImageSlider' + index} />
        ))}
      </div>
      <div className={styles.slider_indicators}></div>
    </div>
  );
}
