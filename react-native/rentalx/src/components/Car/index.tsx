import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useNetInfo } from '@react-native-community/netinfo';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { Car as ModelCar } from '../../database/models/car';
import { Container, Details, Brand, Name, About, Rent, Period, Price, Type, CarImage } from './styles';

interface ICarProps extends RectButtonProps {
  data: ModelCar;
}

export const Car: React.FC<ICarProps> = ({ data, ...rest }) => {
  const { isConnected } = useNetInfo();
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${isConnected === true ? data.price : '...'}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
};
