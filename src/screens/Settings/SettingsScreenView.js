import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import s from './styles';
import { colors } from '../../styles';
import { Touchable } from '../../components';

function SettingsScreen({ handleLogout }) {
  return (
    <View style={s.container}>
      <View style={s.linkBox}>
        <Touchable style={s.linkButton} containerStyle={s.linkButton}>
          <View style={s.linkContainer} >
            <Text style={s.linkText}>Email</Text>
            <EvilIcons name="chevron-right" size={38} color={colors.textUnused} />
          </View>
        </Touchable>
        <View style={s.line} />
        <Touchable style={s.linkButton} containerStyle={s.linkButton}>
          <View style={s.linkContainer} >
            <Text style={s.linkText}>Password</Text>
            <EvilIcons name="chevron-right" size={38} color={colors.textUnused} />
          </View>
        </Touchable>
        <View style={s.line} />
        <Touchable style={s.linkButton} containerStyle={s.linkButton}>
          <View style={s.linkContainer} >
            <Text style={s.linkText}>Notifications</Text>
            <EvilIcons name="chevron-right" size={38} color={colors.textUnused} />
          </View>
        </Touchable>
        <View style={s.line} />
        <Touchable style={s.linkButton} containerStyle={s.linkButton}>
          <View style={s.linkContainer} >
            <Text style={s.linkText}>Privacy Policy</Text>
            <EvilIcons name="chevron-right" size={38} color={colors.textUnused} />
          </View>
        </Touchable>
        <View style={s.line} />
        <Touchable style={s.linkButton} containerStyle={s.linkButton}>
          <View style={s.linkContainer} >
            <Text style={s.linkText}>Terms &amp; Conditions</Text>
            <EvilIcons name="chevron-right" size={38} color={colors.textUnused} />
          </View>
        </Touchable>
      </View>
      <View style={[s.linkBox, { marginVertical: 28 }]}>
        <Touchable
          style={s.linkButton}
          containerStyle={s.linkButton}
          onPress={handleLogout}
        >
          <View style={[s.linkContainer, { justifyContent: 'center' }]} >
            <Ionicons name="ios-log-out" size={22} color={colors.primary} />
            <Text style={s.logoutText}>LOG OUT</Text>
          </View>
        </Touchable>
      </View>
    </View>
  );
}

SettingsScreen.propTypes = {
  handleLogout: T.func,
};

SettingsScreen.defaultProps = {
  handleLogout: () => {},
};

SettingsScreen.navigationOptions = {
  title: 'Settings',
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    elevation: 0,
  },
  headerTintColor: colors.textPrimary,
  headerTitleStyle: {
    fontWeight: '400',
    fontSize: 16,
  },
};

export default SettingsScreen;
