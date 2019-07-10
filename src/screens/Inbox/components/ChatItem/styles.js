import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 78,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    paddingHorizontal: 8,
  },

  textContainer: {
    marginLeft: 8,
    justifyContent: 'flex-start',
    width: '100%',
  },

  topLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
    marginBottom: 3,
    width: '60%',
  },

  messageTime: {
    color: colors.textUnused,
    fontSize: 14,
    textAlign: 'right',
    paddingHorizontal: 6,
  },

  participant: {
    color: colors.primary,
    fontSize: 14,
  },

  lastMessage: {
    color: colors.textPrimary,
    fontSize: 14,
    width: '75%',
  },

  imageWrap: {
    position: 'relative',
    height: 54,
    width: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },

  productPhoto: {
    height: 46,
    width: 46,
    borderRadius: 23,
  },

  avatarWrap: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 20,
  },
});

export default styles;
