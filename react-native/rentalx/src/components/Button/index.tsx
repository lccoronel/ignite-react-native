import React from 'react';

import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { IButtonProps } from './types';
import { Container, Title } from './styles';

const Button: React.FC<IButtonProps> = ({ title, color, loading = false, light = false, ...rest }) => {
  const { colors } = useTheme();

  return (
    <Container {...rest} color={color} loading={loading}>
      {loading ? <ActivityIndicator color={colors.shape} size="large" /> : <Title light={light}>{title}</Title>}
    </Container>
  );
};

export default Button;
