import { NavigationActions } from 'react-navigation';
import screens from '../navigation/screens';

class NavigationService {
  constructor() {
    this.navigation = null;
  }

  init(ref) {
    if (this.navigation) return;
    this.navigation = ref;
  }

  navigate(route) {
    this.navigation.dispatch(NavigationActions.navigate(route));
  }

  goBack() {
    this.navigation.dispatch(NavigationActions.back());
  }

  navigateToApp() {
    this.navigate({ routeName: screens.MainApp });
  }

  navigateToNewItem() {
    this.navigate({ routeName: screens.NewItem });
  }

  navigateToAuth() {
    this.navigate({ routeName: screens.Auth });
  }

  navigateToRegister() {
    this.navigate({ routeName: screens.Register });
  }

  navigateToLogin() {
    this.navigate({ routeName: screens.Login });
  }

  navigateToSettings() {
    this.navigate({ routeName: screens.Settings });
  }

  navigateToBrowse() {
    this.navigate({ routeName: screens.Browse });
  }

  navigateToFilter(searchBy) {
    this.navigate({ routeName: screens.Filter, params: { searchBy } });
  }

  navigateToChat(propsChatId, productId, ownerId) {
    this.navigate({ routeName: screens.Chat, params: { propsChatId, productId, ownerId } });
  }

  navigateToProfile(userId) {
    this.navigate({ routeName: screens.Profile, params: { userId } });
  }

  navigateToLocation(locationSetter) {
    this.navigate({ routeName: screens.Location, params: { locationSetter } });
  }

  navigateToProduct(productId) {
    this.navigate({ routeName: screens.Product, params: { productId } });
  }
}

export default new NavigationService();
