import { compose, lifecycle, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import ChatScreen from './ChatScreenView';
import { messagesSelectors, messagesOperations } from '../../modules/messages';
import { chatsSelectors } from '../../modules/chats';


function mapStateToProps(state, props) {
  const { chatId } = props.navigation.state.params;
  return {
    chatId,
    messages: messagesSelectors.getMessages(state, chatId),
    chat: chatsSelectors.getChat(state, chatId),
  };
}

const mapDispatchToProps = {
  sendMessage: messagesOperations.sendMessage,
  fetchMessages: messagesOperations.fetchMessages,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchMessages(this.props.chatId);
    },
  }),
);

export default hoistStatics(enhancer)(ChatScreen);
