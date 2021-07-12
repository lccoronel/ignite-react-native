import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Icon, Title, Button } from './styles';

interface TransactionTypeButtonProps extends RectButtonProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

export const TransactionTypeButton: React.FC<TransactionTypeButtonProps> = ({
  title,
  type,
  isActive,
  ...rest
}) => {
  const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
  };

  return (
    <Container isActive={isActive} type={type}>
      <Button {...rest}>
        <Icon name={icons[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
};
