import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';

import { IChangeImageProps, IImageSlider } from './types';
import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWraooer,
  CarImage,
} from './styles';

const ImageSlider: React.FC<IImageSlider> = ({ imageUrl }) => {
  const [indexImage, setIndexImage] = useState(0);

  const indexChange = useRef((info: IChangeImageProps) => {
    setIndexImage(info.viewableItems[0].index!);
  });

  return (
    <Container>
      <ImageIndexes>
        {imageUrl.map((_, index) => (
          <ImageIndex active={index === indexImage} key={String(index)} />
        ))}
      </ImageIndexes>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChange.current}
        data={imageUrl}
        keyExtractor={key => key}
        renderItem={({ item }) => (
          <CarImageWraooer>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWraooer>
        )}
      />
    </Container>
  );
};

export default ImageSlider;
