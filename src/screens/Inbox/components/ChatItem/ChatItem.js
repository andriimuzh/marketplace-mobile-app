import React from 'react';
import { View, Text, Image } from 'react-native';
import T from 'prop-types';
import { Avatar, Touchable } from '../../../../components';
import { imageValidator } from '../../../../utils';
import s from './styles';

function ChatItem({ item, onPress }) {
  const {
    id, product, lastMessage, participants,
  } = item;
  const participant = participants[0];
  const productImage = imageValidator(product.photos);
  // TODO: add time && last message time from chat
  return (
    <Touchable
      style={s.container}
      containersStyle={s.container}
      onPress={() => onPress(id)}
    >
      {productImage ?
        <View style={s.imageWrap}>
          <View style={s.avatarWrap}>
            <Avatar size={22} user={participant} />
          </View>
          <Image source={{ uri: productImage }} style={s.productPhoto} />
        </View> :
        <Avatar size={46} user={participant} />
      }
      <View style={s.textContainer}>
        <View style={s.topLine}>
          <Text numberOfLines={1} style={s.title}>{product.title}</Text>
          <Text style={s.messageTime}>{lastMessage && lastMessage.createdAt}</Text>
        </View>
        <Text style={s.participant}>{participant.fullName}</Text>
        <Text numberOfLines={1} style={s.lastMessage}>{lastMessage && lastMessage.text}</Text>
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
