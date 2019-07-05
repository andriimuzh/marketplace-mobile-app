import React from 'react';
import { View, Text, Image } from 'react-native';
import T from 'prop-types';
import { getAvatarColor } from '../../utils';
import s from './styles';

function Avatar({ size, user }) {
  const { fullName, photo } = user;
  const titleSize = size * 0.6;
  const title = fullName.trim()[0].toUpperCase();
  const styles = {
    borderRadius: (size / 2),
    height: size,
    width: size,
  };

  const background = getAvatarColor(fullName);

  return (
    <View style={s.container}>
      {photo ?
        <Image source={{ uri: photo }} style={styles} /> :
        <View
          style={[s.innerWrap, styles, { backgroundColor: background }]}
        >
          <Text style={[s.title, { fontSize: titleSize }]}>{title}</Text>
        </View>
    }
    </View>
  );
}

Avatar.propTypes = {
  user: T.object.isRequired,
  size: T.number.isRequired,
};

Avatar.defaultProps = {};

export default Avatar;
