import React from 'react';
import { View } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import T from 'prop-types';
import s from './styles';
import { ProductList, SearchInput } from '../../components';
import { Touchable } from '../../atoms';
import { colors } from '../../styles';
import { NavigationService } from '../../services';

function BrowseScreen({
  list,
  isLoading,
  isLoadingMore,
  fetchLatest,
  fetchLatestMore,
}) {
  return (
    <ProductList
      items={list}
      isLoading={isLoading}
      isLoadingMore={isLoadingMore}
      fetchItems={fetchLatest}
      fetchItemsMore={fetchLatestMore}
    />
  );
}

BrowseScreen.navigationOptions = () => ({
  header:
  <View style={s.headerContainer}>
    <SearchInput style={s.searchInput}>
      <Ionicons name="ios-search" size={28} color={colors.primary} />
    </SearchInput>
    <Touchable
      hitSlop={10}
      onPress={() => NavigationService.navigateToFilter()}
      style={s.headerRight}
      useOpacityAndroid
    >
      <AntDesign name="filter" size={28} color={colors.primary} />
    </Touchable>
  </View>,
});

BrowseScreen.propTypes = {
  list: T.array.isRequired,
  isLoading: T.bool,
  isLoadingMore: T.bool,
  fetchLatest: T.func,
  fetchLatestMore: T.func,
};

const func = () => {};

BrowseScreen.defaultProps = {
  isLoading: false,
  isLoadingMore: false,
  fetchLatest: func,
  fetchLatestMore: func,
};

export default BrowseScreen;
