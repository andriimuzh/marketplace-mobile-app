import { createStackNavigator } from 'react-navigation';
import FilterScreen from '../screens/Filter/FilterScreenContainer';
import ChooseLocationScreen from '../screens/Location/ChooseLocationScreenContainer';
import screens from './screens';
import s from './styles';
import { colors } from '../styles';

const routes = {
  [screens.Filter]: FilterScreen,
  [screens.Location]: ChooseLocationScreen,
};

export default createStackNavigator(routes, {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: s.headerStyle,
    headerTintColor: colors.textPrimary,
    headerTitleStyle: s.headerTitleStyle,
  },
});
