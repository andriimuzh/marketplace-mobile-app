import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.background,
    position: 'relative',
    flex: 1,
  },

  image: {
    height: 356,
    width: '100%',
  },

  bottomBox: {
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    marginBottom: 48,
  },

  descriptionBox: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    paddingVertical: 8,
  },

  description: {
    color: colors.textPrimary,
    fontSize: 16,
  },

  readMore: {
    color: colors.primary,
    fontSize: 16,
  },

  owner: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
  },

  ownerNameContainer: {
    marginLeft: 14,
    width: '80%',
  },

  ownerName: {
    color: colors.fontPrimary,
    fontSize: 16,
  },

  ownerLink: {
    color: colors.blue,
    fontSize: 16,
  },

  // ------ Header

  headerContainer: {
    position: 'absolute',
    top: 20,
    right: 0,
    left: 0,
    height: 52,
    zIndex: 10,
    paddingTop: 18,
    paddingRight: 16,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  shareButton: {
    paddingLeft: 35,
  },
});

export default styles;
