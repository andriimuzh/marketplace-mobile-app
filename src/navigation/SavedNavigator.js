import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import SavedScreen from '../screens/Saved/SavedScreenContainer';
import ProductScreen from '../screens/Product/ProductScreenContainer';

const routes = {
  [screens.Saved]: SavedScreen,
  [screens.Product]: ProductScreen,
};


export default createStackNavigator(routes, {});
