import React from 'react';
import { View, Text, TextInput } from 'react-native';
import T from 'prop-types';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import s from './styles';
import { colors } from '../../../../styles';
import { NavigationService } from '../../../../services';
import { Touchable } from '../../../../components';

function BrowseHeader({
  onInputStateChange, text, isInputFocused, handleChange,
  startSearch, searchBy, onCancelPress,
}) {
  return (
    <View style={s.container}>
      <View style={[s.inputContainer, isInputFocused && s.inputFocused]}>
        <TextInput
          style={s.input}
          value={text}
          onChangeText={(e) => handleChange(e)}
          onSubmitEditing={startSearch}
          blurOnSubmit
          onBlur={() => onInputStateChange(false)}
          onFocus={() => onInputStateChange(true)}
        />
        <View style={s.iconWrap}>
          <Ionicons name="ios-search" size={28} color={colors.primary} />
        </View>
      </View>
      {isInputFocused ?
        <Touchable
          hitSlop={5}
          style={s.headerRight}
          onPress={() => onCancelPress()}
          useOpacityAndroid
        >
          <Text style={s.cancel}>Cancel</Text>
        </Touchable> :
        <Touchable
          hitSlop={10}
          onPress={() => NavigationService.navigateToFilter(searchBy)}
          style={s.headerRight}
          useOpacityAndroid
        >
          <AntDesign name="filter" size={28} color={colors.primary} />
        </Touchable>}
    </View>
  );
}

BrowseHeader.propTypes = {
  onInputStateChange: T.func,
  handleChange: T.func,
  startSearch: T.func,
  onCancelPress: T.func,
  searchBy: T.func,
  text: T.string,
  isInputFocused: T.bool,
};

const func = () => {};

BrowseHeader.defaultProps = {
  onInputStateChange: func,
  handleChange: func,
  startSearch: func,
  onCancelPress: func,
  searchBy: func,
  text: '',
  isInputFocused: false,
};


export default BrowseHeader;
