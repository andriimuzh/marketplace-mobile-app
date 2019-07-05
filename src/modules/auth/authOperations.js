import { normalize } from 'normalizr';
import * as actions from './authActions';
import { Api, schemas } from '../../api';
import { NavigationService } from '../../services';


export function login(body) {
  return async function loginThunk(dispatch) {
    try {
      dispatch(actions.login.start());

      const result = await Api.Auth.login(body);
      const { user, token } = result.data;

      const { entities } = normalize(user, schemas.user);
      Api.Auth.setToken(token);

      dispatch(actions.login.success({ user, entities }));

      NavigationService.navigateToApp();
    } catch (err) {
      dispatch(actions.login.error({ message: err.message }));
      throw err;
    }
  };
}

export function register(body) {
  return async function registerThunk(dispatch) {
    try {
      dispatch(actions.register.start());

      const res = await Api.Auth.register(body);
      const { user, token } = res.data;

      const { entities } = normalize(user, schemas.user);
      Api.Auth.setToken(token);

      dispatch(actions.register.success({ user, entities }));

      NavigationService.navigateToApp();
    } catch (err) {
      dispatch(actions.register.error({ message: err.message }));
      throw err;
    }
  };
}
