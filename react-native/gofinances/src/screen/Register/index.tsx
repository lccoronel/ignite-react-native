import React from 'react';

import { Input } from '../../components/Forms/Input';
import { Container, Header, Title } from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Input placeholder="Nome" />
      <Input placeholder="Preço" />
    </Container>
  );
}

export default Register;