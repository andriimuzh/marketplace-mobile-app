import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 8,
  },

  wideLink: {
    height: 44,
  },

  list: {
    marginTop: 6,
    borderColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.background,
    alignItems: 'center',
  },

  listItem: {
    fontSize: 16,
    color: colors.primary,
  },
});

export default styles;
