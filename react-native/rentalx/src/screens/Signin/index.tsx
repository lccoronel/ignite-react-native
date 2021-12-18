import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import Button from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswrodInput } from '../../components/PasswordInput';
import { Container, Header, Title, SubTitle, Footer, Form } from './styles';

const Signin: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

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
          style={{ marginBottom: 8 }}
        />

        <PasswrodInput iconName="lock" placeholder="Senha" />
      </Form>

      <Footer>
        <Button
          title="Login"
          onPress={() => console.log()}
          enabled={false}
          loading={false}
        />

        <Button
          light
          title="Criar conta gratuita"
          color={colors.background_secondary}
          onPress={() => console.log()}
          enabled={false}
          loading={false}
        />
      </Footer>
    </Container>
  );
};

export default Signin;
