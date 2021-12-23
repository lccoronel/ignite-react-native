import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

import LoadAnimation from '../../components/LoadAnimation';
import Logo from '../../assets/logo.svg';
import Car from '../../components/Car';
import api from '../../services/api';
import { ICarDTO } from '../../dtos/CarDTO';
import { Container, Header, TotalCars, CarList, MyCarsButton } from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const [cars, setCars] = useState<ICarDTO[]>([]);
  const [loading, setLoading] = useState(false);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: positionX.value }, { translateY: positionY.value }],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, context: any) {
      context.positionX = positionX.value;
      context.positionY = positionY.value;
    },
    onActive(event, context: any) {
      positionX.value = context.positionX + event.translationX;
      positionY.value = context.positionY + event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  useEffect(() => {
    try {
      setLoading(true);
      api.get('cars').then(response => setCars(response.data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <Header>
        <Logo width={RFValue(108)} height={RFValue(12)} />

        {!loading && <TotalCars>Total de {cars.length} carros</TotalCars>}
      </Header>

      {loading ? (
        <LoadAnimation />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Car data={item} onPress={() => navigate('CarDetails', { car: item })} />}
        />
      )}

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[myCarsButtonStyle, { position: 'absolute', bottom: 13, right: 22 }]}>
          <MyCarsButton onPress={() => navigate('MyCars')}>
            <Ionicons name="ios-car-sport" color={colors.shape} size={32} />
          </MyCarsButton>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
};

export default Home;
