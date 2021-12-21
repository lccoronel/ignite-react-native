import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';

import { IChangeImageProps, IImageSlider } from './types';
import { Container, ImageIndexes, CarImageWraooer, CarImage } from './styles';
import { Bullet } from '../Bullet';

const ImageSlider: React.FC<IImageSlider> = ({ imageUrl }) => {
  const [indexImage, setIndexImage] = useState(0);

  const indexChange = useRef((info: IChangeImageProps) => {
    setIndexImage(info.viewableItems[0].index!);
  });

  return (
    <Container>
      <ImageIndexes>
        {imageUrl.map((_, index) => (
          <Bullet active={index === indexImage} key={String(index)} />
        ))}
      </ImageIndexes>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChange.current}
        data={imageUrl}
        keyExtractor={key => key.id}
        renderItem={({ item }) => (
          <CarImageWraooer>
            <CarImage source={{ uri: item.photo }} resizeMode="contain" />
          </CarImageWraooer>
        )}
      />
    </Container>
  );
};

export default ImageSlider;
