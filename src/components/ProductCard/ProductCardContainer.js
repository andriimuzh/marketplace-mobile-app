import { compose, withHandlers, withState, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import ProductCard from './ProductCardView';
import { productsOperations } from '../../modules/products';
import { NavigationService } from '../../services';

const mapDispatchToProps = {
  saveProduct: productsOperations.saveProduct,
  removeFromSaved: productsOperations.removeFromSaved,
};

const enhancer = compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withState('isImageError', 'imageErrorSetter', false),
  withHandlers({
    onImageError: ({ imageErrorSetter }) => () => {
      imageErrorSetter(true);
    },
    productsSaveSwitcher: ({ product, removeFromSaved, saveProduct }) => (event) => {
      event.stopPropagation();
      if (product.saved) {
        removeFromSaved(product);
      } else {
        saveProduct(product);
      }
    },
    onOpenProduct: ({ product }) => () => {
      NavigationService.navigateToProduct(product.id);
    },
  }),
);

export default hoistStatics(enhancer)(ProductCard);
