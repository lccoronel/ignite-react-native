import React, { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';

import { Friend } from '../Friend';

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
    online: string;
  }[];
  unFollow: () => void;
}

export const FriendsList: React.FC<Props> = ({ data, unFollow }) => {
  const totaLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return friend.likes + likes;
    }, 0);
  }, [data]);

  return (
    <View>
      <Text>Total de likes: {totaLikes}</Text>

      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Friend data={item} unFollow={unFollow} />}
      />
    </View>
  );
};
