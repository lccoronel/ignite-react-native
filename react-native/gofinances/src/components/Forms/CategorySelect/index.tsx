import React from 'react';

import { Container, Category, Icon } from './styles';

interface CategorySelectProps {
  title: String;
}

export const CategorySelect: React.FC<CategorySelectProps> = ({ title }) => {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};
