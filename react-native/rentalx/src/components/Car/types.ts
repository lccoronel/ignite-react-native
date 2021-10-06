import { RectButtonProps } from 'react-native-gesture-handler';
import { ICarDTO } from '../../dtos/CarDTO';

export interface ICarProps extends RectButtonProps {
  data: ICarDTO;
}
