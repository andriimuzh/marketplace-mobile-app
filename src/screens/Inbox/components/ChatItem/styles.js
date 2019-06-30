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
    marginLeft: 12,
    justifyContent: 'flex-start',
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
  },
});

export default styles;
