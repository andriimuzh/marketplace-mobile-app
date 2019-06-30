import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import LoginScreen from '../screens/Auth/Login/LoginScreenContainer';
import RegisterScreen from '../screens/Auth/Register/RegisterScreenContainer';
import s from './styles';
import { colors } from '../styles';

const routes = {
  [screens.Login]: LoginScreen,
  [screens.Register]: RegisterScreen,
};


export default createStackNavigator(routes, {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: s.headerStyle,
    headerTintColor: colors.textPrimary,
    headerTitleStyle: s.headerTitleStyle,
  },
});
