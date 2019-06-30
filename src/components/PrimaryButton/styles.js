import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 100,
  },

  text: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: colors.white,
    fontWeight: '500',
  },

});

export default styles;
