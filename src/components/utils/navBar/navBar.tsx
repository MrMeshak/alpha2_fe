import { Link } from 'react-router-dom';
import styles from './navBar.module.scss';
import { HeartOutlineIcon, ShoppingBagIcon } from '../icons/icons';
import { useContext } from 'react';
import { favProductContext } from '../../../context/favProductsContextProvider';

export default function NavBar() {
  const { favProductIds } = useContext(favProductContext);
  return (
    <div className={styles.navBar}>
      <div className={styles.navBar_logo}>α</div>
      <div className={styles.navBar_links}>
        <Link to="/">
          <HeartOutlineIcon /> ({favProductIds.length})
        </Link>
        <Link to="/">
          <ShoppingBagIcon />
          (5)
        </Link>
      </div>
    </div>
  );
}
