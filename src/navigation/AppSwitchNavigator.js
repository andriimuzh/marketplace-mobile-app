import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import AppTabNavigator from './AppTabNavigator';
import screens from './screens';
import { Empty } from '../components';


const routes = {
  [screens.Init]: Empty, // remove in Production
  [screens.MainApp]: AppTabNavigator,
  [screens.Auth]: AuthNavigator,
};

export default createSwitchNavigator(routes, {});
