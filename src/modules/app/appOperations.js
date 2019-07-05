import * as actions from './appActions';
import { Api, SocketApi } from '../../api';
import { viewerOperations } from '../viewer';
import { messagesOperations } from '../messages';
import { NavigationService } from '../../services';

export function subscribeToSockets() {
  return async function subscribeToSocketsThunk(dispatch) {
    SocketApi.handleMessages((message) =>
      dispatch(messagesOperations.handleMessageRealTime(message)),
    );
  };
}

export function init() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.initialization.start());

      await Api.Auth.getToken();

      dispatch(actions.initialization.success());

      await dispatch(viewerOperations.fetchViewer());

      dispatch(subscribeToSockets());
    } catch (err) {
      dispatch(actions.initialization.error({ message: err.message }));
    }
    NavigationService.navigateToApp();
  };
}
