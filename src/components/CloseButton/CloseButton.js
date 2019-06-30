import React from 'react';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Touchable } from '../../atoms';
import { NavigationService } from '../../services';
import { colors } from '../../styles';


function CloseButton() {
  return (
    <Touchable
      useOpacityAndroid
      hitSlop={14}
      onPress={() => NavigationService.goBack()}
      style={{ paddingLeft: 16 }}
    >
      <Ionicons name="ios-close" size={36} color={colors.primary} />
    </Touchable>
  );
}

export default CloseButton;
