import React from 'react';
import { View, Text, Image } from 'react-native';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import s from './styles';
import { Loader, BackButton, SaveButton, Touchable, Avatar } from '../../components';
import { ContactBar, ProductBar } from './components';
import { NavigationService } from '../../services';
import { isNotMyProduct } from './helpers';
import { imageValidator } from '../../utils';
import { colors } from '../../styles';

function ProductScreen({
  isImageError,
  onImageError,
  product,
  productOwner,
  isLoading,
  viewer,
  onMessagePress,
  onCallPress,
}) {
  const {
    photos, description, owner, ownerId,
  } = product;
  const productOwnerId = owner || ownerId;

  const placeholder =
    'https://via.placeholder.com/300x300.png?text=NO PRODUCT IMAGE';
  let photo = imageValidator(photos, placeholder);
  if (isImageError) {
    photo = placeholder;
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={s.container}>
      <Image
        source={{ uri: photo }}
        style={s.image}
        onError={onImageError}
      />
      <ProductBar product={product} />
      <View style={s.bottomBox} >
        <View style={s.descriptionBox}>
          <Text numberOfLines={2} style={s.description}>{description}</Text>
          {/* //TODO: add open Button */}
          <Touchable
            onPress={() => {}}
            useOpacityAndroid
          >
            <Text style={s.readMore}>
            Read more...
            </Text>
          </Touchable>
        </View>
        {productOwner &&
        <View style={s.owner}>
          <Avatar size={48} user={productOwner} />
          <View style={s.ownerNameContainer}>
            <Text style={s.ownerName}>{productOwner.fullName}</Text>
            <Touchable
              onPress={() => NavigationService.navigateToProfile(productOwnerId)}
              useOpacityAndroid
            >
              <Text
                numberOfLines={1}
                style={s.ownerLink}
              >
                {`See other posts from ${productOwner.fullName}`}
              </Text>
            </Touchable>
          </View>

        </View>
       }
      </View>

      {isNotMyProduct(viewer, productOwnerId) &&
      <ContactBar sendMessage={onMessagePress} callToSeller={onCallPress} />}
    </View>
  );
}

ProductScreen.navigationOptions = (props) => {
  const navProps = props.navigation.getParam('navProps');
  if (navProps) {
    const {
      product, productsSaveSwitcher, onImageShare, viewer,
    } = navProps;
    return {
      header:
  <View style={s.headerContainer}>
    <BackButton color={colors.white} />
    {isNotMyProduct(viewer, product.ownerId) &&
      <SaveButton
        size={28}
        color={colors.white}
        isSaved={product.saved}
        onPress={productsSaveSwitcher}
      />
    }
    <Touchable
      onPress={() => onImageShare()}
      style={s.shareButton}
      useOpacityAndroid
      hitSlop={8}
    >
      <Ionicons name="ios-share-alt" size={28} color={colors.white} />
    </Touchable>
  </View>,
    };
  }
  return {
    header:
  <View style={s.headerContainer}>
    <BackButton color={colors.white} />
  </View>,
  };
};

ProductScreen.propTypes = {
  product: T.object.isRequired,
  productOwner: T.object,
  viewer: T.object,
  isImageError: T.bool,
  onImageError: T.func,
  isLoading: T.bool,
  onMessagePress: T.func,
  onCallPress: T.func,
};

const func = () => {};

ProductScreen.defaultProps = {
  isImageError: false,
  isLoading: false,
  onImageError: func,
  onMessagePress: func,
  onCallPress: func,
};

export default ProductScreen;
