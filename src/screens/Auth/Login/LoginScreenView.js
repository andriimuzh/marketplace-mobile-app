import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import T from 'prop-types';
import { Formik } from 'formik';
import s from './styles';
import { validationSchemas, deviceUtils } from '../../../utils';
import { AuthInput, PrimaryButton, Loader, Touchable } from '../../../components';
import { NavigationService } from '../../../services';


function LoginScreen({
  handleLogin, serverError, removeErrors, isLoading,
}) {
  return (
    <Formik
      validationSchema={validationSchemas.login}
      initialValues={{ email: '', password: '' }}
      onSubmit={(body) => {
      handleLogin(body);
    }}
    >
      {(props) => (
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={deviceUtils.isAndroid ? '80' : '50'}
          style={s.container}
        >
          <View style={s.inputsWrap}>
            <AuthInput
              serverError={serverError}
              removeErrors={removeErrors}
              label="Email"
              formikProps={props}
              fieldKey="email"
              placeholder="Email"
              autoCompleteType="off"
            />
            <AuthInput
              serverError={serverError}
              removeErrors={removeErrors}
              secureTextEntry
              label="Password"
              placeholder="Password"
              formikProps={props}
              fieldKey="password"
            />
          </View>
          <View style={s.bottomBar}>
            <View style={s.bottomLeft}>
              <Text style={s.text} >
        Don&apos;t have an account?
              </Text>
              <Touchable
                onPress={() => NavigationService.navigateToRegister()}
                useOpacityAndroid
              >
                <Text style={s.textButton}>REGISTER</Text>
              </Touchable>
            </View>
            <PrimaryButton title="LOGIN" onPress={props.handleSubmit} />
          </View>
          <Loader text="Login..." loading={isLoading} />
        </KeyboardAvoidingView>
        )}
    </Formik>
  );
}


LoginScreen.propTypes = {
  isLoading: T.bool,
  handleSubmit: T.func,
  handleLogin: T.func,
  serverError: T.object,
  removeErrors: T.func,
};

const func = () => {};

LoginScreen.defaultProps = {
  handleSubmit: func,
  handleLogin: func,
  removeErrors: func,
  isLoading: false,
  serverError: '',
};

LoginScreen.navigationOptions = {
  title: 'Login',
};


export default LoginScreen;
