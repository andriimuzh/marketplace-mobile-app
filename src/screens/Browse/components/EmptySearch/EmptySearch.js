import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

function EmptySearch() {
  return (
    <View style={s.container}>
      <Text style={s.title}>No such results</Text>
    </View>
  );
}

export default EmptySearch;
