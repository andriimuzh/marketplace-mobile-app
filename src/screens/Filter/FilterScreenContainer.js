import { compose, withHandlers, withState, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import FilterScreen from './FilterScreenView';


const enhancer = compose(
  connect(),
  withState('isPriceFree', 'setPrice', false),
  withHandlers({
    onPriceChoose: ({ setPrice }) => (value) => {
      switch (value) {
        case 'free':
          setPrice(true);
          break;
        case 'price':
          setPrice(false);
          break;
        default:
          break;
      }
    },
    setLocation: () => (location) => {
      console.log(location);
    },
  }),
);

export default hoistStatics(enhancer)(FilterScreen);
