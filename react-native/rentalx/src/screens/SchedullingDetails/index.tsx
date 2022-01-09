import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

import { useNetInfo } from '@react-native-community/netinfo';
import BackButton from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import Button from '../../components/Button';

import { IRentalPeriod, ISchedullingDetailsParams } from './types';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getPlatformDate } from '../../utils/getPlatfomDate';
import api from '../../services/api';
import { ICarDTO } from '../../dtos/CarDTO';
import {
  Container,
  Header,
  CarImages,
  Content,
  Detail,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RebtalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';
import { useAuth } from '../../hook/auth';

export const SchedullingDetails: React.FC = () => {
  const { user } = useAuth();
  const { colors } = useTheme();
  const { navigate, goBack } = useNavigation();
  const { isConnected } = useNetInfo();
  const route = useRoute();
  const { car, dates } = route.params as ISchedullingDetailsParams;

  const [loading, setLoading] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState({} as IRentalPeriod);
  const [carUpdated, setCarUpdated] = useState<ICarDTO>({} as ICarDTO);
  const carRentTotal = Number(dates.length * car.price);

  useEffect(() => {
    if (isConnected === true) {
      api.get(`/cars/${car.id}`).then(response => setCarUpdated(response.data));
    }
  }, [isConnected, car.id]);

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    });
  }, [dates]);

  async function handleNavigate() {
    try {
      await api.post(
        'rentals',
        {
          user_id: user.id,
          car_id: car.id,
          start_date: new Date(dates[0]),
          end_date: new Date(dates[dates.length - 1]),
          total: carRentTotal,
        },
        {
          headers: { authorization: `Bearer ${user.token}` },
        },
      );

      navigate('Confirmation', {
        nextScreen: 'Home',
        title: 'Carro alugado!',
        message: 'Agora você só precisa ir\nté uma concencionária da RENTX\npegar seu automóvel',
      });
    } catch (error) {
      Alert.alert('Não foi possivel confirmar agendamento');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" />

      <Header>
        <BackButton onPress={goBack} />
      </Header>

      <CarImages>
        <ImageSlider imageUrl={carUpdated.photos || [{ id: car.thumbnail, photo: car.thumbnail }]} />
      </CarImages>

      <Content>
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

        {carUpdated.accessories && (
          <Accessories>
            {carUpdated.accessories.map(accessory => (
              <Accessory icon={getAccessoryIcon(accessory.type)} name={accessory.name} key={accessory.type} />
            ))}
          </Accessories>
        )}

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={colors.shape} />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather name="chevron-right" size={RFValue(24)} color={colors.shape} />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RebtalPriceLabel>TOTAL</RebtalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.price} x {dates.length} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {carRentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={colors.success}
          onPress={handleNavigate}
          enabled={!loading}
          loading={loading}
        />
      </Footer>
    </Container>
  );
};
