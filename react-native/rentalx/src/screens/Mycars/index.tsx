import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { format, parseISO } from 'date-fns';
import BackButton from '../../components/BackButton';
import { Car } from '../../components/Car';
import api from '../../services/api';
import { Car as ModelCar } from '../../database/models/car';
import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from './styles';

interface ICarProps {
  id: string;
  car: ModelCar;
  start_date: string;
  end_date: string;
}

export const Mycars: React.FC = () => {
  const { colors } = useTheme();
  const { goBack } = useNavigation();
  const screenIsFocused = useIsFocused();

  const [cars, setCars] = useState<ICarProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/rentals')
      .then(response => {
        const rentals: ICarProps[] = response.data;

        const formattedRentals = rentals.map(rental => {
          return {
            id: rental.id,
            car: rental.car,
            start_date: format(parseISO(rental.start_date), 'dd/MM/yyyy'),
            end_date: format(parseISO(rental.end_date), 'dd/MM/yyyy'),
          };
        });
        setCars(formattedRentals);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [screenIsFocused]);

  return (
    <Container>
      <Header>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

        <BackButton onPress={goBack} color={colors.shape} />

        <Title>Seus agendamentos estão aqui</Title>

        <SubTitle>Conforto, segurança e praticidade</SubTitle>
      </Header>

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.start_date}</CarFooterDate>
                    <AntDesign name="arrowright" size={20} color={colors.title} style={{ marginHorizontal: 10 }} />
                    <CarFooterDate>{item.end_date}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
};
