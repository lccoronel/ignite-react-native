import React, { useEffect } from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import { Container } from './styles';

const Splash: React.FC = () => {
  const splashAnimaation = useSharedValue(0);

  useEffect(() => {
    splashAnimaation.value = withTiming(50, { duration: 3000 });
  }, [splashAnimaation]);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimaation.value, [0, 50], [1, 0]),
      transform: [
        { translateY: interpolate(splashAnimaation.value, [0, 50], [0, -50]) },
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimaation.value, [0, 50], [0, 1]),
      transform: [
        { translateY: interpolate(splashAnimaation.value, [0, 50], [0, -50]) },
      ],
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

export default Splash;
