import React from 'react';
import { View, Text, KeyboardAvoidingView, FlatList } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { deviceUtils } from '../../utils';
import { CloseButton, Avatar, WideLink, Loader } from '../../components';
import { Message, TextField } from './components';

function ChatScreen({
  text, handleChange, onMessageSend, fetchMoreMessages,
  messages, isLoading, isLoadingMore, viewer,
}) {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={s.container}>
      <WideLink>
        {/* <Avatar /> */}
        <View>
          <Text>sad</Text>
          <Text>sad</Text>
        </View>
      </WideLink>
      <FlatList
        inverted
        style={s.listContainer}
        keyExtractor={item => (`${item.id}-${item.chatId}`)}
        data={messages}
        onEndReached={fetchMoreMessages}
        renderItem={({ item }) => (
          <Message item={item} viewerId={viewer.id} />
        )}
        ListFooterComponent={() => (
            isLoadingMore && <Loader />
        )}
      />
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={deviceUtils.isAndroid ? '72' : '42'}
      >
        <TextField
          handleChange={handleChange}
          sendMessage={onMessageSend}
          text={text}
        />
      </KeyboardAvoidingView>
    </View>

  );
}

ChatScreen.navigationOptions = (props) => {
  const chat = props.navigation.getParam('chat');
  const participant = chat && chat.participants[0];
  if (chat) {
    return {
      header:
  <View style={s.headerContainer}>
    <CloseButton />
    <Avatar size={36} user={participant} />
    <Text style={s.participantName}>{participant.fullName}</Text>
  </View>,
    };
  }
  return {
    header:
  <View style={s.headerContainer}>
    <CloseButton />
  </View>,
  };
};

ChatScreen.propTypes = {
  handleChange: T.func,
  onMessageSend: T.func,
  viewer: T.object,
  messages: T.array,
  isLoading: T.bool,
  text: T.string,
};

const func = () => {};

ChatScreen.defaultProps = {
  handleChange: func,
  onMessageSend: func,
  isLoading: false,
  text: '',
};

export default ChatScreen;
