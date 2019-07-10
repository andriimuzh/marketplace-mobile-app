import { compose, withHandlers, withState, hoistStatics, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Alert, Share } from 'react-native';
import ProductScreen from './ProductScreenView';
import { productsOperations, productsSelectors } from '../../modules/products';
import { viewerSelectors } from '../../modules/viewer';
import { NavigationService } from '../../services';
import { deviceUtils } from '../../utils';
import { getPhoneNumber, openUrl } from './helpers';

function mapStateToProps(state, props) {
  const { productId } = props.navigation.state.params;
  return {
    productId,
    product: productsSelectors.getProduct(state, productId),
    productOwner: productsSelectors.getProductOwner(state, productId),
    isLoading: state.products.product.isLoading,
    viewer: viewerSelectors.getViewer(state),
  };
}

const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
  saveProduct: productsOperations.saveProduct,
  removeFromSaved: productsOperations.removeFromSaved,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('isImageError', 'imageErrorSetter', false),
  withHandlers({
    onImageError: ({ imageErrorSetter }) => () => {
      imageErrorSetter(true);
    },
    productsSaveSwitcher: ({ product, removeFromSaved, saveProduct }) => () => {
      if (product.saved) {
        removeFromSaved(product);
      } else {
        saveProduct(product);
      }
    },
    callLoginAlert: () => () => {
      Alert.alert(
        'Login to contact the seller', '',
        [{
          text: 'Cancel',
        },
        {
          text: 'Login',
          onPress: () => {
            NavigationService.navigateToLogin();
          },
        }],
      );
    },
    callNoPhoneNumberAlert: () => () => {
      Alert.alert('Phone number is not available',
        'Send message to contact the seller');
    },
  }),
  withHandlers({
    onMessagePress: ({ callLoginAlert, viewer, product }) => () => {
      if (viewer) {
        const {
          chatId, id, owner, ownerId,
        } = product;
        const userId = owner || ownerId;
        NavigationService.navigateToChat(chatId, id, userId);
      } else {
        callLoginAlert();
      }
    },
    onCallPress: ({
      callLoginAlert, callNoPhoneNumberAlert, viewer, productOwner,
    }) => () => {
      if (viewer) {
        if (productOwner && productOwner.phone) {
          const phoneNumber = getPhoneNumber(productOwner.phone);
          openUrl(phoneNumber, callNoPhoneNumberAlert);
        } else {
          callNoPhoneNumberAlert();
        }
      } else {
        callLoginAlert();
      }
    },
    onProductShare: ({ product }) => async () => {
      const item = `https://apiko-marketplace-api-2019.herokuapp.com/products/${product.id}`;
      try {
        await Share.share(
          deviceUtils.isAndroid ?
            {
              message: item,
              title: product.title,
            } :
            {
              url: item,
            },
        );
      } catch (error) {
        console.log(error);
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      const {
        product, navigation, fetchProduct,
        productId, productsSaveSwitcher, viewer, onProductShare,
      } = this.props;

      navigation.setParams({
        navProps: {
          product, productsSaveSwitcher, viewer, onProductShare,
        },
      });

      fetchProduct(productId);
    },
    componentDidUpdate(prevProps) {
      const {
        product, navigation, productsSaveSwitcher, viewer,
        onProductShare,
      } = this.props;


      if (product.saved !== prevProps.product.saved) {
        navigation.setParams({
          navProps: {
            product, productsSaveSwitcher, viewer, onProductShare,
          },
        });
      }
    },
  }),
);

export default hoistStatics(enhancer)(ProductScreen);
