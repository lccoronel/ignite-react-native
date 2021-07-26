import React from 'react';

import Header from '../../components/Header';
import HistoryCard from '../../components/HistoryCard';

import { Container } from './styles';

const Resume: React.FC = () => {
  return (
    <Container>
      <Header title="Resumo por categoria" />

      <HistoryCard color="red" title="compras" amount="10,00" />
    </Container>
  );
};

export default Resume;
