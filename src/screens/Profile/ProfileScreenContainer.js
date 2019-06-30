import { connect } from 'react-redux';
import { compose, withHandlers, withState, hoistStatics, lifecycle } from 'recompose';
import ProfileScreen from './ProfileScreenView';
import { viewerSelectors } from '../../modules/viewer';
import { productsSelectors, productsOperations } from '../../modules/products';


function mapStateToProps(state, props) {
  const { params } = props.navigation.state;
  const userId = params && params.userId;
  return {
    userId,
    viewer: viewerSelectors.getViewer(state),
    owner: productsSelectors.getOwner(state, userId),
    products: productsSelectors.getOwnerProducts(state),
    productsIsLoading: state.products.userProducts.isLoading,
    userIsLoading: state.products.productsOwner.isLoading,
    count: state.products.userProducts.count,
  };
}

const mapDispatchToProps = {
  fetchProducts: productsOperations.fetchUserProducts,
  fetchProductsOwner: productsOperations.fetchProductsOwner,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    async componentDidMount() {
      const {
        viewer, owner, fetchProducts, navigation, userId, fetchProductsOwner,
      } = this.props;
      // TODO: add guest mode with screenProps
      if (viewer && userId) {
        if (userId === viewer.id) {
          navigation.setParams({ navProps: { user: viewer, isViewer: true } });
          await fetchProducts(viewer.id);
          const { count } = this.props;
          navigation.setParams({ navProps: { user: viewer, count, isViewer: true } });
        } else {
          if (!owner) {
            await fetchProductsOwner(userId);
          }
          navigation.setParams({ navProps: { user: viewer, isViewer: false } });
          await fetchProducts(viewer.id);
          const { count } = this.props;
          navigation.setParams({ navProps: { user: owner, count, isViewer: false } });
        }
      } else if (viewer) {
        navigation.setParams({ navProps: { user: viewer, isViewer: true } });
        await fetchProducts(viewer.id);
        const { count } = this.props;
        navigation.setParams({ navProps: { user: viewer, count, isViewer: true } });
      } else if (userId) {
        if (!owner) {
          await fetchProductsOwner(userId);
        }
        navigation.setParams({ navProps: { user: viewer, isViewer: false } });
        await fetchProducts(userId);
        const { count } = this.props;
        navigation.setParams({ navProps: { user: owner, count, isViewer: false } });
      }
    },
  }),
);

export default hoistStatics(enhancer)(ProfileScreen);
