import { createStackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';
import ChatScreen from '../screens/Chat/ChatScreenContainer';
import screens from './screens';
import { colors } from '../styles';

const routes = {
  [screens.Chat]: ChatScreen,
};

export default createStackNavigator(routes, {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: {
      height: 47,
      backgroundColor: colors.white,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.border,
      elevation: 0,
    },
  },
});
