import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './styles';

function Message({ item, viewerId }) {
  const { text, ownerId, createdAt } = item;
  const isViewer = ownerId === viewerId;
  return (
    <View style={[s.container, isViewer && { alignItems: 'flex-end' }]}>
      <View style={[isViewer ? s.viewerContainer : s.messageContainer]}>
        <Text style={[isViewer ? s.viewerText : s.text]}>{text}</Text>
        <Text style={[isViewer ? s.viewerDate : s.date]}>{createdAt}</Text>
      </View>
    </View>
  );
}

Message.propTypes = {
  item: T.object,
  viewerId: T.string,
};

Message.defaultProps = {};

export default Message;
