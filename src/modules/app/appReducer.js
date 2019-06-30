import { handleActions } from '@letapp/redux-actions';
import * as actions from './appActions';

const INITIAL_STATE = {
  isLoading: true,
  error: null,
  isError: false,
};

export default handleActions(
  {
    [actions.initialization.start]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
      isError: false,
    }),
    [actions.initialization.success]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [actions.initialization.error]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
      isError: true,
    }),
  },
  INITIAL_STATE,
);
