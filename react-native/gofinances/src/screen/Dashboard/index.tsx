import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { ActivityIndicator } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionDataProps,
} from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  UserGretting,
  UserName,
  User,
  Icon,
  LogoutButton,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
  LoadContainer,
} from './styles';
import { getLastTransactionDate } from '../../utils/getLastTransactionData';

interface HighLightData {
  amount: string;
  lastTransaction: string;
}

interface HighLightProps {
  entries: HighLightData;
  expensive: HighLightData;
  total: HighLightData;
}

const Dashboard: React.FC = () => {
  const theme = useTheme();

  const [transactions, setTransactions] = useState<TransactionDataProps[]>([]);
  const [hidhLight, setHighLight] = useState<HighLightProps>(
    {} as HighLightProps,
  );
  const [isLoading, setLoading] = useState(true);

  async function loadTransaction() {
    const response = await AsyncStorage.getItem('@gofinances:transactions');
    const listTransactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: TransactionDataProps[] = listTransactions.map(
      (item: TransactionDataProps) => {
        item.type === 'positive'
          ? (entriesTotal += Number(item.amount))
          : (expensiveTotal += Number(item.amount));

        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      },
    );

    const total = entriesTotal - expensiveTotal;

    setTransactions(transactionsFormatted);
    setHighLight({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: getLastTransactionDate(listTransactions, 'positive'),
      },
      expensive: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: getLastTransactionDate(listTransactions, 'negative'),
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Do dia 1 ao dia ${getLastTransactionDate(
          listTransactions,
          'negative',
        )}`,
      },
    });
    setLoading(false);
  }

  useEffect(() => {
    loadTransaction();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransaction();
    }, []),
  );

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo
                  source={{
                    uri: 'https://avatars.githubusercontent.com/u/54275445?v=4',
                  }}
                />
                <User>
                  <UserGretting>Olá, </UserGretting>
                  <UserName>Lucas Coronel</UserName>
                </User>
              </UserInfo>

              <LogoutButton>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>

          <HighlightCards>
            <HighlightCard
              type="up"
              title="Entradas"
              amount={hidhLight.entries.amount}
              lastTransaction={hidhLight.entries.lastTransaction}
            />
            <HighlightCard
              type="down"
              title="Saidas"
              amount={hidhLight.expensive.amount}
              lastTransaction={hidhLight.expensive.lastTransaction}
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={hidhLight.total.amount}
              lastTransaction={hidhLight.total.lastTransaction}
            />
          </HighlightCards>

          <Transactions>
            <Title>Listagem</Title>

            <TransactionsList
              data={transactions}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
