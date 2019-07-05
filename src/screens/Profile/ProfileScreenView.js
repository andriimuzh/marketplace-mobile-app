import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import T from 'prop-types';
import s from './styles';
import { NavigationService } from '../../services';
import
{ Avatar, ProductList, PrimaryButton, BackButton, Touchable }
  from '../../components';
import { colors } from '../../styles';

function ProfileScreen({
  productsIsLoading, fetchProducts, products, isViewerProfile, productOwner,
}) {
  if (!isViewerProfile && !productOwner) {
    return (
      <View style={s.container}>
        <Text style={s.title}>
          Login to view your profile.
          For now you can learn how to
          play by our rules
        </Text>
        <PrimaryButton
          title="LOGIN"
          onPress={() => NavigationService.navigateToAuth()}
        />
      </View>
    );
  }
  return (
    <ProductList
      fetchItems={fetchProducts}
      isLoading={productsIsLoading}
      items={products}
    />
  );
}

ProfileScreen.navigationOptions = (props) => {
  const navProps = props.navigation.getParam('navProps');
  if (navProps && navProps.user) {
    const {
      user, count, isViewerProfile, userId,
    } = navProps;
    return {
      header:
  <View style={s.headerContainer}>
    <View>
      <Avatar size={72} user={user} />
      <Text style={s.username}>{user.fullName}</Text>
      <Text style={s.active}>active: <Text style={s.activeNumber}>{count}</Text></Text>
    </View>
    {isViewerProfile &&
      <Touchable
        style={s.settingsIcon}
        useOpacityAndroid
        hitSlop={10}
        onPress={() => NavigationService.navigateToSettings()}
      >
        <AntDesign name="setting" size={28} color={colors.textPrimary} />
      </Touchable>}
    {userId && <BackButton />}
  </View>,
    };
  }
  return {
    headerTitle: 'Profile',
  };
};


ProfileScreen.propTypes = {
  productOwner: T.object,
  isViewerProfile: T.bool,
  productsIsLoading: T.bool,
  fetchProducts: T.func,
  products: T.array,
};

const func = () => {};

ProfileScreen.defaultProps = {
  productsIsLoading: false,
  fetchProducts: func,
  isViewerProfile: false,
};


export default ProfileScreen;
