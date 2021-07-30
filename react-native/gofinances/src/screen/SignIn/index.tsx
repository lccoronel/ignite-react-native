import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { ActivityIndicator, Alert } from 'react-native';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import SocialButton from '../../components/SocialButton';
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles';

const SignIn: React.FC = () => {
  const { signInWithGoogle, signInWithApple } = useAuth();
  const { colors } = useTheme();

  const [isLoading, setIsLoading] = useState(false);

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      Alert.alert('Nao foi possivel conectar a conta google');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      Alert.alert('Nao foi possivel conectar a conta apple');
    } finally {
      setIsLoading(false);
    }
  }

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

      <Footer>
        <FooterWrapper>
          <SocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          <SocialButton
            title="Entrar com Apple"
            svg={AppleSvg}
            onPress={handleSignInWithApple}
          />
        </FooterWrapper>

        {isLoading && (
          <ActivityIndicator
            color={colors.shape}
            size="large"
            style={{ marginTop: 18 }}
          />
        )}
      </Footer>
    </Container>
  );
};

export default SignIn;
