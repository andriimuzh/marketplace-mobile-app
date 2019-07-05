import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import T from 'prop-types';
import { Touchable } from '../../../../components';
import s from './styles';
import { colors } from '../../../../styles';

function ContactBar({ sendMessage, callToSeller }) {
  return (
    <View style={s.container}>
      <Touchable
        style={s.call}
        containerStyle={s.call}
        onPress={() => callToSeller()}
      >
        <Ionicons name="ios-call" size={28} color={colors.white} />
        <Text style={s.text} >Call</Text>
      </Touchable>
      <Touchable
        containerStyle={s.message}
        style={s.message}
        onPress={() => sendMessage()}
      >
        <MaterialCommunityIcons
          name="message"
          size={28}
          color={colors.white}
        />
        <Text style={s.text}>Message</Text>
      </Touchable>
    </View>
  );
}

ContactBar.propTypes = {
  sendMessage: T.func,
  callToSeller: T.func,
};

ContactBar.defaultProps = {
  sendMessage: () => {},
  callToSeller: () => {},
};

export default ContactBar;
