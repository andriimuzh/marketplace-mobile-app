import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },

  call: {
    height: 49,
    width: '50%',
    flex: 1,
    backgroundColor: colors.green,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  message: {
    height: 49,
    flex: 1,
    width: '50%',
    backgroundColor: colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 16,
    color: colors.white,
    paddingLeft: 7,
    fontWeight: '500',
    paddingBottom: 3,
  },

});

export default styles;
