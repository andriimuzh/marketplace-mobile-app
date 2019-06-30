import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import s from './styles';
import { NavigationService } from '../../services';
import { Avatar, Loader, ProductList } from '../../components';
import { Touchable } from '../../atoms';
import { deviceUtils } from '../../utils';
import { colors } from '../../styles';

function ProfileScreen({
  viewer, productsIsLoading, userIsLoading, fetchProducts, products,
}) {
  if (userIsLoading) {
    return <Loader />;
  }
  if (viewer) {
    return (
      <ProductList
        fetchItems={fetchProducts}
        isLoading={productsIsLoading}
        items={products}
      />
    );
  }
  return (
    <View style={s.container}>
      <Text>Profile</Text>
    </View>
  );
}

ProfileScreen.navigationOptions = (props) => {
  const navProps = props.navigation.getParam('navProps');
  if (navProps) {
    return {
      header:
  <View style={s.headerContainer}>
    <View>
      <Avatar size={72} user={navProps.user} />
      <Text style={s.username}>{navProps.user.fullName}</Text>
      <Text style={s.active}>active: <Text style={s.activeNumber}>{navProps.count}</Text></Text>
    </View>
    {navProps.isViewer ?
      <Touchable
        style={s.settingsIcon}
        useOpacityAndroid
        hitSlop={10}
        onPress={() => NavigationService.navigateToSettings()}
      >
        <AntDesign name="setting" size={28} color={colors.textPrimary} />
      </Touchable> :
      <Touchable
        style={s.goBackIcon}
        useOpacityAndroid
        hitSlop={10}
        onPress={() => NavigationService.goBack()}
      >
        <Ionicons
          name={deviceUtils.isAndroid ? 'md-arrow-back' : 'ios-arrow-back'}
          size={26}
          color={colors.textPrimary}
        />
      </Touchable>}
  </View>,
    };
  }
  return {
    headerTitle: 'Profile',
  };
};


ProfileScreen.propTypes = {
  viewer: T.object,
  productsIsLoading: T.bool,
  userIsLoading: T.bool,
};

const func = () => {};

ProfileScreen.defaultProps = {
  productsIsLoading: false,
  userIsLoading: false,
};


export default ProfileScreen;
