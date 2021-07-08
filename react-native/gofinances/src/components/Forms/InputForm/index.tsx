import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Input } from '../Input';
import { Container } from './styles';

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
}

export const InputForm: React.FC<InputFormProps> = ({
  control,
  name,
  ...rest
}) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
    </Container>
  );
};
