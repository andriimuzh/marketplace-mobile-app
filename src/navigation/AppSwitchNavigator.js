import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import AppTabNavigator from './AppTabNavigator';
import screens from './screens';
import { Empty } from '../components';

const routes = {
  [screens.Empty]: Empty,
  [screens.MainApp]: AppTabNavigator,
  [screens.Auth]: AuthNavigator,
};

export default createSwitchNavigator(routes, {});
