import React from 'react';
import { View, Text, Image } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { Loader } from '../../components';
import { Touchable } from '../../atoms';
import { NavigationService } from '../../services';

function ProductScreen({
  isImageError,
  productsSaveSwitcher,
  onImageError,
  product,
  isLoading,
}) {
  const {
    title, price, photos, saved, id,
  } = product;
  const photo = Array.isArray(photos) && photos[0];
  const placeholder =
    'https://via.placeholder.com/300x300.png?text=NO PRODUCT IMAGE';
  let productPhoto = photo || placeholder;
  if (isImageError) {
    productPhoto = placeholder;
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={s.container}>
      <Image
        source={{ uri: productPhoto }}
        style={s.image}
        onError={onImageError}
      />
      <Text>{title}</Text>

      <View style={s.bottomBar}>
        <Touchable style={s.call}>
          <Text>Call</Text>
        </Touchable>
        <Touchable
          containerStyle={s.message}
          style={s.message}
          onPress={() => NavigationService.navigateToChat()}
        >
          <Text>Message</Text>
        </Touchable>
      </View>
    </View>
  );
}

ProductScreen.propTypes = {
  product: T.object.isRequired,
  isImageError: T.bool,
  onImageError: T.func,
  productsSaveSwitcher: T.func,
  isLoading: T.bool,
};

const func = () => {};

ProductScreen.defaultProps = {
  isImageError: false,
  isLoading: false,
  onImageError: func,
  productsSaveSwitcher: func,
};

export default ProductScreen;
