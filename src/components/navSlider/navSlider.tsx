import styles from './navSlider.module.scss';
import NavSliderCard from './navSliderCard';
import { navSlideCardResolver } from './resolvers/navSliderCardResolver';

export interface INavSliderLink {
  label: string;
  url: string;
}

export interface INavSliderProps {
  links: INavSliderLink[];
}

export default function NavSlider({ links }: INavSliderProps) {
  const navSliderCardsData = links.map((link) => navSlideCardResolver(link));
  return (
    <div className={styles.navSlider}>
      {navSliderCardsData.map((navSliderCardData) => (
        <NavSliderCard navSliderCardData={navSliderCardData} />
      ))}
    </div>
  );
}
