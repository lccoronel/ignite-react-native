import React from 'react';

import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';

import { Container, Header, CarImages } from './styles';

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
    </Container>
  );
};

export default CarDetails;
