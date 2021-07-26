import React from 'react';

import { Container, Title, Amount } from './styles';

interface HistoryCardProps {
  color: string;
  title: string;
  amount: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ color, title, amount }) => {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
};

export default HistoryCard;
