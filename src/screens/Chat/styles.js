import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  listContainer: {
    backgroundColor: colors.background,
    width: '100%',
  },

  wideLink: {
    height: 52,
    borderColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  productTextContainer: {
    marginHorizontal: 8,
    justifyContent: 'center',
    width: '80%',
  },

  productTitle: {
    fontSize: 14,
    color: colors.textPrimary,
    width: '90%',
  },

  productDescription: {
    fontSize: 14,
    color: colors.textUnused,
    width: '90%',
  },

  productPhoto: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },

  linkInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  // ----- HEADER

  headerContainer: {
    height: 52,
    marginTop: 20,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    paddingRight: 16,
    elevation: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  participantName: {
    color: colors.primary,
    fontSize: 16,
    paddingHorizontal: 8,
  },
});

export default styles;
