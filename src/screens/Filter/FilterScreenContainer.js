import { compose, withHandlers, hoistStatics, withStateHandlers } from 'recompose';
import { Alert } from 'react-native';
import FilterScreen from './FilterScreenView';
import { NavigationService } from '../../services';


const enhancer = compose(
  withStateHandlers(
    {
      location: '',
      priceFrom: '',
      priceTo: '',
      isPriceFree: false,
    },
    {
      onPriceChoose: () => (value) => {
        switch (value) {
          case 'free':
            return { isPriceFree: true };
          case 'price':
            return { isPriceFree: false };
          default:
            break;
        }
      },
      setLocation: () => (newLocation) => ({
        location: newLocation,
      }),
      setPriceFrom: () => (value) => ({
        priceFrom: value,
      }),
      setPriceTo: () => (value) => ({
        priceTo: value,
      }),
    },
  ),
  withHandlers({
    startSearch: ({
      navigation, location, priceFrom, priceTo, isPriceFree,
    }) => () => {
      const searchBy = navigation.getParam('searchBy');
      if (!location) {
        Alert.alert('Location is required');
        return;
      }

      let query = { location };
      if (priceFrom) {
        query = {
          ...query,
          priceFrom,
        };
      }
      if (priceTo) {
        query = {
          ...query,
          priceTo,
        };
      }
      if (isPriceFree) {
        query = {
          location,
          priceFrom: 0,
          priceTo: 0,
        };
      }
      searchBy(query);
      NavigationService.goBack();
    },
  }),
);

export default hoistStatics(enhancer)(FilterScreen);
