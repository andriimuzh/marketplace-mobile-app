import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
  },

  topContainer: {
    backgroundColor: colors.white,
  },

  locationBox: {
    height: 64,
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  locationText: {
    color: colors.primary,
    fontSize: 16,
    marginLeft: 8,
  },

  price: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 62,
  },

  priceInput: {
    backgroundColor: colors.background,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    height: 48,
    paddingHorizontal: 8,
    paddingTop: 15,
    paddingBottom: 14,
    width: '48%',
    borderRadius: 10,
  },

  wideButton: {
    width: '100%',
    backgroundColor: colors.primary,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wideButtonText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 14,
  },
});

export default styles;
