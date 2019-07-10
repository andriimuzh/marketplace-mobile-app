import React from 'react';
import { View, TextInput } from 'react-native';
import T from 'prop-types';
import s from './styles';

function SearchInput({
  onChange, children, style, text, onSubmit, onBlur, onFocus,
}) {
  return (
    <View style={[s.container, style]}>
      <TextInput
        style={s.input}
        value={text}
        blurOnSubmit
        onChangeText={(e) => onChange(e)}
        onSubmitEditing={onSubmit}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <View style={s.iconWrap}>
        {children}
      </View>
    </View>
  );
}

SearchInput.propTypes = {
  children: T.element,
  onChange: T.func,
  style: T.object,
  text: T.string,
  onSubmit: T.func,
  onBlur: T.func,
  onFocus: T.func,
};

const func = () => {};

SearchInput.defaultProps = {
  text: '',
  onChange: func,
  onFocus: func,
  onSubmit: func,
  onBlur: func,
};

export default SearchInput;
