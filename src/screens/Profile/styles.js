import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },

  title: {
    color: colors.textUnused,
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 210,
    marginBottom: 10,
  },

  // ----- Header

  headerContainer: {
    marginTop: 20,
    height: 156,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },

  settingsIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
  },

  username: {
    fontSize: 16,
    color: colors.textPrimary,
    height: 21,
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
  },

  active: {
    fontSize: 14,
    color: colors.textPrimary,
    textAlign: 'center',
  },

  activeNumber: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default styles;
