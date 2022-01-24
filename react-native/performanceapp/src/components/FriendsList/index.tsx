import React from 'react';
import { View } from 'react-native';

import { Friend } from '../Friend';

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
  }[];
}

export const FriendsList: React.FC<Props> = ({ data }) => {
  return (
    <View>
      {data.map(item => (
        <Friend key={item.id} data={item} />
      ))}
    </View>
  );
};
