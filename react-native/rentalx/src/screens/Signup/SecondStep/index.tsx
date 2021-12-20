import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from 'styled-components';
import BackButton from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import Button from '../../../components/Button';
import { PasswrodInput } from '../../../components/PasswordInput';
import { Container, Header, Steps, Title, SubTitle, Form, FormTitle } from './styles';

export const SecondStep: React.FC = () => {
  const { goBack } = useNavigation();
  const { colors } = useTheme();

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
            <FormTitle>2. Senhas</FormTitle>

            <PasswrodInput iconName="lock" placeholder="Senha" />
            <PasswrodInput iconName="lock" placeholder="Repetir senha" />
          </Form>

          <Button color={colors.success} title="Cadastrar" loading={false} enabled />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
