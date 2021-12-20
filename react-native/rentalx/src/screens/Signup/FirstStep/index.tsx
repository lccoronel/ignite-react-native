import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BackButton from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import Button from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Container, Header, Steps, Title, SubTitle, Form, FormTitle } from './styles';

export const FisrtStep: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

            <Input iconName="user" placeholder="Nome" />
            <Input iconName="mail" placeholder="E-mail" keyboardType="email-address" />
            <Input iconName="credit-card" placeholder="CNH" keyboardType="numeric" />
          </Form>

          <Button title="Próximo" loading={false} enabled onPress={() => navigate('SecondStep')} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
