import React from 'react';

import { IButtonProps } from './types';
import { Container, Title } from './styles';

const Button: React.FC<IButtonProps> = ({ title, color, ...rest }) => {
  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
