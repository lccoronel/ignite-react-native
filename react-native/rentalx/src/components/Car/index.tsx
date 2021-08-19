import React from 'react';

import GasolineSVG from '../../assets/gasoline.svg';
import audiPNG from '../../assets/audi.png';
import { ICarProps } from './types';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  Carimage,
} from './styles';

const Car: React.FC<ICarProps> = ({ data }) => {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSVG />
          </Type>
        </About>
      </Details>

      <Carimage source={audiPNG} resizeMode="contain" />
    </Container>
  );
};

export default Car;
