import React from 'react';

import { ConfirmButtonProps } from './types';
import { Container, Title } from './styles';

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ConfirmButton;
