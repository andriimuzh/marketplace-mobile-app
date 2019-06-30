import { compose, hoistStatics, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import BrowseScreen from './BrowseScreenView';
import { productsOperations, productsSelectors } from '../../modules/products';


function mapStateToProps(state) {
  return {
    list: productsSelectors.getLatest(state),
    isLoading: state.products.latest.isLoading,
    isLoadingMore: state.products.latest.isLoadingMore,
    hasNoMore: state.products.latest.hasNoMore,
  };
}

const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest,
  fetchLatestMore: productsOperations.fetchLatestMore,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchLatest();
    },
  }),
);

export default hoistStatics(enhancer)(BrowseScreen);
