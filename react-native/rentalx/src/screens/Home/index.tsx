import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.svg';
import Car from '../../components/Car';
import { Container, Header, TotalCars, CarList } from './styles';
import api from '../../services/api';
import { ICarDTO } from '../../dtos/CarDTO';

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
            <Car data={item} onPress={() => navigate('CarDetails')} />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
