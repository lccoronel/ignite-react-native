import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';

import { format } from 'date-fns';
import ArrowSvg from '../../assets/arrow.svg';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import Calendar from '../../components/Calendar';
import { DayProps, MarkedDateProps } from '../../components/Calendar/types';
import { IRentalPeriod, ISchedullingParams } from './types';
import { generateInterval } from '../../components/Calendar/generateInterval';
import { getPlatformDate } from '../../utils/getPlatfomDate';

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
  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const { car } = route.params as ISchedullingParams;

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>();
  const [markedDate, setMarkedDate] = useState<MarkedDateProps>(
    {} as MarkedDateProps,
  );
  const [rentalPeriod, setRentalPeriod] = useState<IRentalPeriod>(
    {} as IRentalPeriod,
  );

  function handleNavigate() {
    navigate('SchedullingDetails', { car, dates: Object.keys(markedDate) });
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate?.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDate(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyy'),
    });
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton color={colors.shape} onPress={goBack} />

        <Title>
          Escolha uma{'\n'}data de inicio e{'\n'}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo selected={false}>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo selected={false}>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDate} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          onPress={handleNavigate}
          enabled={!!rentalPeriod.endFormatted}
        />
      </Footer>
    </Container>
  );
};

export default Schedulling;
