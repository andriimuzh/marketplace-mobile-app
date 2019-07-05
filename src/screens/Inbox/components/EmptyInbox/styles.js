import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },

  title: {
    fontSize: 16,
    color: colors.textUnused,
    textAlign: 'center',
    paddingVertical: 20,
  },
});

export default styles;
