import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Category, Icon } from './styles';

interface CategorySelectButtonProps extends RectButtonProps {
  title: String;
  onPress: () => void;
}

export const CategorySelectButton: React.FC<CategorySelectButtonProps> = ({
  title,
  onPress,
  testID,
}) => {
  return (
    <Container onPress={onPress} testID={testID}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};
