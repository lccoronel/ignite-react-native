/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import BackButton from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import Button from '../../../components/Button';
import { PasswrodInput } from '../../../components/PasswordInput';
import { Container, Header, Steps, Title, SubTitle, Form, FormTitle } from './styles';

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

export const SecondStep: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const { params } = useRoute();
  const { colors } = useTheme();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { user } = params as Params;

  function handleRegister() {
    if (!password || !passwordConfirm) return Alert.alert('Preencha os campos');

    if (password !== passwordConfirm) return Alert.alert('As senhas não são iguais');

    navigate('Confirmation', {
      nextScreen: 'Signin',
      title: 'Conta criada',
      message: 'Agora é só fazer login\ne aproveitar',
    });
  }

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

            <PasswrodInput iconName="lock" placeholder="Senha" value={password} onChangeText={setPassword} />
            <PasswrodInput
              iconName="lock"
              placeholder="Repetir senha"
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
            />
          </Form>

          <Button color={colors.success} title="Cadastrar" loading={false} enabled onPress={handleRegister} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
