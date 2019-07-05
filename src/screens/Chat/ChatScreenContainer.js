import { compose, lifecycle, withState, withHandlers, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import ChatScreen from './ChatScreenView';
import { messagesSelectors, messagesOperations } from '../../modules/messages';
import { chatsSelectors } from '../../modules/chats';
import { viewerSelectors } from '../../modules/viewer';


function mapStateToProps(state, props) {
  const { chatId } = props.navigation.state.params;
  return {
    chatId,
    messages: messagesSelectors.getMessages(state, chatId),
    chat: chatsSelectors.getChat(state, chatId),
    viewer: viewerSelectors.getViewer(state),
    isLoading: state.messages.fetchMessages.isLoading,
  };
}

const mapDispatchToProps = {
  sendMessage: messagesOperations.sendMessage,
  fetchMessages: messagesOperations.fetchMessages,
  fetchMessagesMore: messagesOperations.fetchMessages,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('text', 'setText', ''),
  withHandlers({
    handleChange: ({ setText }) => (value) => {
      setText(value);
    },
    onMessageSend: ({
      sendMessage, setText, text, chatId,
    }) => () => {
      if (text !== '') {
        sendMessage(chatId, text);
        setText('');
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      const {
        fetchMessages, navigation, chatId, chat,
      } = this.props;
      navigation.setParams({ chat });
      fetchMessages(chatId);
    },
  }),
);

export default hoistStatics(enhancer)(ChatScreen);
