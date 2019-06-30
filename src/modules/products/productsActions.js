import { createAsyncActions } from '@letapp/redux-actions';

export const fetchLatest = createAsyncActions('products/FETCH_LATEST');

export const fetchLatestMore = createAsyncActions('products/FETCH_LATEST_MORE');

export const latestHasNoMore = createAsyncActions('products/LATEST_HAS_NO_MORE');

export const addProduct = createAsyncActions('products/ADD_PRODUCT');

export const fetchProduct = createAsyncActions('products/FETCH_PRODUCT');

export const fetchProductsOwner = createAsyncActions('products/FETCH_PRODUCTS_OWNER');

export const fetchUserProducts = createAsyncActions(
  'products/FETCH_USER_PRODUCTS',
);

export const saveProduct = createAsyncActions('products/SAVE_PRODUCT');

export const removeFromSaved = createAsyncActions('products/REMOVE_FROM_SAVED');

export const fetchSaved = createAsyncActions('products/FETCH_SAVED');
