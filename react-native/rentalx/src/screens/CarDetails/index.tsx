import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Accessory from '../../components/Accessory';
import Button from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import { ICarDTO } from '../../dtos/CarDTO';

import {
  Container,
  Header,
  CarImages,
  Content,
  Detail,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles';

interface Params {
  car: ICarDTO;
}

const CarDetails: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack} />
      </Header>

      <CarImages>
        <ImageSlider imageUrl={[car.thumbnail!]} />
      </CarImages>

      <Content>
        <Detail>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>RS {car.rent.price}</Price>
          </Rent>
        </Detail>

        <Accessories>
          {car.accessories.map(accessory => (
            <Accessory
              icon={SpeedSvg}
              name={accessory.name}
              key={accessory.type}
            />
          ))}
        </Accessories>

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
          aspernatur fugit aliquam, voluptatem expedita, reiciendis aliquid qui
          vel totam quas repellendus laudantium sit deleniti quaerat illum
          beatae laborum recusandae quam?
        </About>
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={() => navigate('Schedulling')} />
      </Footer>
    </Container>
  );
};

export default CarDetails;
