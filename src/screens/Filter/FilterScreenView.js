import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import T from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';
import s from './styles';
import { deviceUtils } from '../../utils';
import { colors } from '../../styles';
import { SegmentedControl, WideLink, CloseButton, Touchable } from '../../components';
import { NavigationService } from '../../services';


function FilterScreen({
  onPriceChoose, isPriceFree, setPriceFrom, priceFrom,
  priceTo, setPriceTo, setLocation, location, startSearch,
}) {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={deviceUtils.isAndroid ? '80' : '50'}
      style={s.container}
    >
      <View style={s.topContainer}>
        <WideLink
          styles={s.locationBox}
          onPress={() => NavigationService.navigateToLocation(setLocation)}
        >
          <EvilIcons name="location" size={30} color={colors.primary} />
          <Text style={s.locationText}>{location || 'Location'}</Text>
        </WideLink>
        <SegmentedControl
          handleSelect={onPriceChoose}
          isPriceFree={isPriceFree}
        />
        <View style={s.price}>
          <TextInput
            placeholder="From"
            value={isPriceFree ? '' : priceFrom}
            onChangeText={(e) => setPriceFrom(e)}
            editable={!isPriceFree}
            style={s.priceInput}
          />
          <TextInput
            placeholder="To"
            value={isPriceFree ? '' : priceTo}
            onChangeText={(e) => setPriceTo(e)}
            editable={!isPriceFree}
            style={s.priceInput}
          />
        </View>
      </View>

      <Touchable
        style={s.wideButton}
        containerStyle={s.wideButton}
        onPress={() => startSearch()}
      >
        <Text style={s.wideButtonText}>RESULTS</Text>
      </Touchable>
    </KeyboardAvoidingView>
  );
}

FilterScreen.navigationOptions = () => ({
  headerTitle: 'Filter',
  headerLeft: <CloseButton />,
});

FilterScreen.propTypes = {
  onPriceChoose: T.func,
  setPriceFrom: T.func,
  startSearch: T.func,
  setPriceTo: T.func,
  priceTo: T.string,
  location: T.string,
  priceFrom: T.string,
  setLocation: T.func,
  isPriceFree: T.bool,
};

const func = () => {};

FilterScreen.defaultProps = {
  onPriceChoose: func,
  setLocation: func,
  setPriceFrom: func,
  startSearch: func,
  setPriceTo: func,
  priceTo: '',
  location: '',
  isPriceFree: false,
};

export default FilterScreen;
