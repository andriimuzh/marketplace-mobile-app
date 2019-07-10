import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  filterList: {
    height: 60,
    backgroundColor: colors.background,
    paddingHorizontal: 8,
  },

  wideLink: {
    height: 44,
  },

  listItem: {
    fontSize: 16,
    color: colors.primary,
  },

  keywordsListContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  keywordsList: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 8,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 80,
    zIndex: 100,
  },

});

export default styles;
