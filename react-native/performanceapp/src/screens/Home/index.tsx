import React, { useCallback, useState } from 'react';
import { Button, Text, TextInput, View, ScrollView } from 'react-native';

import { FriendsList } from '../../components/FriendsList';
import { styles } from './styles';

export const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [friends, setFriends] = useState([]);

  async function handleSearch() {
    const response = await fetch(`http://10.0.0.192:3333/friends?q=${name}`);
    const data: any = await response.json();

    const formattedDate = data.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        likes: item.likes,
        online: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };
    });

    setFriends(formattedDate);
  }

  const handleFollow = useCallback(() => {
    console.log('unfollow user');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>

      <TextInput placeholder="Nome do amigo" onChangeText={setName} style={styles.input} />

      <Button title="Buscar" onPress={handleSearch} />

      <FriendsList data={friends} unFollow={handleFollow} />
    </View>
  );
};
