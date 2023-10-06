import { Link } from 'react-router-dom';
import styles from './categoryHeader.module.scss';
import { ICategory_HeaderData } from './resolvers/categoryHeaderResolver';
import { LeftArrowIcon } from '../utils/icons/icons';

export interface ICategoryHeaderProps {
  categoryHeaderData: ICategory_HeaderData;
}

export default function CategoryHeader({ categoryHeaderData }: ICategoryHeaderProps) {
  const { title } = categoryHeaderData;

  return (
    <div className={styles.categoryHeader}>
      <Link to=".." className={styles.categoryHeader_backLink}>
        <LeftArrowIcon className={styles.categoryHeader_backIcon} strokeWidth="2" />
      </Link>
      <h1>{title}</h1>
    </div>
  );
}
