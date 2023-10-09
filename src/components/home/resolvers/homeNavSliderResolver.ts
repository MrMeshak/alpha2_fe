import { INavSliderLink } from '../../navSlider/navSlider';

export interface IHome_NavSliderData {
  links: INavSliderLink[];
}

export function homeNavSliderResolver(): IHome_NavSliderData {
  return {
    links: [
      { label: 'Featured', url: '/category/featured' },
      { label: 'Chairs', url: '/category/chairs' },
      { label: 'Tables', url: '/category/tables' },
      { label: 'Couches', url: '/category/couches' },
      { label: 'Drawers', url: '/category/drawers' }
    ]
  };
}
