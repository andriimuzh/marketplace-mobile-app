import { compose, withHandlers, withState, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import ChooseLocationScreen from './ChooseLocationScreenView';
import { NavigationService } from '../../services';
import { searchActions } from '../../modules/search';

function mapStateToProps(state) {
  return {
    prevLocations: state.search.prevLocations,
  };
}

const mapDispatchToProps = {
  setLocationInStore: searchActions.setPrevLocation,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('text', 'setText', ''),
  withState('isInputFocused', 'inputStateChanger', false),
  withHandlers({
    handleChange: ({ setText }) => (value) => {
      setText(value);
    },
    setLocation: ({
      text, navigation, setLocationInStore, prevLocations,
    }) => (prevUsedLocation) => {
      const locationSetter = navigation.getParam('locationSetter');
      const locationValue = text || prevUsedLocation;
      locationSetter(locationValue);
      if (!prevLocations.includes(locationValue)) {
        setLocationInStore(locationValue);
      }
      NavigationService.goBack();
    },
    onInputStateChange: ({ inputStateChanger }) => (inputState) => {
      inputStateChanger(inputState);
    },
  }),
);


export default hoistStatics(enhancer)(ChooseLocationScreen);
