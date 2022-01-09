import React from 'react';

import { useTheme } from 'styled-components';
import { IAccessory } from './types';
import { Container, Name } from './styles';

export const Accessory: React.FC<IAccessory> = ({ name, icon: Icon }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Icon width={32} height={32} fill={colors.header} />
      <Name>{name}</Name>
    </Container>
  );
};
