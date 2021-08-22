import React from 'react';

import { IImageSlider } from './types';
import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWraooer,
  CarImage,
} from './styles';

const ImageSlider: React.FC<IImageSlider> = ({ imageUrl }) => {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWraooer>
        <CarImage source={{ uri: imageUrl[0] }} resizeMode="contain" />
      </CarImageWraooer>
    </Container>
  );
};

export default ImageSlider;
