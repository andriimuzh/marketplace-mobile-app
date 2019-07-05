import { connect } from 'react-redux';
import { compose, hoistStatics, lifecycle, withProps } from 'recompose';
import ProfileScreen from './ProfileScreenView';
import { viewerSelectors } from '../../modules/viewer';
import { productsSelectors, productsOperations } from '../../modules/products';
import { isThisViewer } from './helpers';


function mapStateToProps(state, props) {
  const { params } = props.navigation.state;
  const userId = params && params.userId;
  const viewerId = state.viewer.user && state.viewer.user.id;

  return {
    userId,
    viewer: viewerSelectors.getViewer(state),
    products: productsSelectors.getOwnerProducts(state, userId || viewerId),
    productOwner: productsSelectors.getOwner(state, userId),
    productsIsLoading: state.products.userProducts.isLoading,
    userIsLoading: state.products.productsOwner.isLoading,
  };
}

const mapDispatchToProps = {
  fetchProducts: productsOperations.fetchUserProducts,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withProps((props) => ({ isViewerProfile: isThisViewer(props.viewer, props.userId) })),
  lifecycle({
    async componentDidMount() {
      const {
        viewer, productOwner, fetchProducts,
        navigation, userId, isViewerProfile,
      } = this.props;

      if (isViewerProfile) {
        navigation.setParams({ navProps: { user: viewer, isViewerProfile, userId } });
        await fetchProducts(viewer.id);
        const count = this.props.products.length;
        navigation.setParams({
          navProps: {
            user: viewer, count, isViewerProfile, userId,
          },
        });
      } else if (userId) {
        navigation.setParams({ navProps: { user: productOwner, isViewerProfile, userId } });
        await fetchProducts(userId);
        const count = this.props.products.length;
        navigation.setParams({
          navProps: {
            user: productOwner, count, isViewerProfile, userId,
          },
        });
      }
    },
  }),
);

export default hoistStatics(enhancer)(ProfileScreen);

// else if (!isViewerProfile && userId) {
//   console.log('two');
//   navigation.setParams({ navProps: null });
// }
