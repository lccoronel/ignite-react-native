import React from 'react';

import { IAccessory } from './types';
import { Container, Name } from './styles';

const Accessory: React.FC<IAccessory> = ({ name, icon: Icon }) => {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );
};

export default Accessory;
