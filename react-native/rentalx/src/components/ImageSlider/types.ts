import { ViewToken } from 'react-native';

export interface IImageSlider {
  imageUrl: {
    id: string;
    photo: string;
  }[];
}

export interface IChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
