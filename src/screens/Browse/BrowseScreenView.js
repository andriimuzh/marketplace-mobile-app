import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { ProductList } from '../../components';
import { BrowseHeader, FilterChip, EmptySearch } from './components';

function BrowseScreen({
  latestList,
  isLoading,
  isLoadingMore,
  fetchLatest,
  fetchLatestMore,
  searchList,
  isSearching,
  isSearchingMore,
  findProducts,
  findProductsMore,
  filterList,
  removeActiveFilter,
}) {
  if (filterList.length !== 0) {
    return (
      <React.Fragment>
        <FlatList
          horizontal
          style={s.filterList}
          data={filterList}
          keyExtractor={item => `${item.query}-${item.filterName}`}
          renderItem={({ item }) => <FilterChip item={item} onClose={removeActiveFilter} />}
        />
        <ProductList
          items={searchList}
          isLoading={isSearching}
          isLoadingMore={isSearchingMore}
          fetchItems={findProducts}
          fetchItemsMore={findProductsMore}
          ListEmptyComponent={EmptySearch}
        />
      </React.Fragment>
    );
  }
  return (
    <ProductList
      items={latestList}
      isLoading={isLoading}
      isLoadingMore={isLoadingMore}
      fetchItems={fetchLatest}
      fetchItemsMore={fetchLatestMore}
    />
  );
}

BrowseScreen.navigationOptions = (props) => {
  const navProps = props.navigation.getParam('navProps');
  if (navProps) {
    const { startSearchBy, setInputFocus } = navProps;
    return {
      header:
  <BrowseHeader searchBy={startSearchBy} setInputFocus={setInputFocus} />,
    };
  }
};

BrowseScreen.propTypes = {
  latestList: T.array.isRequired,
  isLoading: T.bool,
  isLoadingMore: T.bool,
  fetchLatest: T.func,
  fetchLatestMore: T.func,
  searchList: T.array,
  isSearching: T.bool,
  isSearchingMore: T.bool,
  findProducts: T.func,
  findProductsMore: T.func,
  filterList: T.array,
  removeActiveFilter: T.func,
};

const func = () => {};

BrowseScreen.defaultProps = {
  isLoading: false,
  isLoadingMore: false,
  fetchLatest: func,
  fetchLatestMore: func,
  removeActiveFilter: func,
  findProducts: func,
};

export default BrowseScreen;
