import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { Touchable } from '../../../../atoms';
import s from './styles';
import { Avatar } from '../../../../components';

function ChatItem({ item, onPress }) {
  const {
    id, product, lastMessage, createdAt, participants,
  } = item;
  return (
    <Touchable
      style={s.container}
      containersStyle={s.container}
      onPress={() => onPress(id)}
    >
      <Avatar size={46} user={participants[0]} />
      <View style={s.textContainer}>
        <Text style={s.title}>{product.title}</Text>
        {/* <Text style={s.title}>{product.title}</Text> */}
        <Text style={s.title}>{participants[0].fullName}</Text>
      </View>

    </Touchable>
  );
}

ChatItem.propTypes = {
  item: T.object.isRequired,
  onPress: T.func,
};

ChatItem.defaultProps = {
  onPress: () => {},
};

export default ChatItem;
