import React from 'react';
import { categories } from '../../utils/categories';

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

export interface TransactionDataProps {
  id: string;
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface TransactionCardProps {
  data: TransactionDataProps;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({ data }) => {
  const [category] = categories.filter(item => item.key === data.category);

  return (
    <Container>
      <Title>{data.name}</Title>

      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};
