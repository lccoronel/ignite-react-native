import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo.svg';
import Car from '../../components/Car';
import { ICar } from '../../dtos/Car';
import { Container, Header, TotalCars, CarList } from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const data: ICar = {
    brand: 'Audi',
    name: 'RS 5 coupe',
    rent: {
      period: 'por dia',
      price: '120,00',
    },
  };

  function handleNavigate() {
    navigate('CarDetails');
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

      <CarList
        data={[1, 2, 3]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => (
          <Car data={data} key={item} onPress={handleNavigate} />
        )}
      />
    </Container>
  );
};

export default Home;
