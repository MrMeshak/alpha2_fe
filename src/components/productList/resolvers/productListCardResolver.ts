import { IProduct } from '../../../firestore/schema';

export interface IProductList_CardData {
  id: string;
  image: string;
  title: string;
  price: string;
  previousPrice?: string;
}

export function productListCardDataResolver(productData: IProduct, variantIndex: number = 0): IProductList_CardData {
  const id = productData.id;
  const variant = productData.variants[variantIndex];
  const title = productData.name;
  const image = variant.images[0];
  let price;
  let previousPrice;

  if (variant.price.discount === 0) {
    price = (variant.price.base / 100).toFixed(2);
  } else {
    price = ((variant.price.base - variant.price.discount) / 100).toFixed(2);
    previousPrice = (variant.price.base / 100).toFixed(2);
  }

  return {
    id,
    image,
    title,
    price,
    previousPrice
  };
}
