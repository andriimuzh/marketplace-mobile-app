import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

function EmptyInbox() {
  return (
    <View style={s.container}>
      <Text style={s.title}>No messages for you</Text>
    </View>
  );
}

export default EmptyInbox;
