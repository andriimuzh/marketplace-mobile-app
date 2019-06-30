import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import InboxScreen from '../screens/Inbox/InboxScreenContainer';
import s from './styles';
import { colors } from '../styles';


const routes = {
  [screens.Inbox]: InboxScreen,
};


export default createStackNavigator(routes, {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: s.headerStyle,
    headerTintColor: colors.textPrimary,
    headerTitleStyle: s.headerTitleStyle,
  },
});
