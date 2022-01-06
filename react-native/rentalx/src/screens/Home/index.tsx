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
import { synchronize } from '@nozbe/watermelondb/sync';
import { useNetInfo } from '@react-native-community/netinfo';

import { database } from '../../database';
import { Car as ModelCar } from '../../database/models/car';
import LoadAnimation from '../../components/LoadAnimation';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import api from '../../services/api';
import { Container, Header, TotalCars, CarList, MyCarsButton } from './styles';

export const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();
  const { isConnected } = useNetInfo();

  const [cars, setCars] = useState<ModelCar[]>([]);
  const [loading, setLoading] = useState(true);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  useEffect(() => {
    let isMounted = true;

    try {
      const carCollection = database.get<ModelCar>('cars');
      carCollection
        .query()
        .fetch()
        .then(response => {
          if (isMounted) setCars(response);
        });
    } catch (error) {
      console.log(error);
    } finally {
      if (isMounted) setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (isConnected === true) {
      synchronize({
        database,
        pullChanges: async ({ lastPulledAt }) => {
          const response = await api.get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);
          const { changes, latestVersion } = response.data;

          return { changes, timestamp: latestVersion };
        },
        pushChanges: async ({ changes }) => {
          const { users } = changes;

          await api.post('/users/sync', users).catch(console.log);
        },
      }).then();
    }
  }, [isConnected]);

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
