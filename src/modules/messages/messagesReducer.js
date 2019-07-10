import { handleActions } from '@letapp/redux-actions';
import * as actions from './messagesActions';

const INITIAL_STATE = {
  items: {
    // [chatId]: [],
  },

  hasNoMore: false,

  sendMessage: {
    isLoading: false,
    error: null,
    isError: false,
  },

  getMessages: {
    isLoading: false,
    error: null,
    isError: false,
  },

  getMessagesMore: {
    isLoadingMore: false,
    errorMore: null,
    isErrorMore: false,
  },
};

export default handleActions(
  {
    [actions.sendMessage.start]: (state, { payload: { result, chatId } }) => ({
      ...state,
      items: {
        ...state.items,
        [chatId]: [result].concat(state.items[chatId] || []),
      },
      sendMessage: {
        ...state.sendMessage,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.sendMessage.success]: (
      state,
      { payload: { result, chatId, oldMessageId } },
    ) => {
      const items = state.items[chatId]
        .filter((i) => i !== `${oldMessageId}-${chatId}`);
      return {
        ...state,
        items: {
          ...state.items,
          [chatId]: [result].concat(items),
        },
        sendMessage: {
          ...state.sendMessage,
          isLoading: false,
        },
      };
    },
    [actions.sendMessage.error]: (state, action) => ({
      ...state,
      sendMessage: {
        ...state.sendMessage,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),


    [actions.fetchMessages.start]: (state) => ({
      ...state,
      hasNoMore: false,
      getMessages: {
        ...state.getMessages,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchMessages.success]: (
      state,
      { payload: { result, chatId } },
    ) => ({
      ...state,
      items: {
        ...state.items,
        [chatId]: result,
      },
      getMessages: {
        ...state.getMessages,
        isLoading: false,
      },
    }),
    [actions.fetchMessages.error]: (state, action) => ({
      ...state,
      getMessages: {
        ...state.getMessages,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),


    [actions.fetchMessagesMore.start]: (state) => ({
      ...state,
      getMessagesMore: {
        ...state.getMessagesMore,
        isLoadingMore: true,
        errorMore: null,
        isErrorMore: false,
      },
    }),
    [actions.fetchMessagesMore.success]: (
      state,
      { payload: { result, chatId } },
    ) => ({
      ...state,
      items: {
        ...state.items,
        [chatId]: state.items[chatId].concat(result),
      },
      getMessagesMore: {
        ...state.getMessagesMore,
        isLoadingMore: false,
      },
    }),
    [actions.fetchMessagesMore.error]: (state, action) => ({
      ...state,
      getMessagesMore: {
        ...state.getMessagesMore,
        isLoadingMore: false,
        errorMore: action.payload,
        isErrorMore: true,
      },
    }),


    [actions.messagesHasNoMore]: (state) => ({
      ...state,
      hasNoMore: true,
    }),
  },
  INITIAL_STATE,
);
