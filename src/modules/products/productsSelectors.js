import { createSelector } from 'reselect';

const getProductsEntities = (state) => state.entities.products;
const getLatestIds = (state) => state.products.latest.items;
const getSavedIds = (state) => state.products.savedProducts.items;
const getUserProductsIds = (state) => state.products.userProducts.items;
const getUserEntities = (state) => state.entities.users;

export const getLatest = createSelector(
  [getProductsEntities, getLatestIds],
  (entities, ids) => ids.map((i) => entities[i]),
);

export const getProduct = createSelector(
  (state, id) => getProductsEntities(state)[id],
  (item) => item,
);

export const getProductOwner = createSelector(
  (state, id) => {
    const users = getUserEntities(state);
    const products = getProductsEntities(state);
    const product = products[id];
    if (!product) {
      return undefined;
    }
    return users[product.owner || product.ownerId];
  },
  (item) => item,
);

export const getOwner = createSelector(
  (state, id) => getUserEntities(state)[id],
  (item) => item,
);

export const getOwnerProducts = createSelector(
  [getProductsEntities, getUserProductsIds],
  (entities, ids) => ids.map((i) => entities[i]),
);

export const getSaved = createSelector(
  [getProductsEntities, getSavedIds],
  (entities, ids) => ids.map((i) => entities[i]),
);
