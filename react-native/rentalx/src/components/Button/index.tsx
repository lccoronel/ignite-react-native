import React from 'react';

import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { IButtonProps } from './types';
import { Container, Title } from './styles';

const Button: React.FC<IButtonProps> = ({
  title,
  color,
  enabled = true,
  loading = false,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container
      {...rest}
      color={color}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={colors.shape} size="large" />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
