import React from 'react';
import { View, Text, Image } from 'react-native';
import T from 'prop-types';
import { getAvatarColor } from '../../utils';
import s from './styles';

function Avatar({ size, user }) {
  const { fullName, photo } = user;
  const titleSize = size * 0.6;
  const title = fullName.trim()[0].toUpperCase();
  const borderRadius = size / 2;
  const background = getAvatarColor(fullName);

  return (
    <View style={s.container}>
      <View
        style={[s.innerWrap,
      {
        height: size,
        width: size,
        borderRadius,
        backgroundColor: background,
      },
    ]}
      >
        <Text style={[s.title, { fontSize: titleSize }]}>{title}</Text>
      </View>
      {/* <Image source={{ uri: photo }} />//TODO: Avatar */}
    </View>
  );
}

Avatar.propTypes = {
  user: T.object.isRequired,
  size: T.number.isRequired,
};

Avatar.defaultProps = {};

export default Avatar;
