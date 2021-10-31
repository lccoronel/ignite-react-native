import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import Logo from '../../assets/logo.svg';
import Car from '../../components/Car';
import api from '../../services/api';
import { ICarDTO } from '../../dtos/CarDTO';
import { Container, Header, TotalCars, CarList, MyCarsButton } from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const [cars, setCars] = useState<ICarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      api.get('cars').then(response => setCars(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  function navigateToCarDetail(car: ICarDTO) {
    navigate('CarDetails', { car });
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <Logo width={RFValue(108)} height={RFValue(12)} />

        <TotalCars>Total de 12 carros</TotalCars>
      </Header>

      {loading ? (
        <ActivityIndicator color={colors.main} />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => navigateToCarDetail(item)} />
          )}
        />
      )}

      <MyCarsButton onPress={() => navigate('MyCars')}>
        <Ionicons name="ios-car-sport" color={colors.shape} size={32} />
      </MyCarsButton>
    </Container>
  );
};

export default Home;
