import styles from './homeHero.module.scss';
import { Link } from 'react-router-dom';

export interface IHomeHeroProps {}

export default function HomeHero(props: IHomeHeroProps) {
  return (
    <div className={styles.homeHero}>
      <img src="https://images.unsplash.com/photo-1671900599250-5f6a1ff85762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3218&q=80" alt="" />
      <h2>
        Perfect spot on the <br /> couch
      </h2>
      <Link to="/">Explore</Link>
    </div>
  );
}
