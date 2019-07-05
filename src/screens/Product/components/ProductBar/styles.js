import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 292,
    width: '100%',
    paddingHorizontal: 16,
    zIndex: 25,
  },

  topLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 3,
  },

  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    width: '75%',
  },

  price: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    width: '25%',
    textAlign: 'right',
  },

  bottomLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },

  createdAt: {
    color: colors.white,
    fontSize: 16,
    marginRight: 10,
  },

  location: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 4,
    width: '45%',
  },
});

export default styles;
