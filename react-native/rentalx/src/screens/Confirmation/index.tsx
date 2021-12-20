import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import ConfirmButton from '../../components/ConfirmButton';
import { Container, Content, Title, Message, Footer } from './styles';

interface Params {
  title: string;
  message: string;
  nextScreen: string;
}

export const Confirmation: React.FC = () => {
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation();
  const { params } = useRoute();

  const { title, message, nextScreen } = params as Params;

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />

        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={() => navigate(nextScreen)} />
      </Footer>
    </Container>
  );
};
