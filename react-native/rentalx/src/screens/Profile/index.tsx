import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import BackButton from '../../components/BackButton';
import { Container, Header, HeaderTop, HeaderTitle, LogountButton, PhotoContainer, Photo, PhotoButton } from './styles';

export const Profile: React.FC = () => {
  const { colors } = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton color={colors.shape} onPress={goBack} />
          <HeaderTitle>Editar perfil</HeaderTitle>

          <LogountButton>
            <Feather name="power" size={24} color={colors.shape} />
          </LogountButton>
        </HeaderTop>

        <PhotoContainer>
          <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/54275445?v=4' }} />
          <PhotoButton>
            <Feather name="camera" size={24} color={colors.shape} />
          </PhotoButton>
        </PhotoContainer>
      </Header>
    </Container>
  );
};
