import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import T from 'prop-types';
import s from './styles';
import { colors } from '../../../../styles';

function ProductBar({ product }) {
  const {
    title, price, createdAt, location,
  } = product;

  return (
    <View style={s.container}>
      <View style={s.topLine}>
        <Text numberOfLines={1} style={s.title}>{title}</Text>
        <Text numberOfLines={1} style={s.price}>{`$${price}`}</Text>
      </View>
      <View style={s.bottomLine}>
        <Text style={s.createdAt}>{createdAt}</Text>
        <MaterialIcons
          name="location-on"
          size={20}
          color={colors.white}
        />
        <Text numberOfLines={1} style={s.location}>{location}</Text>
      </View>

    </View>
  );
}

ProductBar.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  product: T.object.isRequired,
};


export default ProductBar;
