import React from 'react';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { deviceUtils } from '../../utils';
import { NavigationService } from '../../services';
import Touchable from '../Touchable';
import { colors } from '../../styles';

function BackButton({ color }) {
  return (
    <Touchable
      style={{
        position: 'absolute',
        top: 18,
        left: 16,
      }}
      useOpacityAndroid
      hitSlop={10}
      onPress={() => NavigationService.goBack()}
    >
      <Ionicons
        name={deviceUtils.isAndroid ? 'md-arrow-back' : 'ios-arrow-back'}
        size={26}
        color={color}
      />
    </Touchable>
  );
}

BackButton.propTypes = {
  color: T.string,
};

BackButton.defaultProps = {
  color: colors.textPrimary,
};

export default BackButton;
