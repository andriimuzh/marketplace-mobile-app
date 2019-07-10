import { View, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../styles';


function Separator() {
  return (
    <View style={{
    width: '90%',
    marginLeft: 65,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
  }}
    />
  );
}

export default Separator;
