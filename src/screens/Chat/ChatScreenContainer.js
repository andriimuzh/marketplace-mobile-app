import { compose, lifecycle, withState, withHandlers, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import ChatScreen from './ChatScreenView';
import { messagesSelectors, messagesOperations } from '../../modules/messages';
import { chatsSelectors, chatsOperations, chatsActions } from '../../modules/chats';
import { viewerSelectors } from '../../modules/viewer';
import { productsSelectors, productsOperations } from '../../modules/products';


function mapStateToProps(state, props) {
  const { propsChatId, productId, ownerId } = props.navigation.state.params;
  const { newChatId, chatProductId } = state.chats.lastCreatedChatId;
  let stateChatId = null;
  if (chatProductId === productId) {
    stateChatId = newChatId;
  }

  const chatId = propsChatId || stateChatId;

  return {
    chatId,
    productId,
    ownerId,
    messages: messagesSelectors.getMessages(state, chatId),
    chat: chatsSelectors.getChat(state, chatId),
    product: productsSelectors.getProduct(state, productId),
    owner: productsSelectors.getOwner(state, ownerId),
    viewer: viewerSelectors.getViewer(state),
    isLoading: state.messages.getMessages.isLoading,
    isLoadingMore: state.messages.getMessagesMore.isLoadingMore,
  };
}

const mapDispatchToProps = {
  sendMessage: messagesOperations.sendMessage,
  fetchMessages: messagesOperations.fetchMessages,
  createChat: chatsOperations.createChat,
  fetchMessagesMore: messagesOperations.fetchMessagesMore,
  getProduct: productsOperations.fetchProduct,
  removeLastChatId: chatsActions.removeLastCreatedChatId,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('text', 'setText', ''),
  withHandlers({
    handleChange: ({ setText }) => (value) => {
      setText(value);
    },
    onMessageSend: ({
      sendMessage, setText, text, chatId, createChat, productId,
    }) => async () => {
      if (text !== '') {
        if (!chatId) {
          const id = await createChat(productId);
          sendMessage(id, text);
          setText('');
        } else {
          sendMessage(chatId, text);
          setText('');
        }
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      const {
        fetchMessages, navigation, chatId, chat, productId,
        product, getProduct, owner,
      } = this.props;

      navigation.setParams({ navProps: { owner, chat } });
      if (chatId) {
        fetchMessages(chatId);
      }
      if (!product) {
        getProduct(productId);
      }
    },
  }),
);

export default hoistStatics(enhancer)(ChatScreen);
