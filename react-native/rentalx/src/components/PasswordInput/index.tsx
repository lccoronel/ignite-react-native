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
  value?: string;
}

export const PasswrodInput: React.FC<InputProps> = ({
  iconName,
  value,
  ...rest
}) => {
  const { colors } = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(oldState => !oldState);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={isFocused || isFilled ? colors.main : colors.text_detail}
        />
      </IconContainer>

      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={isPasswordVisible}
        {...rest}
      />

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
