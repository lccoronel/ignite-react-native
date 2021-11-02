import { ViewToken } from 'react-native';

export interface IImageSlider {
  imageUrl: string[];
}

export interface IImageIndex {
  active: boolean;
}

export interface IChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
