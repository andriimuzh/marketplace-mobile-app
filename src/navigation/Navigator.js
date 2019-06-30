import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import AppSwitchNavigator from './AppSwitchNavigator';
import NewItemModal from './NewItemModal';
import FilterModal from './FilterModal';
import ChatModal from './ChatModal';


const routes = {
  [screens.App]: AppSwitchNavigator,
  [screens.NewItemModal]: NewItemModal,
  [screens.FilterModal]: FilterModal,
  [screens.ChatModal]: ChatModal,
};

export default createStackNavigator(routes, {
  headerMode: 'none',
  mode: 'modal',
});
