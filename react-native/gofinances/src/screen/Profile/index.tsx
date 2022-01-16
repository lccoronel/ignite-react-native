import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export const Profile: React.FC = () => {
  return (
    <View>
      <Text testID="text-title">Perfil</Text>

      <TextInput
        testID="input-name"
        placeholder="Nome"
        value="Lucas"
        autoCorrect={false}
      />
      <TextInput
        testID="input-surname"
        placeholder="Sobrenome"
        value="Coronel"
      />

      <Button title="Salvar" onPress={() => console.log()} />
    </View>
  );
};
