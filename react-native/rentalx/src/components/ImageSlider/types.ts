import { ViewToken } from 'react-native';

export interface IImageSlider {
  imageUrl: string[];
}

export interface IChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
