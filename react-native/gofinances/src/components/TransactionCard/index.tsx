import React from 'react';
import { View } from 'react-native';

import { 
  Container, 
  Title,
  Amount,
  Footer,
  Icon,
  Category,
  CategoryName,
  Date,
} from './styles';

export const TransactionCard: React.FC = () => {
  return (
    <Container>
      <Title>Dev de site</Title>

      <Amount>RS$ 1.000,00</Amount>
      
      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Vendas</CategoryName>
        </Category>

        <Date>13/04/2020</Date>
      </Footer>
    </Container>    
  );
}
