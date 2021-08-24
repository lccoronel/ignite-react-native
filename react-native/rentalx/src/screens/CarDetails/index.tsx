import React from 'react';

import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';

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
} from './styles';

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

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
          aspernatur fugit aliquam, voluptatem expedita, reiciendis aliquid qui
          vel totam quas repellendus laudantium sit deleniti quaerat illum
          beatae laborum recusandae quam?
        </About>
      </Content>
    </Container>
  );
};

export default CarDetails;
