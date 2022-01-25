import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import lodash from 'lodash';

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
    online: string;
  };
  unFollow: () => void;
}

const FriendComponent: React.FC<Props> = ({ data, unFollow }) => {
  return (
    <>
      <Text style={{ marginTop: 20 }}>
        {data.name} - Likes: {data.likes}
      </Text>

      <TouchableOpacity onPress={unFollow}>
        <Text>Deixar de seguir</Text>
      </TouchableOpacity>

      <Text>Online em {data.online}</Text>
    </>
  );
};

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps, nextProps);
});
