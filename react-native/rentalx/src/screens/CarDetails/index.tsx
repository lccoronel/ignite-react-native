import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';
import { useNetInfo } from '@react-native-community/netinfo';

import BackButton from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import Button from '../../components/Button';
import { ICarDetaisParams } from './types';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { ICarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import {
  Container,
  Header,
  CarImages,
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
  OfflineInfo,
} from './styles';

export const CarDetails: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const { colors } = useTheme();
  const { isConnected } = useNetInfo();
  const { params } = useRoute();
  const { car } = params as ICarDetaisParams;

  const [carUpdated, setCarUpdated] = useState<ICarDTO>({} as ICarDTO);
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return { height: interpolate(scrollY.value, [0, 200], [200, 70], Extrapolate.CLAMP) };
  });

  const sliderStyleAnimation = useAnimatedStyle(() => {
    return { opacity: interpolate(scrollY.value, [0, 50, 200], [1, 0.5, 0], Extrapolate.CLAMP) };
  });

  useEffect(() => {
    if (isConnected === true) {
      api.get(`/cars/${car.id}`).then(response => setCarUpdated(response.data));
    }
  }, [isConnected, car.id]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <Animated.View
        style={[
          headerStyleAnimation,
          {
            position: 'absolute',
            overflow: 'hidden',
            zIndex: 1,
            backgroundColor: colors.background_secondary,
          },
        ]}
      >
        <Header>
          <BackButton onPress={goBack} />
        </Header>

        <CarImages style={sliderStyleAnimation}>
          <ImageSlider imageUrl={carUpdated.photos || [{ id: car.thumbnail, photo: car.thumbnail }]} />
        </CarImages>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Detail>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>RS {isConnected === true ? car.price : '...'}</Price>
          </Rent>
        </Detail>

        {carUpdated.accessories && (
          <Accessories>
            {carUpdated.accessories.map(accessory => (
              <Accessory icon={getAccessoryIcon(accessory.type)} name={accessory.name} key={accessory.type} />
            ))}
          </Accessories>
        )}

        <About>{car.about}</About>
      </Animated.ScrollView>

      <Footer>
        <Button title="Confirmar" onPress={() => navigate('Schedulling', { car })} enabled={isConnected === true} />

        {isConnected === false && (
          <OfflineInfo>Conecte-se a internet para ver mais detalhes e agendar seu carro</OfflineInfo>
        )}
      </Footer>
    </Container>
  );
};
