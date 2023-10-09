import NavSlider, { INavSliderLink } from '../navSlider/navSlider';
import styles from './homeNavSlider.module.scss';
import { IHome_NavSliderData } from './resolvers/homeNavSliderResolver';

export interface IHomeNavSliderProps {
  homeNavSliderData: IHome_NavSliderData;
}

export default function HomeNavSlider({ homeNavSliderData }: IHomeNavSliderProps) {
  const { links } = homeNavSliderData;
  return (
    <div className={styles.homeNavSlider}>
      <NavSlider links={links} />
    </div>
  );
}
