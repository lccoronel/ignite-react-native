import { RectButtonProps } from 'react-native-gesture-handler';

export interface IButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

export interface IContainerProps {
  color?: string;
}

export interface IButtonTextProps {
  light?: boolean;
}
