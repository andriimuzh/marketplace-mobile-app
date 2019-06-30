import React from 'react';
import { View, Text, Image } from 'react-native';
import T from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import s from './styles';
import { Touchable } from '../';
import { colors } from '../../styles';

function ProductCard({
  isImageError,
  productsSaveSwitcher,
  onImageError,
  onOpenProduct,
  product,
}) {
  const {
    title, price, photos, saved,
  } = product;
  const photo = photos && photos[0];
  const placeholder =
    'https://via.placeholder.com/146x146.png?text=NO PRODUCT IMAGE';
  let productPhoto = photo || placeholder;
  if (isImageError) {
    productPhoto = placeholder;
  }
  return (
    <View
      style={s.container}
    >
      <Touchable
        style={s.touchable}
        containerStyle={s.touchable}
        borderless
        onPress={onOpenProduct}
      >
        <Image
          source={{ uri: productPhoto }}
          style={s.image}
          onError={onImageError}
        />
        <View style={s.content} >
          <Text style={s.title} numberOfLines={1}>{title}</Text>
          <View style={s.bottomRow}>
            <Text style={s.price} numberOfLines={1} >{price ? `$${price}` : 'free'}</Text>
            <Touchable
              onPress={productsSaveSwitcher}
              useOpacityAndroid
              hitSlop={6}
            >
              <FontAwesome
                name={saved ? 'bookmark' : 'bookmark-o'}
                size={22}
                color={colors.textUnused}
              />
            </Touchable>
          </View>

        </View>

      </Touchable>
    </View>
  );
}

ProductCard.propTypes = {
  product: T.object.isRequired,
  isImageError: T.bool,
  onImageError: T.func,
  onOpenProduct: T.func,
  productsSaveSwitcher: T.func,
};

ProductCard.defaultProps = {
  isImageError: false,
  onImageError: () => {},
  onOpenProduct: () => {},
  productsSaveSwitcher: () => {},
};

export default ProductCard;
