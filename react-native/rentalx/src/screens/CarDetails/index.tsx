import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Accessory from '../../components/Accessory';
import Button from '../../components/Button';
import { ICarDetaisParams } from './types';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

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
} from './styles';

const CarDetails: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const { colors } = useTheme();
  const route = useRoute();
  const { car } = route.params as ICarDetaisParams;

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, [0, 200], [200, 70], Extrapolate.CLAMP),
    };
  });

  const sliderStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 50, 200], [1, 0.5, 0], Extrapolate.CLAMP),
    };
  });

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
          <ImageSlider imageUrl={car.photos} />
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
            <Price>RS {car.price}</Price>
          </Rent>
        </Detail>

        <Accessories>
          {car.accessories.map(accessory => (
            <Accessory icon={getAccessoryIcon(accessory.type)} name={accessory.name} key={accessory.type} />
          ))}
        </Accessories>

        <About>{car.about}</About>
        <About>{car.about}</About>
        <About>{car.about}</About>
      </Animated.ScrollView>

      <Footer>
        <Button title="Confirmar" onPress={() => navigate('Schedulling', { car })} />
      </Footer>
    </Container>
  );
};

export default CarDetails;
