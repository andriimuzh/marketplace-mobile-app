import { compose, hoistStatics, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import SavedScreen from './SavedScreenView';
import { productsOperations, productsSelectors } from '../../modules/products';

function mapStateToProps(state) {
  return {
    list: productsSelectors.getSaved(state),
    isLoading: state.products.savedProducts.isLoading,
  };
}

const mapDispatchToProps = {
  fetchSaved: productsOperations.fetchSaved,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchSaved();
    },
  }),
);


export default hoistStatics(enhancer)(SavedScreen);
