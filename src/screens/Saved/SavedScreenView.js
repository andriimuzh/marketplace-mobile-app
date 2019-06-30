import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import s from './styles';
import { SearchInput, ProductList, Loader } from '../../components';
import { colors } from '../../styles';

function SavedScreen({ isLoading, list, fetchSaved }) {
  return (
    <ProductList
      fetchItems={fetchSaved}
      isLoading={isLoading}
      items={list}
    />
  );
}

SavedScreen.navigationOptions = () => ({
  header:
  <View style={s.headerContainer}>
    <SearchInput style={s.searchInput}>
      <Ionicons name="ios-search" size={28} color={colors.primary} />
    </SearchInput>
  </View>,
});

SavedScreen.propTypes = {
  list: T.array.isRequired,
  isLoading: T.bool,
  fetchSaved: T.func,
};

SavedScreen.defaultProps = {
  isLoading: false,
  fetchSaved: () => {},
};

export default SavedScreen;
