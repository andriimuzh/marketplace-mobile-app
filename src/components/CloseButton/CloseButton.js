import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Touchable from '../Touchable';
import { NavigationService } from '../../services';
import { colors } from '../../styles';


function CloseButton() {
  return (
    <Touchable
      useOpacityAndroid
      hitSlop={10}
      onPress={() => NavigationService.goBack()}
      style={{ paddingHorizontal: 16 }}
    >
      <Ionicons name="ios-close" size={36} color={colors.primary} />
    </Touchable>
  );
}

export default CloseButton;
