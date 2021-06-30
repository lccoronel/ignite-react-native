import React from 'react';

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

export interface TransactionData {
  id: string;
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: {
    name: string;
    icon: string;
  };
  date: string;
}

interface TransactionCardProps {
  data: TransactionData;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({ 
  data
}) => {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>
      
      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>    
  );
}
