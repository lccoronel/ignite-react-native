import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import ConfirmButton from '../../components/ConfirmButton';
import { Container, Content, Title, Message, Footer } from './styles';

const SchedullingComplete: React.FC = () => {
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation();

  function handleNavigate() {
    navigate('Home');
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />

        <Title>Carro Alugado!</Title>
        <Message>
          Agora voce so precisa ir {'\n'}
          ate a concessionária do RENTX {'\n'}
          egar seu automovel
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleNavigate} />
      </Footer>
    </Container>
  );
};

export default SchedullingComplete;
