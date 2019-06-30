import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import T from 'prop-types';
import s from './styles';
import { colors } from '../../styles';

function AuthInput({
  label, formikProps, removeErrors, serverError, fieldKey, ...rest
}) {
  const {
    handleChange, errors, touched, handleBlur,
  } = formikProps;

  const errorMessage = errors[fieldKey] || serverError[fieldKey];


  let inputOptionalStyles;
  if (touched[fieldKey] && errorMessage) {
    inputOptionalStyles = s.error;
  } else if (touched[fieldKey]) {
    inputOptionalStyles = s.success;
  }


  return (
    <View style={[s.container, touched[fieldKey] && errorMessage && { marginBottom: 5 }]}>
      <Text style={s.label}>{ label }</Text>
      <TextInput
        onChangeText={handleChange(fieldKey)}
        onChange={removeErrors}
        onBlur={handleBlur(fieldKey)}
        style={[s.input, inputOptionalStyles]}
        {...rest}
      />
      {touched[fieldKey] && errorMessage &&
      <Text style={s.errorMessage}>{errorMessage}</Text>}
      {touched[fieldKey] && errorMessage &&
      <View style={s.errorIcon}>
        <MaterialIcons
          size={20}
          name="error-outline"
          color={colors.error}
        />
      </View>}
    </View>
  );
}

AuthInput.propTypes = {
  formikProps: T.object.isRequired,
  label: T.string,
  fieldKey: T.string,
  serverError: T.object,
  removeErrors: T.func,
};

AuthInput.defaultProps = {
  label: '',
  fieldKey: '',
  serverError: {},
  removeErrors: () => {},
};

export default AuthInput;
