import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

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
} from './styles';

const screen: React.FC = () => {
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

        <TransactionCard />
      </Transactions>
    </Container>
  );
}

export default screen;