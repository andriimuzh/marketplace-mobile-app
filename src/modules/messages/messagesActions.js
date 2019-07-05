import { createAsyncActions } from '@letapp/redux-actions';

export const sendMessage = createAsyncActions('messages/SEND_MESSAGE');
export const fetchMessages = createAsyncActions('messages/FETCH_MESSAGES');
export const fetchMessagesMore = createAsyncActions('messages/FETCH_MESSAGES_MORE');
export const messagesHasNoMore = createAsyncActions('messages/MESSAGES_HAS_NO_MORE');
