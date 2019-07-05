import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
  latest: {
    items: [],
    isLoading: false,
    error: null,
    isError: false,
    isLoadingMore: false,
    isErrorMore: false,
    errorMore: null,
    hasNoMore: false,
  },

  addProduct: {
    isLoading: false,
    error: null,
    isError: false,
  },

  product: {
    isLoading: false,
    error: null,
    isError: false,
  },

  userProducts: {
    isLoading: false,
    error: null,
    isError: false,
    items: {
    //  userId: []
    },
  },

  productsOwner: {
    isLoading: false,
    error: null,
    isError: false,
  },

  saveProduct: {
    isLoading: false,
    error: null,
    isError: false,
  },

  removeFromSaved: {
    isLoading: false,
    error: null,
    isError: false,
  },

  savedProducts: {
    isLoading: false,
    error: null,
    isError: false,
    items: [],
  },
};

export default handleActions(
  {
    [actions.fetchLatest.start]: (state) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: true,
        error: null,
        isError: false,
        hasNoMore: false,
      },
    }),
    [actions.fetchLatest.success]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchLatest.error]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),


    [actions.fetchLatestMore.start]: (state) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoadingMore: true,
        isErrorMore: false,
        errorMore: null,
      },
    }),
    [actions.fetchLatestMore.success]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoadingMore: false,
        items: state.latest.items.concat(action.payload.result),
      },
    }),
    [actions.fetchLatestMore.error]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoadingMore: false,
        errorMore: action.payload,
        isErrorMore: true,
      },
    }),


    [actions.latestHasNoMore]: (state) => ({
      ...state,
      latest: {
        ...state.latest,
        hasNoMore: true,
      },
    }),


    [actions.addProduct.start]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.addProduct.success]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: false,
      },
    }),
    [actions.addProduct.error]: (state, action) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),


    [actions.fetchProduct.start]: (state) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchProduct.success]: (state) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: false,
      },
    }),
    [actions.fetchProduct.error]: (state, action) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),


    [actions.fetchUserProducts.start]: (state) => ({
      ...state,
      userProducts: {
        ...state.userProducts,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchUserProducts.success]: (state,
      { payload: { result, userId } }) => ({
      ...state,
      userProducts: {
        ...state.userProducts,
        isLoading: false,
        items: {
          ...state.userProducts.items,
          [userId]: result.list,
        },
      },
    }),
    [actions.fetchUserProducts.error]: (state, action) => ({
      ...state,
      userProducts: {
        ...state.userProducts,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),


    [actions.fetchProductsOwner.start]: (state) => ({
      ...state,
      productsOwner: {
        ...state.seller,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchProductsOwner.success]: (state) => ({
      ...state,
      productsOwner: {
        ...state.product,
        isLoading: false,
      },
    }),
    [actions.fetchProductsOwner.error]: (state, action) => ({
      ...state,
      productsOwner: {
        ...state.product,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),


    [actions.saveProduct.start]: (state) => ({
      ...state,
      saveProduct: {
        ...state.saveProduct,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.saveProduct.success]: (state) => ({
      ...state,
      saveProduct: {
        ...state.saveProduct,
        isLoading: false,
      },
    }),
    [actions.saveProduct.error]: (state, action) => ({
      ...state,
      saveProduct: {
        ...state.saveProduct,
        isLoading: false,
        error: action.payload.err.message,
        isError: true,
      },
    }),


    [actions.removeFromSaved.start]: (state) => ({
      ...state,
      removeFromSaved: {
        ...state.removeFromSaved,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.removeFromSaved.success]: (state) => ({
      ...state,
      removeFromSaved: {
        ...state.removeFromSaved,
        isLoading: false,
      },
    }),
    [actions.removeFromSaved.error]: (state, action) => ({
      ...state,
      removeFromSaved: {
        ...state.removeFromSaved,
        isLoading: false,
        error: action.payload.err.message,
        isError: true,
      },
    }),


    [actions.fetchSaved.start]: (state) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchSaved.success]: (state, action) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchSaved.error]: (state, action) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
