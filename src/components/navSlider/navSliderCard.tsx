import styles from './navSliderCard.module.scss';
import { Link } from 'react-router-dom';
import { INavSlider_CardData } from './resolvers/navSliderCardResolver';
import { ArrowRightCircleIcon, LeftArrowIcon, RightArrowSquareIcon } from '../utils/icons/icons';

export interface INavSliderCardProps {
  navSliderCardData: INavSlider_CardData;
}

export default function NavSliderCard({ navSliderCardData }: INavSliderCardProps) {
  const { link } = navSliderCardData;

  return (
    <Link className={styles.navSliderCard} to={link.url}>
      <h3>{link.label}</h3>
      <RightArrowSquareIcon />
    </Link>
  );
}
