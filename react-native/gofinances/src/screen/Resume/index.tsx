import React, { useCallback, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VictoryPie } from 'victory-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { useFocusEffect } from '@react-navigation/native';
import Header from '../../components/Header';
import HistoryCard from '../../components/HistoryCard';
import { TransactionDataProps } from '../../components/TransactionCard';
import { categories } from '../../utils/categories';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Content,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Month,
  LoadContainer,
} from './styles';

interface TotalCategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

const Resume: React.FC = () => {
  const { user } = useAuth();
  const { colors } = useTheme();
  const bottomTabHeight = useBottomTabBarHeight();

  const [listCategories, setListCategories] = useState<TotalCategoryData[]>([]);
  const [selectedDate, SetSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  function handleDataChangge(action: 'next' | 'previous') {
    if (action === 'next') {
      SetSelectedDate(addMonths(selectedDate, 1));
    } else {
      SetSelectedDate(subMonths(selectedDate, 1));
    }
  }

  async function loadData() {
    setIsLoading(true);
    const dataKey = `@gofinances:transactions${user.id}`;

    const response = await AsyncStorage.getItem(dataKey);
    const listTransactions: TransactionDataProps[] = response
      ? JSON.parse(response)
      : [];

    const expensives = listTransactions.filter(
      transaction =>
        transaction.type === 'negative' &&
        new Date(transaction.date).getMonth() === selectedDate.getMonth() &&
        new Date(transaction.date).getFullYear() === selectedDate.getFullYear(),
    );

    const expensiveTotal = expensives.reduce(
      (acumullator: number, expensive: TransactionDataProps) => {
        return acumullator + Number(expensive.amount);
      },
      0,
    );

    const totalByCategory: TotalCategoryData[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      expensives.forEach(expensive => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        const total = categorySum.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        const percent = `${((categorySum / expensiveTotal) * 100).toFixed(0)}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          totalFormatted: total,
          total: categorySum,
          color: category.color,
          percent,
        });
      }
    });

    setListCategories(totalByCategory);
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [selectedDate]),
  );

  return (
    <Container>
      <Header title="Resumo por categoria" />

      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <Content
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: bottomTabHeight,
          }}
        >
          <MonthSelect>
            <MonthSelectButton onPress={() => handleDataChangge('previous')}>
              <MonthSelectIcon name="chevron-left" />
            </MonthSelectButton>

            <Month>
              {format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}
            </Month>

            <MonthSelectButton onPress={() => handleDataChangge('next')}>
              <MonthSelectIcon name="chevron-right" />
            </MonthSelectButton>
          </MonthSelect>

          <ChartContainer>
            <VictoryPie
              data={listCategories}
              x="percent"
              y="total"
              colorScale={listCategories.map(({ color }) => color)}
              style={{
                labels: {
                  fontSize: RFValue(18),
                  fontWeight: 'bold',
                  fill: colors.shape,
                },
              }}
              labelRadius={70}
            />
          </ChartContainer>

          {listCategories.map(category => (
            <HistoryCard
              key={category.key}
              color={category.color}
              title={category.name}
              amount={category.totalFormatted}
            />
          ))}
        </Content>
      )}
    </Container>
  );
};

export default Resume;
