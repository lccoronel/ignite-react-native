import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
        </TitleWrapper>

        <Title>
          Controle suas
          {'\n'}
          finaças de forma
          {'\n'}
          mais simples
        </Title>

        <SignInTitle>Faça o seu login com uma das contas abaixo</SignInTitle>
      </Header>

      <Footer />
    </Container>
  );
};

export default SignIn;
