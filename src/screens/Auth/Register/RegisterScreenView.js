import React from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import T from 'prop-types';
import s from './styles';
import { NavigationService } from '../../../services';
import { validationSchemas, deviceUtils } from '../../../utils';
import { AuthInput, PrimaryButton, Loader, Touchable } from '../../../components';


function RegisterScreen({
  handleRegister, serverError, removeErrors, isLoading,
}) {
  return (
    <Formik
      validationSchema={validationSchemas.register}
      initialValues={{
      email: '',
      password: '',
      fullName: '',
      passwordAgain: '',
      }}
      onSubmit={async (body) => {
      await handleRegister(body);
    }}
    >
      {(props) => (
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={s.container}
          extraHeight={deviceUtils.isAndroid ? 80 : 60}
          scrollEnabled
          enableOnAndroid
          enableAutoAutomaticScroll={!deviceUtils.isAndroid}
        >
          <View style={s.inputsWrap}>
            <AuthInput
              serverError={serverError}
              removeErrors={removeErrors}
              autoCompleteType="off"
              label="Email"
              fieldKey="email"
              formikProps={props}
              placeholder="Email"
            />
            <AuthInput
              serverError={serverError}
              removeErrors={removeErrors}
              autoCompleteType="off"
              label="User name"
              fieldKey="fullName"
              formikProps={props}
              placeholder="User name"
            />
            <AuthInput
              serverError={serverError}
              removeErrors={removeErrors}
              secureTextEntry
              formikProps={props}
              fieldKey="password"
              placeholder="Password"
              label="Password"
            />
            <AuthInput
              serverError={serverError}
              removeErrors={removeErrors}
              secureTextEntry
              formikProps={props}
              fieldKey="passwordAgain"
              placeholder="Repeat password"
              label="Repeat password"
            />
          </View>
          <View style={s.bottomBar}>
            <View style={s.bottomLeft}>
              <Text style={s.text} >
      Don&apos;t have an account?
              </Text>
              <Touchable
                onPress={() => NavigationService.navigateToLogin()}
                useOpacityAndroid
              >
                <Text style={s.textButton}>LOGIN</Text>
              </Touchable>
            </View>
            <PrimaryButton onPress={props.handleSubmit} title="REGISTER" />
          </View>
          <Loader text="Registration..." loading={isLoading} />
        </KeyboardAwareScrollView>
          )}
    </Formik>
  );
}

RegisterScreen.propTypes = {
  handleRegister: T.func,
  serverError: T.object,
  removeErrors: T.func,
  isLoading: T.bool,
  handleSubmit: T.func,
};

const func = () => {};

RegisterScreen.defaultProps = {
  handleRegister: func,
  removeErrors: func,
  handleSubmit: func,
  isLoading: false,
  serverError: '',
};

RegisterScreen.navigationOptions = () => ({
  title: 'Register',
  headerLeft: null,
});


export default RegisterScreen;
