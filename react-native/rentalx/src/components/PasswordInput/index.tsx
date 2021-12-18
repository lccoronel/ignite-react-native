import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  InputText,
  IconContainer,
  ChangePasswordVisibilityButton,
} from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

export const PasswrodInput: React.FC<InputProps> = ({ iconName, ...rest }) => {
  const { colors } = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(oldState => !oldState);
  }

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={colors.text_detail} />
      </IconContainer>

      <InputText secureTextEntry={isPasswordVisible} {...rest} />

      <ChangePasswordVisibilityButton onPress={handlePasswordVisibilityChange}>
        <Feather
          name={isPasswordVisible ? 'eye-off' : 'eye'}
          size={24}
          color={colors.text_detail}
        />
      </ChangePasswordVisibilityButton>
    </Container>
  );
};
