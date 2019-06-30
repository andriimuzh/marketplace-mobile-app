import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    position: 'relative',
    flex: 1,
  },

  image: {
    height: 300,
    width: '100%',
  },

  bottomBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  call: {
    height: 48,
    width: '50%',
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },

  message: {
    height: 48,
    width: '50%',
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
