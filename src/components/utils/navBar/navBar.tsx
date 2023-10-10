import { Link } from 'react-router-dom';
import styles from './navBar.module.scss';
import { HeartIconOutline, HeartIconSolid, ShoppingBag } from '../icons/icons';

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBar_logo}>α</div>
      <div className={styles.navBar_links}>
        <Link to="/">
          <HeartIconOutline /> (5)
        </Link>
        <Link to="/">
          <ShoppingBag />
          (5)
        </Link>
      </div>
    </div>
  );
}
