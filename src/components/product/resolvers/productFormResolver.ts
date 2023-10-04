import { IProduct } from '../../../firestore/schema';

export interface IProduct_FormData {
  quantityField: {
    label: string;
    min: number;
    max: number;
  };
  submitBtn: {
    label: string;
  };
}

export function productFormResolver(productData: IProduct, variantIndex: number) {
  const maxQuantity = productData.variants[variantIndex].quantity;

  return {
    quantityField: {
      label: 'Quantity',
      min: 1,
      max: maxQuantity
    },
    submitBtn: {
      label: 'Add to cart'
    }
  };
}
