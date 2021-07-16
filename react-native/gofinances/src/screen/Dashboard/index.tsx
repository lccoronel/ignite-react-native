import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

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
} from './styles';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<TransactionDataProps[]>([]);

  async function loadTransaction() {
    const response = await AsyncStorage.getItem('@gofinances:transactions');
    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: TransactionDataProps[] = transactions.map(
      (item: TransactionDataProps) => {
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

    setData(transactionsFormatted);
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
          amount="R$ 1.000,00"
          lastTransaction="ultima entrada 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saidas"
          amount="R$ 1.000,00"
          lastTransaction="ultima entrada 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 1.000,00"
          lastTransaction="ultima entrada 13 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
