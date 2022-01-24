import React from 'react';
import { Text } from 'react-native';

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
  };
}

export const Friend: React.FC<Props> = ({ data }) => {
  return (
    <Text>
      {data.name} - Likes: {data.likes}
    </Text>
  );
};
