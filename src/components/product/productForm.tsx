import styles from './productForm.module.scss';
import { useState } from 'react';
import { IProduct_FormData } from './resolvers/productFormResolver';
import { MinusIcon, PlusIcon } from '../utils/icons/icons';

export interface IProductFormProps {
  productFormData: IProduct_FormData;
  onSubmit: (quantity: number) => void;
}

export default function ProductForm({ productFormData }: IProductFormProps) {
  const { submitBtn, quantityField } = productFormData;
  const maxQuantity = quantityField.max;
  const minQuantity = quantityField.min;

  const [quantityStr, setQuantityStr] = useState(minQuantity.toString());

  const handleIncrementBtn = () => {
    const parsedValue = Number(quantityStr);
    if (parsedValue < maxQuantity) {
      setQuantityStr((parsedValue + 1).toString());
    }
  };

  const handleDecrementBtn = () => {
    const parsedValue = Number(quantityStr);
    if (parsedValue > minQuantity) {
      setQuantityStr((parsedValue - 1).toString());
    }
  };

  const handleQuantityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '') {
      setQuantityStr('');
      return;
    }

    const parsedValue = Number(value);
    if (parsedValue >= minQuantity && parsedValue <= maxQuantity) {
      setQuantityStr(value);
      return;
    }
  };

  const handleQuantityBlur = () => {
    if (quantityStr === '') {
      setQuantityStr(minQuantity.toString());
    }
  };

  const handleSubmit = () => {
    console.log();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.productForm}>
      <div className={styles.quantityInputField}>
        <button onClick={handleDecrementBtn} type="button">
          <MinusIcon />
        </button>
        <input onChange={handleQuantityInputChange} onBlur={handleQuantityBlur} type="text" name="quantity" id="quantityInput" value={quantityStr} />
        <button onClick={handleIncrementBtn} type="button">
          <PlusIcon />
        </button>
      </div>
      <button className={styles.productForm_submitBtn}>{submitBtn.label}</button>
    </form>
  );
}
