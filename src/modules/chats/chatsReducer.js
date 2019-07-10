import { handleActions } from '@letapp/redux-actions';
import * as actions from './chatsActions';

const INITIAL_STATE = {
  items: [],
  lastCreatedChatId: {
    // newChatId: '',
    // chatProductId: '',
  },
  createChat: {
    isLoading: false,
    error: null,
    isError: false,
  },

  fetchChats: {
    isLoading: false,
    error: null,
    isError: false,
  },
};

export default handleActions(
  {
    [actions.createChat.start]: (state) => ({
      ...state,
      lastCreatedChatId: '',
      createChat: {
        ...state.createChat,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.createChat.success]: (state, { payload: { result, productId } }) => ({
      ...state,
      lastCreatedChatId: {
        newChatId: result,
        chatProductId: productId,
      },
      items: [result].concat(state.items),
      createChat: {
        ...state.createChat,
        isLoading: false,
      },
    }),
    [actions.createChat.error]: (state, action) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),


    [actions.fetchChats.start]: (state) => ({
      ...state,
      fetchChats: {
        ...state.fetchChats,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchChats.success]: (state, action) => ({
      ...state,
      items: action.payload.result,
      fetchChats: {
        ...state.fetchChats,
        isLoading: false,
      },
    }),
    [actions.fetchChats.error]: (state, action) => ({
      ...state,
      fetchChats: {
        ...state.fetchChats,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),

  },
  INITIAL_STATE,
);
