import { RectButtonProps } from 'react-native-gesture-handler';

import { ICar } from '../../dtos/Car';

export interface ICarProps extends RectButtonProps {
  data: ICar;
}
