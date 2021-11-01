import { RectButtonProps } from 'react-native-gesture-handler';

export interface IButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
}

export interface IContainerProps {
  color?: string;
}
