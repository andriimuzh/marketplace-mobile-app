import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import BrowseScreen from '../screens/Browse/BrowseScreenContainer';
import ProductScreen from '../screens/Product/ProductScreenContainer';

const routes = {
  [screens.Browse]: BrowseScreen,
  [screens.Product]: ProductScreen,
};


export default createStackNavigator(routes, {});
