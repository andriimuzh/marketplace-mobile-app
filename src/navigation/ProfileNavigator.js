import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import SettingsScreen from '../screens/Settings/SettingsScreenContainer';
import ProfileScreen from '../screens/Profile/ProfileScreenContainer';
import ProductScreen from '../screens/Product/ProductScreenContainer';
import s from './styles';
import { colors } from '../styles';


const routes = {
  [screens.Profile]: ProfileScreen,
  [screens.Settings]: SettingsScreen,
  [screens.Product]: ProductScreen,
};


export default createStackNavigator(routes, {
  initialRouteName: screens.Profile,
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: s.headerStyle,
    headerTintColor: colors.textPrimary,
    headerTitleStyle: s.headerTitleStyle,
  },
});
