import NavSlider, { INavSliderLink } from '../navSlider/navSlider';
import styles from './homeNavSlider.module.scss';

export interface IHomeNavSliderProps {}

export default function HomeNavSlider(props: IHomeNavSliderProps) {
  const links: INavSliderLink[] = [
    { label: 'Featured', url: '/category/featured' },
    { label: 'Chairs', url: '/category/chairs' },
    { label: 'Tables', url: '/category/tables' },
    { label: 'Couches', url: '/category/couches' },
    { label: 'Drawers', url: '/category/drawers' }
  ];

  return (
    <div className={styles.homeNavSlider}>
      <NavSlider links={links} />
    </div>
  );
}
