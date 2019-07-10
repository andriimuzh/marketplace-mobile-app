import React from 'react';
import { View, Text, KeyboardAvoidingView, FlatList, Image } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { imageValidator, deviceUtils } from '../../utils';
import { CloseButton, Avatar, WideLink, Loader } from '../../components';
import { Message, TextField } from './components';
import { NavigationService } from '../../services';


function ChatScreen({
  text, handleChange, onMessageSend, fetchMessagesMore,
  messages, isLoading, isLoadingMore, viewer, chatId, product,
}) {
  if (isLoading) {
    return <Loader />;
  }
  const productPhoto = imageValidator(product && product.photos);

  return (
    <View style={s.container}>
      <WideLink
        styles={s.wideLink}
        onPress={() => NavigationService.navigateToProduct(product.id)}
      >
        {product &&
        <View style={s.linkInnerContainer}>
          {productPhoto &&
          <Image source={{ uri: productPhoto }} style={s.productPhoto} />}
          <View style={s.productTextContainer}>
            <Text numberOfLines={1} style={s.productTitle}>{product.title}</Text>
            <Text numberOfLines={1} style={s.productDescription}>{product.description}</Text>
          </View>
        </View>}
      </WideLink>
      <FlatList
        inverted
        style={s.listContainer}
        keyExtractor={item => (`${item.id}-${item.chatId}`)}
        data={messages}
        onEndReached={() => messages.length > 19 && fetchMessagesMore(chatId)}
        onEndReachedThreshold={0.4}
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
  const navProps = props.navigation.getParam('navProps');
  if (navProps) {
    const { chat, owner } = navProps;
    const chatUser = chat && chat.participants && chat.participants[0];
    const user = owner || chatUser;
    return {
      header:
  <View style={s.headerContainer}>
    <CloseButton />
    {user &&
    <><Avatar size={36} user={user} /><Text style={s.participantName}>{user.fullName}</Text></>}
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
  fetchMessagesMore: T.func,
  isLoadingMore: T.bool,
  viewer: T.object,
  messages: T.array,
  isLoading: T.bool,
  text: T.string,
  chatId: T.string,
  product: T.object,
};

const func = () => {};

ChatScreen.defaultProps = {
  handleChange: func,
  onMessageSend: func,
  fetchMessagesMore: func,
  isLoadingMore: false,
  isLoading: false,
  text: '',
};

export default ChatScreen;
