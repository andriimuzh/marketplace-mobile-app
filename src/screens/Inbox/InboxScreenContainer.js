import { compose, lifecycle, hoistStatics, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import InboxScreen from './InboxScreenView';
import { chatsSelectors, chatsOperations } from '../../modules/chats';
import { viewerSelectors } from '../../modules/viewer';
import { NavigationService } from '../../services';

function mapStateToProps(state) {
  return {
    isLoading: state.chats.fetchChats.isLoading,
    chatsList: chatsSelectors.getChatsWithLastMessage(state),
    viewer: viewerSelectors.getViewer(state),
  };
}

const mapDispatchToProps = {
  fetchChats: chatsOperations.fetchChats,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    openChat: () => (chatId, productId) => {
      NavigationService.navigateToChat(chatId, productId);
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchChats();
    },
    componentDidUpdate(prevProps) {
      const { fetchChats, chatsList } = this.props;
      if (chatsList.length !== prevProps.chatsList.length) {
        fetchChats();
      }
    },
  }),
);


export default hoistStatics(enhancer)(InboxScreen);
