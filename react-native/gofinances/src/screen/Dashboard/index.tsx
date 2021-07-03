import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionData } from '../../components/TransactionCard';

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
  HighlightCards,
  Transactions,
  Title,
  TransactionsList
} from './styles';

const Dashboard: React.FC = () => {
  const data: TransactionData[] = [
    {
      id: '1',
      type: 'negative',
      title: "dev site",
      amount:"R$ 1.000,00",
      category: { name: 'vendas', icon: 'dollar-sign' },
      date:"13/12/2020",
    },
    {
      id: '2',
      type: 'positive',
      title: "dev site",
      amount:"R$ 1.000,00",
      category: { name: 'vendas', icon: 'dollar-sign' },
      date:"13/12/2020",
    },
    {
      id: '3',
      type: 'negative',
      title: "dev site",
      amount:"R$ 1.000,00",
      category: { name: 'vendas', icon: 'dollar-sign' },
      date:"13/12/2020",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/54275445?v=4' }} />
            <User>
              <UserGretting>Olá, </UserGretting>
              <UserName>Lucas Coronel</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
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
          renderItem={({ item }) => (
            <TransactionCard data={item} />
          )}
        />

      </Transactions>
    </Container>
  );
}

export default Dashboard;