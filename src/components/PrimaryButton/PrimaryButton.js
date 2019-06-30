import React from 'react';
import { Text } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { Touchable } from '../../atoms';

function PrimaryButton({
  title, onPress,
}) {
  return (
    <Touchable
      onPress={onPress}
      style={[s.container, { paddingHorizontal: 10 }]}
      containerStyle={s.container}
      borderless
    >
      <Text style={s.text}>{title}</Text>
    </Touchable>
  );
}

PrimaryButton.propTypes = {
  title: T.string,
  onPress: T.func,
};

PrimaryButton.defaultProps = {
  title: 'Push',
  onPress: () => {},
};

export default PrimaryButton;
