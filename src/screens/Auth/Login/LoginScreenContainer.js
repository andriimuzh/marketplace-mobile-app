import { compose, hoistStatics, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import LoginScreen from './LoginScreenView';
import { authOperations } from '../../../modules/auth';
import { setServerError, validationSchemas } from '../../../utils';


function mapStateToProps(state) {
  return {
    isLoading: state.auth.login.isLoading,
    error: state.auth.login.error,
  };
}

const mapDispatchToProps = {
  login: authOperations.login,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  // withFormik({
  //   validationSchema: validationSchemas.login,
  //   mapPropsToValues: () => ({ email: '', password: '' }),
  //   handleSubmit: async (body, { props, setError }) => {
  //     const data = {
  //       email: body.email.trim(),
  //       password: body.password.trim(),
  //     };
  //     try {  //FIXME:
  //       await props.login(data);
  //       NavigationService.navigateToApp();
  //     } catch (err) {
  //       setError({ email: setServerError(err) });
  //     }
  //   },
  // }),
  withState('serverError', 'serverErrorSetter', {}),
  withHandlers({
    handleLogin: ({ login, serverErrorSetter }) => async (
      body,
    ) => {
      try {
        await login(body);
      } catch (err) {
        serverErrorSetter(setServerError(err));
      }
    },
    removeErrors: ({ serverErrorSetter, serverError }) => () => {
      if (serverError !== {}) {
        serverErrorSetter({});
      }
    },
  }),
);

export default hoistStatics(enhancer)(LoginScreen);
