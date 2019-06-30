import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { CloseButton } from '../../components';

function ChatScreen() {
  return (
    <View style={s.container}>
      <Text>Component</Text>
    </View>
  );
}

ChatScreen.navigationOptions = () => ({
  header:
  <View>
    <CloseButton />
  </View>,
});

ChatScreen.propTypes = {};

ChatScreen.defaultProps = {};

export default ChatScreen;
