import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
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

  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    width: '90%',
  },

  inputFocused: {
    width: '83%',
  },

  iconWrap: {
    position: 'absolute',
    paddingHorizontal: 6,
  },

  input: {
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    width: '100%',
    marginRight: 8,
    paddingLeft: 36,
    paddingRight: 8,
    paddingBottom: 8,
    paddingTop: 7,
  },


  cancel: {
    color: colors.primary,
    fontSize: 16,
    paddingLeft: 8,
  },

});

export default styles;
