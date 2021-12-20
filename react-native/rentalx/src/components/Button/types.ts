import { RectButtonProps } from 'react-native-gesture-handler';

export interface IButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export interface IContainerProps {
  color?: string;
  loading: boolean;
}

export interface IButtonTextProps {
  light?: boolean;
}
