import { IProduct } from '../../../firestore/schema';

export interface IProduct_HeaderData {
  title: string;
  subtitle: string;
  size: string;
  price: string;
  previousPrice?: string;
  isFavorite: boolean;
}

export function productHeaderResolver(productData: IProduct, variantIndex: number, favProductIds: string[]): IProduct_HeaderData {
  const productType = productData.productType;
  const variant = productData.variants[variantIndex];

  const title = productData.name;

  const subtitleArr: string[] = [];
  subtitleArr.push(productType.charAt(0).toUpperCase() + productType.slice(1));
  subtitleArr.push(variant.name);
  const subtitle = subtitleArr.join(', ');

  const size = `${variant.size.l}x${variant.size.w}x${variant.size.h} ${variant.size.unit}`;

  let price: string;
  let previousPrice: string | undefined;
  if (variant.price.discount === 0) {
    price = (variant.price.base / 100).toFixed(2);
  } else {
    price = ((variant.price.base - variant.price.discount) / 100).toFixed(2);
    previousPrice = (variant.price.base / 100).toFixed(2);
  }

  const isFavorite = favProductIds.includes(productData.id);

  return {
    title,
    subtitle,
    size,
    price,
    previousPrice,
    isFavorite
  };
}
