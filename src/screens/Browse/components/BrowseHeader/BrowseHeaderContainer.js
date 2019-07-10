import { compose, withHandlers, withState } from 'recompose';
import { Keyboard } from 'react-native';
import BrowseHeader from './BrowseHeaderView';

const enhancer = compose(
  withState('text', 'setText', ''),
  withState('isInputFocused', 'inputStateChanger', false),
  withHandlers({
    handleChange: ({ setText }) => (e) => {
      setText(e);
    },
    onInputStateChange: ({ inputStateChanger, setInputFocus }) => (inputState) => {
      setInputFocus(inputState);
      inputStateChanger(inputState);
    },
    startSearch: ({ searchBy, setText, text }) => () => {
      if (text !== '') {
        searchBy({ keywords: text });
        setText('');
      }
    },
    onCancelPress: ({ setText }) => () => {
      Keyboard.dismiss();
      setText('');
    },
  }),
);


export default enhancer(BrowseHeader);
