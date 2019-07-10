import { compose, hoistStatics, lifecycle, withHandlers, withState, withProps } from 'recompose';
import { connect } from 'react-redux';
import BrowseScreen from './BrowseScreenView';
import { productsOperations, productsSelectors } from '../../modules/products';
import { searchOperations, searchSelectors, searchActions } from '../../modules/search';


function mapStateToProps(state) {
  return {
    latestList: productsSelectors.getLatest(state),
    isLoading: state.products.latest.isLoading,
    isLoadingMore: state.products.latest.isLoadingMore,
    searchList: searchSelectors.getSearchResults(state),
    isSearching: state.search.findProducts.isLoading,
    isSearchingMore: state.search.findMore.isLoadingMore,
    activeFilter: state.search.activeFilter,
    prevKeywords: searchSelectors.getKeywordsItems(state),
  };
}

const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest,
  fetchLatestMore: productsOperations.fetchLatestMore,
  findProducts: searchOperations.findProducts,
  findProductsMore: searchOperations.findProductsMore,
  removeFilter: searchActions.removeFilter,
  setPrevKeyword: searchActions.setPrevKeyword,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('isInputInFocus', 'setInputFocus', false),
  withHandlers({
    startSearchBy: ({ findProducts, setPrevKeyword, prevKeywords }) => (query) => {
      if (query.keywords) {
        if (!prevKeywords.includes(query.keywords)) {
          setPrevKeyword(query.keywords);
        }
      }
      findProducts(query);
    },
    removeActiveFilter: ({ removeFilter }) => (filterName) => {
      removeFilter(filterName);
    },
  }),
  lifecycle({
    componentDidMount() {
      const {
        fetchLatest, startSearchBy, navigation, setInputFocus,
      } = this.props;
      navigation.setParams({
        navProps: {
          startSearchBy,
          setInputFocus,
        },
      });

      fetchLatest();
    },
  }),
  withProps(({ activeFilter }) => ({
    filterList: Object.keys(activeFilter).map(i => ({ filterName: i, query: activeFilter[i] })),
  }),
  ),
);

export default hoistStatics(enhancer)(BrowseScreen);
