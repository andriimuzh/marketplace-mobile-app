import React from 'react';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import T from 'prop-types';
import { getHitSlop } from './helpers';

function Button({
  onPress,
  onLongPress,
  children,
  style,
  disabled,
  useHighlight,
  hitSlop,
  ...props
}) {
  if (useHighlight) {
    return (
      <TouchableHighlight
        onPress={onPress}
        onLongPress={onLongPress}
        style={style}
        disabled={disabled}
        hitSlop={getHitSlop(hitSlop)}
        {...props}
      >
        {children}
      </TouchableHighlight>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={style}
      disabled={disabled}
      hitSlop={getHitSlop(hitSlop)}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  onPress: T.func,
  onLongPress: T.func,
  children: T.any,
  style: T.any,
  useHighlight: T.bool,
  hitSlop: T.oneOfType([T.number, T.object]),
  disabled: T.bool,
};

Button.defaultProps = {
  onPress: () => {},
  onLongPress: () => {},
  useHighlight: false,
  disabled: T.bool,
};

export default Button;
