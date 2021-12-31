import React, { useState } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import Button from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { useAuth } from '../../hook/auth';
import { Container, Header, Title, SubTitle, Footer, Form } from './styles';

export const Signin: React.FC = () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignin() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigstorio').email('E-mail invalido'),
        password: Yup.string().required('Senha obrigatoria'),
      });

      await schema.validate({ email, password });
      await signIn({ email, password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        Alert.alert('Erro de autenticação', err.message);
      } else {
        Alert.alert('outro erro');
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

          <Header>
            <Title>
              Estamos{'\n'}
              quase lá.
            </Title>
            <SubTitle>
              Faça seu login para começar{'\n'}
              uma experiencia incrivel
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <PasswordInput iconName="lock" placeholder="Senha" value={password} onChangeText={setPassword} />
          </Form>

          <Footer>
            <Button title="Login" onPress={handleSignin} enabled loading={false} />

            <Button
              enabled
              light
              title="Criar conta gratuita"
              color={colors.background_secondary}
              onPress={() => navigate('FirstStep')}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
