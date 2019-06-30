import { StyleSheet } from 'react-native';
import { colors } from '../styles';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    elevation: 0,
  },

  headerTitleStyle: {
    fontWeight: '400',
    fontSize: 16,
  },

  // -------- BottomTabBar

  labelCenter: {
    textAlign: 'center',
  },

  tabActive: {
    color: colors.primary,
  },

  tabInactive: {
    color: colors.border,
  },

  tabBar: {
    borderTopWidth: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },

});

export default styles;
