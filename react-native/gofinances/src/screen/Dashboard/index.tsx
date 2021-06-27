import React from 'react';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  UserGretting,
  UserName,
  User,
  Icon
} from './styles';

const screen: React.FC = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/54275445?v=4' }} />
            <User>
              <UserGretting>Olá, </UserGretting>
              <UserName>Lucas Coronel</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>
    </Container>
  );
}

export default screen;