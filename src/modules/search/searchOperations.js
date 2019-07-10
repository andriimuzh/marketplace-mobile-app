import { normalize } from 'normalizr';
import * as actions from './searchActions';
import { PAGE_SIZE } from '../../constants';
import { Api, schemas } from '../../api';


export function findProducts(queries) {
  return async function findProductsThunk(dispatch) {
    try {
      dispatch(actions.findProducts.start(queries));

      const res = await Api.Search.searchProductsBy({ queries, limit: PAGE_SIZE });
      const { result, entities } = normalize(res.data, schemas.Products);

      if (result.length < PAGE_SIZE) {
        dispatch(actions.productsHasNoMore());
      }

      await dispatch(actions.findProducts.success({ result, entities }));
    } catch (err) {
      dispatch(actions.findProducts.error({ message: err.message }));
    }
  };
}

export function findProductsMore() {
  return async function findProductsMoreThunk(dispatch, getState) {
    const {
      findMore, productsHasNoMore, items, activeFilter,
    } = getState().search;
    if (productsHasNoMore || findMore.isLoadingMore) {
      return;
    }

    try {
      dispatch(actions.findProductsMore.start());

      const res = await Api.Search.searchProductsBy({
        limit: PAGE_SIZE,
        offset: items.length,
        queries: activeFilter,
      });
      const { result, entities } = normalize(res.data, schemas.Products);

      if (result.length < PAGE_SIZE) {
        dispatch(actions.productsHasNoMore());
      }

      await dispatch(actions.findProductsMore.success({ result, entities }));
    } catch (err) {
      dispatch(actions.findProductsMore.error({ message: err.message }));
    }
  };
}
