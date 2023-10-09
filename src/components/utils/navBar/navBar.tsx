import { Link } from 'react-router-dom';
import styles from './navBar.module.scss';
import { HeartIconSolid } from '../icons/icons';

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBar_logo}>α</div>
      <div>
        <Link to="/">
          <HeartIconSolid /> (5)
        </Link>
        <Link to="/">bag (5)</Link>
      </div>
    </div>
  );
}
