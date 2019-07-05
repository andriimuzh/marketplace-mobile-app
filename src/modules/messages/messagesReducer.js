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

  fetchMessages: {
    isLoading: false,
    error: null,
    isError: false,
  },

  fetchMessagesMore: {
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
      fetchMessages: {
        ...state.fetchMessages,
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
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: false,
      },
    }),
    [actions.fetchMessages.error]: (state, action) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),


    [actions.fetchMessagesMore.start]: (state) => ({
      ...state,
      fetchMessagesMore: {
        ...state.fetchMessagesMore,
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
        [chatId]: state.items.concat(result),
      },
      fetchMessagesMore: {
        ...state.fetchMessagesMore,
        isLoadingMore: false,
      },
    }),
    [actions.fetchMessagesMore.error]: (state, action) => ({
      ...state,
      fetchMessagesMore: {
        ...state.fetchMessagesMore,
        isLoadingMore: false,
        errorMore: action.payload,
        isErrorMore: true,
      },
    }),
  },
  INITIAL_STATE,
);
