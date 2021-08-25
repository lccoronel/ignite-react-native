import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button/inde';
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';

const Schedulling: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <Header>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <BackButton color={colors.shape} />

        <Title>
          Escolha uma{'\n'}data de inicio e{'\n'}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo selected={false}>
            <DateTitle>DE</DateTitle>
            <DateValue />
          </DateInfo>

          <ArrowSvg />

          <DateInfo selected={false}>
            <DateTitle>ATÉ</DateTitle>
            <DateValue />
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content />

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
};

export default Schedulling;
