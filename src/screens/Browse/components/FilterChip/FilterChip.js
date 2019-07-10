import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import s from './styles';
import { Touchable } from '../../../../components';
import { colors } from '../../../../styles';

function FilterChip({ item, onClose }) {
  let itemText = item.query;
  if (item.filterName === 'priceFrom') {
    itemText = `From ${item.query}$`;
  } else if (item.filterName === 'priceTo') {
    itemText = `To ${item.query}$`;
  }

  return (
    <View
      style={s.container}
    >
      <Text style={s.title}>{itemText}</Text>
      <Touchable
        style={s.closeButton}
        onPress={() => onClose(item.filterName)}
        hitSlop={8}
        useOpacityAndroid
      >
        <Ionicons name="ios-close" size={20} color={colors.border} />
      </Touchable>
    </View>
  );
}

FilterChip.propTypes = {
  item: T.object,
  onClose: T.func,
};

FilterChip.defaultProps = {
  onClose: () => {},
};

export default FilterChip;
