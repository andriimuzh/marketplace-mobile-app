import { compose, withHandlers, withState, hoistStatics, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import ProductScreen from './ProductScreenView';
import { productsOperations, productsSelectors } from '../../modules/products';
import { viewerSelectors } from '../../modules/viewer';
import { chatsOperations } from '../../modules/chats';


function mapStateToProps(state, props) {
  const { productId } = props.navigation.state.params;
  return {
    productId,
    product: productsSelectors.getProduct(state, productId),
    owner: productsSelectors.getProductOwner(state, productId),
    isLoading: state.products.product.isLoading,
    viewer: viewerSelectors.getViewer(state),
  };
}

const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
  saveProduct: productsOperations.saveProduct,
  removeFromSaved: productsOperations.removeFromSaved,
  createChat: chatsOperations.createChat,
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
  }),
  lifecycle({
    componentDidMount() {
      if (!this.props.owner || !this.props.product) {
        this.props.fetchProduct(this.props.productId);
      }
    },
  }),
);

export default hoistStatics(enhancer)(ProductScreen);
