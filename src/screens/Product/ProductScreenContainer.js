import { compose, withHandlers, withState, hoistStatics, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Alert, Share } from 'react-native';
import ProductScreen from './ProductScreenView';
import { productsOperations, productsSelectors } from '../../modules/products';
import { viewerSelectors } from '../../modules/viewer';
import { NavigationService } from '../../services';
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
        const { chatId, ownerId } = product;
        NavigationService.navigateToChat(chatId, ownerId);
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
    onImageShare: ({ product }) => async () => {
      const url = `https://apiko-marketplace-api-2019.herokuapp.com/products/${product.id}`;
      try {
        const result = await Share.share({
          title: product.title,
          message: url,
        });
        // FIXME:
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        // alert(error.message);
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      const {
        productOwner, product, navigation, fetchProduct,
        productId, productsSaveSwitcher, viewer, onImageShare,
      } = this.props;

      navigation.setParams({
        navProps: {
          product, productsSaveSwitcher, viewer, onImageShare,
        },
      });

      if (!productOwner || !product) {
        fetchProduct(productId);
      }
    },
    componentDidUpdate(prevProps) {
      const {
        product, navigation, productsSaveSwitcher, viewer, onImageShare,
      } = this.props;

      if (product.saved !== prevProps.product.saved) {
        navigation.setParams({
          navProps: {
            product, productsSaveSwitcher, viewer, onImageShare,
          },
        });
      }
    },
  }),
);

export default hoistStatics(enhancer)(ProductScreen);
