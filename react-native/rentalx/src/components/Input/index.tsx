import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import { Container, InputText, IconContainer } from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

export const Input: React.FC<InputProps> = ({ iconName, ...rest }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={colors.text_detail} />
      </IconContainer>

      <InputText {...rest} />
    </Container>
  );
};
