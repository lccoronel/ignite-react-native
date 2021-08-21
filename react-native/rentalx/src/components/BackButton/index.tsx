import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { IBackButtonprops } from './types';
import { Container } from './styles';

const BackButton: React.FC<IBackButtonprops> = ({ color, ...rest }) => {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color || colors.text}
      />
    </Container>
  );
};

export default BackButton;
