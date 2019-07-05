import React from 'react';
import { View, Text, FlatList } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { PrimaryButton } from '../../components';
import { NavigationService } from '../../services';
import { ChatItem, Separator, EmptyInbox } from './components';

function InboxScreen({
  viewer, fetchChats, chatsList, isLoading, openChat,
}) {
  if (viewer) {
    return (
      <FlatList
        data={chatsList}
        refreshing={isLoading}
        style={s.container}
        keyExtractor={item => item.id}
        onRefresh={fetchChats}
        renderItem={({ item }) => (
          <ChatItem item={item} onPress={openChat} />
        )}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={EmptyInbox}
      />
    );
  }
  return (
    <View style={s.guestContainer}>
      <Text style={s.guestText}>Login to check your Inbox</Text>
      <PrimaryButton title="LOGIN" onPress={() => NavigationService.navigateToAuth()} />
    </View>
  );
}

InboxScreen.navigationOptions = {
  title: 'Inbox',
};

InboxScreen.propTypes = {
  viewer: T.object,
  fetchChats: T.func,
  openChat: T.func,
  chatsList: T.array,
  isLoading: T.bool,
};

const func = () => {};

InboxScreen.defaultProps = {
  fetchChats: func,
  openChat: func,
  isLoading: false,
};

export default InboxScreen;
