import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VictoryPie } from 'victory-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import Header from '../../components/Header';
import HistoryCard from '../../components/HistoryCard';
import { TransactionDataProps } from '../../components/TransactionCard';

import { categories } from '../../utils/categories';
import { Container, Content, ChartContainer } from './styles';

interface TotalCategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

const Resume: React.FC = () => {
  const { colors } = useTheme();
  const [listCategories, setListCategories] = useState<TotalCategoryData[]>([]);

  async function loadData() {
    const response = await AsyncStorage.getItem('@gofinances:transactions');
    const listTransactions: TransactionDataProps[] = response
      ? JSON.parse(response)
      : [];

    const expensives = listTransactions.filter(
      transaction => transaction.type === 'negative',
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
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header title="Resumo por categoria" />

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

      <Content>
        {listCategories.map(category => (
          <HistoryCard
            key={category.key}
            color={category.color}
            title={category.name}
            amount={category.totalFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Resume;
