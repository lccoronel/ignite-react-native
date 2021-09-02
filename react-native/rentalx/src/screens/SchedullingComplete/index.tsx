import React from 'react';
import { useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { Container, Content, Title, Message } from './styles';

const SchedullingComplete: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <Container>
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
    </Container>
  );
};

export default SchedullingComplete;
