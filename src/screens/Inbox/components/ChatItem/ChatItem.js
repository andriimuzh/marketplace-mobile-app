import React from 'react';
import { View, Text, Image } from 'react-native';
import T from 'prop-types';
import { Avatar, Touchable } from '../../../../components';
import { imageValidator, timeDurationSetter } from '../../../../utils';
import s from './styles';

function ChatItem({ item, onPress }) {
  const {
    id, product, lastMessage, participants, createdAt,
  } = item;

  let lastMessageCreatedTime;
  if (lastMessage) {
    lastMessageCreatedTime = lastMessage.createdAt;
  } else {
    lastMessageCreatedTime = createdAt;
  }

  const participant = participants && participants[0];
  const productImage = imageValidator(product && product.photos);

  if (item && item.participants) {
    return (
      <Touchable
        style={s.container}
        containersStyle={s.container}
        onPress={() => onPress(id, product.id)}
      >
        {productImage ?
          <View style={s.imageWrap}>
            <View style={s.avatarWrap}>
              <Avatar size={22} user={participant} />
            </View>
            <Image source={{ uri: productImage }} style={s.productPhoto} />
          </View> :
          <View style={s.imageWrap}>
            <Avatar size={46} user={participant} />
          </View>
      }
        <View style={s.textContainer}>
          <View style={s.topLine}>
            <Text numberOfLines={1} style={s.title}>{product && product.title}</Text>
            <Text style={s.messageTime}>
              {timeDurationSetter(lastMessageCreatedTime)}
            </Text>
          </View>
          <Text style={s.participant}>{participant && participant.fullName}</Text>
          <Text numberOfLines={1} style={s.lastMessage}>{lastMessage && lastMessage.text}</Text>
        </View>
      </Touchable>
    );
  }
  return (
    <Touchable
      style={s.container}
      containersStyle={s.container}
      onPress={() => onPress(id, product.id)}
    />
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
