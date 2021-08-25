import { RectButtonProps } from 'react-native-gesture-handler';

export interface IButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

export interface IContainerProps {
  color?: string;
}
