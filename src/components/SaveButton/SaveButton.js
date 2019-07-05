import React from 'react';
import T from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from '../Touchable';


function SaveButton({ color, isSaved, onPress }) {
  return (
    <Touchable
      onPress={(e) => onPress(e)}
      useOpacityAndroid
      hitSlop={8}
    >
      <MaterialIcons
        name={isSaved ? 'bookmark' : 'bookmark-border'}
        size={28}
        color={color}
      />
    </Touchable>
  );
}

SaveButton.propTypes = {
  color: T.string,
  isSaved: T.bool,
  onPress: T.func,
};

export default SaveButton;
