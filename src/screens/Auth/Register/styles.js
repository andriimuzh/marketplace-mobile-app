import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    flexGrow: 1,
    paddingTop: 8,
  },

  bottomBar: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: '100%',
  },

  bottomLeft: {
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputsWrap: {
    width: '100%',
  },

  text: {
    fontSize: 14,
    color: colors.textUnused,
  },

  textButton: {
    color: colors.primary,
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: '500',
  },
});

export default styles;
