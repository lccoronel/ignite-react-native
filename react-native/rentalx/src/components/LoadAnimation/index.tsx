import React from 'react';
import LottieView from 'lottie-react-native';

import loading_car from '../../assets/loading_car.json';
import { Container } from './styles';

const LoadAnimation: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={loading_car}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
};

export default LoadAnimation;
