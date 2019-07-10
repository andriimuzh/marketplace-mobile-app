import { handleActions } from '@letapp/redux-actions';
import * as actions from './searchActions';

const INITIAL_STATE = {
  items: [],

  prevLocations: [],

  prevKeywords: [],

  activeFilter: {

  },

  findProducts: {
    isLoading: false,
    error: null,
    isError: false,
  },

  findMore: {
    isLoadingMore: false,
    errorMore: null,
    isErrorMore: false,
  },

  productsHasNoMore: false,
};

export default handleActions(
  {
    [actions.findProducts.start]: (state, action) => ({
      ...state,
      activeFilter: {
        ...state.activeFilter,
        ...action.payload,
      },
      productsHasNoMore: false,
      findProducts: {
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.findProducts.success]: (state, action) => ({
      ...state,
      items: action.payload.result,
      findProducts: {
        ...state.findProducts,
        isLoading: false,
      },
    }),
    [actions.findProducts.error]: (state, action) => ({
      ...state,
      findProducts: {
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),


    [actions.findProductsMore.start]: (state) => ({
      ...state,
      findMore: {
        isLoadingMore: true,
        isErrorMore: false,
        errorMore: null,
      },
    }),
    [actions.findProductsMore.success]: (state, action) => ({
      ...state,
      items: state.items.concat(action.payload.result),
      findMore: {
        ...state.findMore,
        isLoadingMore: false,
      },
    }),
    [actions.findProductsMore.error]: (state, action) => ({
      ...state,
      findMore: {
        isLoadingMore: false,
        errorMore: action.payload,
        isErrorMore: true,
      },
    }),


    [actions.productsHasNoMore]: (state) => ({
      ...state,
      productsHasNoMore: true,
    }),

    [actions.removeFilter]: (state) => ({
      ...state,
      activeFilter: {},
    }),

    [actions.setPrevLocation]: (state, action) => ({
      ...state,
      prevLocations: state.prevLocations.concat(action.payload),
    }),

    [actions.setPrevKeyword]: (state, action) => ({
      ...state,
      prevKeywords: state.prevKeywords.concat(action.payload),
    }),
  },
  INITIAL_STATE,
);
