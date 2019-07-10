import { createSelector } from 'reselect';

const getProductsEntities = (state) => state.entities.products;
const getSearchResultsId = (state) => state.search.items;
const getKeywords = (state) => state.search.prevKeywords;

export const getSearchResults = createSelector(
  [getProductsEntities, getSearchResultsId],
  (entities, ids) => ids.map((i) => entities[i]),
);

export const getKeywordsItems = createSelector(
  [getKeywords],
  (item) => item,
);
