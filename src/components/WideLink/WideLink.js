import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';
import s from './styles';
import Touchable from '../Touchable';
import { colors } from '../../styles';

function WideLink({
  onPress, children, styles,
}) {
  return (
    <Touchable
      style={[s.container, styles]}
      containerStyle={[s.container, styles]}
      onPress={onPress}
    >
      {children}
      <View style={s.iconContainer}>
        <EvilIcons name="chevron-right" size={48} color={colors.textUnused} />
      </View>
    </Touchable>
  );
}

WideLink.propTypes = {
  onPress: T.func,
  children: T.any,
  styles: T.object,
};

WideLink.defaultProps = {
  onPress: () => {},
};

export default WideLink;
