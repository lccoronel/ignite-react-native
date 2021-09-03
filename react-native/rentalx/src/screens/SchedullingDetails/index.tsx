import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Accessory from '../../components/Accessory';
import Button from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

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

const SchedullingDetails: React.FC = () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  function handleNavigate() {
    navigate('SchedullingComplete');
  }

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <CarImages>
        <ImageSlider
          imageUrl={[
            'https://img2.gratispng.com/20180204/raw/kisspng-audi-sportback-concept-car-dealership-audi-a7-audi-5a7773823e75b1.8360077315177777942559.jpg',
          ]}
        />
      </CarImages>

      <Content>
        <Detail>
          <Description>
            <Brand>Larborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>RS 500</Price>
          </Rent>
        </Detail>

        <Accessories>
          <Accessory icon={SpeedSvg} name="380km/h" />
          <Accessory icon={AccelerationSvg} name="3.2s" />
          <Accessory icon={ForceSvg} name="800 HP" />
          <Accessory icon={GasolineSvg} name="Gasolina" />
          <Accessory icon={ExchangeSvg} name="Auto" />
          <Accessory icon={PeopleSvg} name="2 pessoas" />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={colors.shape} />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/02/2020</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(24)}
            color={colors.shape}
          />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/02/2020</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RebtalPriceLabel>TOTAL</RebtalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 500 x 3 diarias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={colors.success}
          onPress={handleNavigate}
        />
      </Footer>
    </Container>
  );
};

export default SchedullingDetails;
