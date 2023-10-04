import { IProduct } from '../../../firestore/schema';

export interface ISelectorBtn {
  title: string;
  image: string;
  isActive: boolean;
}

export interface IProduct_SelectorData {
  selectorBtns: ISelectorBtn[];
}

export function productSelectorResolver(productData: IProduct, variantIndex: number): IProduct_SelectorData {
  const selectorBtns = productData.variants.map((variant, index) => {
    return {
      title: variant.name,
      image: variant.images[0],
      isActive: variantIndex === index
    };
  });

  return { selectorBtns };
}
