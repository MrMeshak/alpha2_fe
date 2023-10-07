import { INavSliderLink } from '../navSlider';

export interface INavSlider_CardData {
  link: { label: string; url: string };
}

export function navSlideCardResolver(link: INavSliderLink) {
  return {
    link: link
  };
}
