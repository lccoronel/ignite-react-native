import { useNavigation } from '@react-navigation/native';
import React from 'react';

import BackButton from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Container, Header, Steps, Title, SubTitle, Form, FormTitle } from './styles';

export const FisrtStep: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack} />

        <Steps>
          <Bullet />
          <Bullet />
        </Steps>
      </Header>

      <Title>
        Crie sua{'\n'}
        conta
      </Title>
      <SubTitle>
        Faça seu cadastro de{'\n'}
        forma rapida e facil
      </SubTitle>

      <Form>
        <FormTitle>1. Dados</FormTitle>
      </Form>
    </Container>
  );
};
