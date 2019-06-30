import { StyleSheet } from 'react-native';
import { colors } from '../../styles';


const styles = StyleSheet.create({
  headerContainer: {
    height: 52,
    marginTop: 20,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    paddingLeft: 8,
    paddingRight: 16,
    elevation: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  searchInput: {
    height: 36,
    width: '90%',
    marginRight: 8,
  },
});

export default styles;
