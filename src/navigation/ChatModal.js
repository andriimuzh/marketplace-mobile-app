import { createStackNavigator } from 'react-navigation';
import ChatScreen from '../screens/Chat/ChatScreenContainer';
import screens from './screens';

const routes = {
  [screens.Chat]: ChatScreen,
};

export default createStackNavigator(routes, {
});
