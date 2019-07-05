import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import T from 'prop-types';
import { getHitSlop } from './helpers';
import { deviceUtils } from '../../utils';
import { colors } from '../../styles';


function Button({
  onPress,
  onLongPress,
  children,
  rippleColor,
  backgroundType,
  borderless,
  disabled,
  useOpacityAndroid,
  containerStyle,
  style,
  useHighlight,
  hitSlop,
  ...props
}) {
  if (deviceUtils.isAndroidLower21 ||
    (borderless && deviceUtils.isAndroid28) ||
     useOpacityAndroid) {
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
  return (
    <View style={containerStyle}>
      <TouchableNativeFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        style={style}
        disabled={disabled}
        hitSlop={getHitSlop(hitSlop)}
        background={
          backgroundType
          ? TouchableNativeFeedback[backgroundType]
          : TouchableNativeFeedback.Ripple(rippleColor, borderless)
        }
        {...props}
      >
        {style ? <View style={style}>{children}</View> : children }
      </TouchableNativeFeedback>
    </View>
  );
}

Button.propTypes = {
  onPress: T.func,
  onLongPress: T.func,
  children: T.any,
  style: T.any,
  containerStyle: T.any,
  backgroundType: T.string,
  useHighlight: T.bool,
  hitSlop: T.oneOfType([T.number, T.object]),
  borderless: T.bool,
  rippleColor: T.string,
  useOpacityAndroid: T.bool,
  disabled: T.bool,
};

Button.defaultProps = {
  onPress: () => {},
  onLongPress: () => {},
  useHighlight: false,
  rippleColor: colors.border,
  borderless: false,
  useOpacityAndroid: false,
  disabled: false,
};

export default Button;
