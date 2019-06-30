import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { ProductCard } from '../../atoms';
import Loader from '../Loader/Loader';

function ProductList({
  items,
  isLoading,
  isLoadingMore,
  fetchItems,
  fetchItemsMore,
}) {
  return (
    <FlatList
      columnWrapperStyle={s.container}
      refreshing={isLoading}
      onRefresh={fetchItems}
      data={items}
      onEndReached={fetchItemsMore}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
      ListFooterComponent={() => (
        isLoadingMore && <Loader />
      )}
    />
  );
}

ProductList.propTypes = {
  items: T.array.isRequired,
  isLoading: T.bool,
  isLoadingMore: T.bool,
  fetchItems: T.func,
  fetchItemsMore: T.func,
};

ProductList.defaultProps = {
  isLoading: false,
  isLoadingMore: false,
  fetchItems: () => {},
  fetchItemsMore: () => {},
};

export default ProductList;
