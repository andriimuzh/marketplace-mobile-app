import { normalize } from 'normalizr';
import * as actions from './productsActions';
import { PAGE_SIZE } from '../../constants';
import { Api, schemas } from '../../api';

export function fetchLatest() {
  return async function fetchLatestThunk(dispatch) {
    try {
      dispatch(actions.fetchLatest.start());

      const res = await Api.Products.getLatest({ limit: PAGE_SIZE });
      const { result, entities } = normalize(res.data, schemas.Products);

      if (result.length < PAGE_SIZE) {
        dispatch(actions.latestHasNoMore());
      }

      await dispatch(actions.fetchLatest.success({ result, entities }));
    } catch (err) {
      dispatch(actions.fetchLatest.error({ message: err.message }));
    }
  };
}

export function fetchLatestMore() {
  return async function fetchLatestMoreThunk(dispatch, getState) {
    const { isLoadingMore, hasNoMore, items } = getState().products.latest;
    if (hasNoMore || isLoadingMore) {
      return;
    }

    try {
      dispatch(actions.fetchLatestMore.start());

      const res = await Api.Products.getLatest();
      const { result, entities } = normalize(res.data, schemas.Products);

      if (result.length < PAGE_SIZE) {
        dispatch(actions.latestHasNoMore());
      }

      await dispatch(actions.fetchLatestMore.success({ result, entities }));
    } catch (err) {
      dispatch(actions.fetchLatestMore.error({ message: err.message }));
    }
  };
}

export function addProduct(body) {
  return async function addProductThunk(dispatch) {
    try {
      dispatch(actions.addProduct.start());

      const res = await Api.Products.addProduct(body);
      const { result, entities } = normalize(res.data, schemas.Product);

      await dispatch(actions.addProduct.success({ result, entities }));

      return result;
    } catch (err) {
      dispatch(actions.addProduct.error({ message: err.message }));
      throw err;
    }
  };
}

export function fetchProduct(id) {
  return async function fetchProductThunk(dispatch) {
    try {
      dispatch(actions.fetchProduct.start());

      const result = await Api.Products.getProduct(id);
      const data = normalize(result.data, schemas.ProductWithOwner);

      await dispatch(actions.fetchProduct.success(data));
    } catch (err) {
      dispatch(actions.fetchProduct.error({ message: err.message }));
    }
  };
}

export function fetchProductsOwner(id) {
  return async function fetchProductsOwnerThunk(dispatch) {
    try {
      dispatch(actions.fetchProductsOwner.start());

      const result = await Api.Products.getProductsOwner(id);
      const data = normalize(result.data, schemas.user);

      dispatch(actions.fetchProductsOwner.success(data));
    } catch (err) {
      dispatch(actions.fetchProductsOwner.error({ message: err.message }));
    }
  };
}

export function fetchUserProducts(userId) {
  return async function fetchUserProductsThunk(dispatch) {
    try {
      dispatch(actions.fetchUserProducts.start());

      const res = await Api.Products.getUserProducts(userId);
      const { entities, result } = normalize(res.data, schemas.userProductsList);

      dispatch(actions.fetchUserProducts.success({ entities, result, userId }));
    } catch (err) {
      dispatch(actions.fetchUserProducts.error({ message: err.message }));
    }
  };
}

export function saveProduct(product) {
  return async function saveProductThunk(dispatch) {
    const savedProduct = {
      ...product,
      saved: true,
    };
    const newProduct = normalize(savedProduct, schemas.Product);
    try {
      dispatch(actions.saveProduct.start(newProduct));

      await Api.Products.saveProduct(newProduct.result);

      dispatch(actions.saveProduct.success());
    } catch (err) {
      const { entities } = normalize(product, schemas.Product);
      dispatch(actions.saveProduct.error({ entities, err }));
    }
  };
}

export function removeFromSaved(product) {
  return async function removeFromSavedThunk(dispatch) {
    const unSavedProduct = {
      ...product,
      saved: false,
    };
    const newProduct = normalize(unSavedProduct, schemas.Product);
    try {
      dispatch(actions.removeFromSaved.start(newProduct));

      await Api.Products.removeFromSaved(newProduct.result);

      dispatch(actions.removeFromSaved.success());
    } catch (err) {
      const { entities } = normalize(product, schemas.Product);
      dispatch(actions.removeFromSaved.error({ entities, err }));
    }
  };
}

export function fetchSaved() {
  return async function fetchSavedThunk(dispatch) {
    try {
      dispatch(actions.fetchSaved.start());

      const result = await Api.Products.fetchSaved();
      const data = normalize(result.data, schemas.Products);

      dispatch(actions.fetchSaved.success(data));
    } catch (err) {
      dispatch(actions.fetchSaved.error({ message: err.message }));
    }
  };
}
