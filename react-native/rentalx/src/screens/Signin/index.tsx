import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import Button from '../../components/Button';
import { Container, Header, Title, SubTitle, Footer } from './styles';

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
