import React, { useCallback, useEffect } from 'react';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming, runOnJS } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import { Container } from './styles';

export const Splash: React.FC = () => {
  const { navigate } = useNavigation();
  const splashAnimaation = useSharedValue(0);

  const startApp = useCallback(() => navigate('Signin'), [navigate]);

  useEffect(() => {
    splashAnimaation.value = withTiming(50, { duration: 3000 }, () => {
      'worklet';

      runOnJS(startApp)();
    });
  }, [splashAnimaation, startApp]);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimaation.value, [0, 50], [1, 0]),
      transform: [{ translateY: interpolate(splashAnimaation.value, [0, 50], [0, -50]) }],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimaation.value, [0, 50], [0, 1]),
      transform: [{ translateY: interpolate(splashAnimaation.value, [0, 50], [0, -50]) }],
    };
  });

  return (
    <Container>
      <Animated.View style={brandStyle}>
        <BrandSvg width={95} height={75} />
      </Animated.View>

      <Animated.View style={logoStyle}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
};
