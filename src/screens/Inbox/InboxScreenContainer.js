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
    openChat: () => (chatId) => {
      NavigationService.navigateToChat(chatId);
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchChats();
    },
  }),
);


export default hoistStatics(enhancer)(InboxScreen);
