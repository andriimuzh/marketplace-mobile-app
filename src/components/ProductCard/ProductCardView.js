import React from 'react';
import { View, Text, Image } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { SaveButton } from '../';
import Touchable from '../Touchable';
import { colors } from '../../styles';
import { imageValidator } from '../../utils';

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

  const placeholder =
    'https://via.placeholder.com/146x146.png?text=NO PRODUCT IMAGE';
  let photo = imageValidator(photos, placeholder);
  if (isImageError) {
    photo = placeholder;
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
          source={{ uri: photo }}
          style={s.image}
          onError={onImageError}
        />
        <View style={s.content} >
          <Text style={s.title} numberOfLines={1}>{title}</Text>
          <View style={s.bottomRow}>
            <Text style={s.price} numberOfLines={1} >{price ? `$${price}` : 'free'}</Text>
            <SaveButton
              size={22}
              color={colors.textUnused}
              isSaved={saved}
              onPress={productsSaveSwitcher}
            />
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
