import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 36,
    backgroundColor: colors.white,
    borderRadius: 6,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
    marginTop: 8,
    marginRight: 8,
  },

  title: {
    fontSize: 16,
    color: colors.textPrimary,
  },

  closeButton: {
    marginLeft: 8,
  },
});

export default styles;
