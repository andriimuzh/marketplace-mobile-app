import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import BrowseScreen from '../screens/Browse/BrowseScreenContainer';
import ProductScreen from '../screens/Product/ProductScreenContainer';
import ProfileScreen from '../screens/Profile/ProfileScreenContainer';
import s from './styles';
import { colors } from '../styles';


const routes = {
  [screens.Browse]: BrowseScreen,
  [screens.Product]: ProductScreen,
  [screens.Profile]: ProfileScreen,
};


export default createStackNavigator(routes, {
  initialRouteName: screens.Browse,
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: s.headerStyle,
    headerTintColor: colors.textPrimary,
    headerTitleStyle: s.headerTitleStyle,
  },
});
