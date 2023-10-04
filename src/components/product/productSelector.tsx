import styles from './productSelector.module.scss';
import { IProduct_SelectorData } from './resolvers/productSelectorResolver';

export interface IProductSelectorProps {
  productSelectorData: IProduct_SelectorData;
  handleSelection: (index: number) => void;
}

export default function ProductSelector({ productSelectorData, handleSelection }: IProductSelectorProps) {
  const selectorBtns = productSelectorData.selectorBtns;

  const selectorBtnClasses = styles.selectorBtn;
  const selectorBtnActiveClasses = styles.selectorBtn + ' ' + styles.selectorBtn___active;

  return (
    <div className={styles.productSelector}>
      {selectorBtns.map((selectorBtn, index) => {
        return (
          <button onClick={() => handleSelection(index)} className={selectorBtn.isActive ? selectorBtnActiveClasses : selectorBtnClasses} key={`selectorBtn-${index}`}>
            <img src={selectorBtn.image} alt={selectorBtn.title} />
          </button>
        );
      })}
    </div>
  );
}
