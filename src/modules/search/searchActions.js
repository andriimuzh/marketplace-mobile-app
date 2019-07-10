import { createAsyncActions } from '@letapp/redux-actions';

export const findProducts = createAsyncActions('search/FIND_PRODUCTS');
export const findProductsMore = createAsyncActions('search/FIND_PRODUCTS_MORE');
export const productsHasNoMore = createAsyncActions('search/PRODUCTS_HAS_NO_MORE');
export const removeFilter = createAsyncActions('search/REMOVE_FILTER');
export const setPrevLocation = createAsyncActions('search/SET_PREV_LOCATIONS');
export const setPrevKeyword = createAsyncActions('search/SET_PREV_KEYWORD');
