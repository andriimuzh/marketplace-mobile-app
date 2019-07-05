import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  listContainer: {
    backgroundColor: colors.background,
    width: '100%',
  },

  // ----- HEADER

  headerContainer: {
    height: 52,
    marginTop: 20,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    paddingRight: 16,
    elevation: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  participantName: {
    color: colors.primary,
    fontSize: 16,
    paddingHorizontal: 8,
  },
});

export default styles;
