import React from 'react';

import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Accessory from '../../components/Accessory';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

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
import Button from '../../components/Button/inde';

const CarDetails: React.FC = () => {
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <CarImages>
        <ImageSlider
          imageUrl={[
            'https://img2.gratispng.com/20180204/raw/kisspng-audi-sportback-concept-car-dealership-audi-a7-audi-5a7773823e75b1.8360077315177777942559.jpg',
          ]}
        />
      </CarImages>

      <Content>
        <Detail>
          <Description>
            <Brand>Larborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>RS 500</Price>
          </Rent>
        </Detail>

        <Accessories>
          <Accessory icon={SpeedSvg} name="380km/h" />
          <Accessory icon={AccelerationSvg} name="3.2s" />
          <Accessory icon={ForceSvg} name="800 HP" />
          <Accessory icon={GasolineSvg} name="Gasolina" />
          <Accessory icon={ExchangeSvg} name="Auto" />
          <Accessory icon={PeopleSvg} name="2 pessoas" />
        </Accessories>

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
          aspernatur fugit aliquam, voluptatem expedita, reiciendis aliquid qui
          vel totam quas repellendus laudantium sit deleniti quaerat illum
          beatae laborum recusandae quam?
        </About>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
};

export default CarDetails;
