import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@src/hooks';
import type {HDSButtonProps} from './types';
import {Label} from '../Label';

export const Button: FC<HDSButtonProps> = ({
  onPress = () => {},
  borderRadius = 12,
  type = 'primary',
  size = 'md',
  title = '',
  TouchableComponent,
  containerStyle,
  color,
  tintColor,
  buttonStyle,
  disabled = false,
  disabledStyle = {},
  textStyle = {},
  disabledTitleStyle = {},
  testID = '',
  ...rest
}) => {
  // bodyRegular is default style
  const {appTheme} = useTheme();

  // Touchable Component
  const Touchable = TouchableComponent || TouchableOpacity;

  // Button Back Color
  const buttonColor: string = color || appTheme.accent;

  // Button Tint color
  const tintColors = {
    primary: tintColor || appTheme.secondary,
    secondary: tintColor || appTheme.accent,
    tertiary: tintColor || appTheme.accent,
    disable: appTheme.disabled,
  };

  // Button Tint Color
  const buttonTintColor: string =
    (disabled && tintColors.disable) || tintColors[type];

  // Button Style
  const buttonTypeStyle = {
    primary: {
      borderWidth: 1,
      backgroundColor: (!disabled && buttonColor) || appTheme.primary,
      borderColor: (!disabled && buttonColor) || appTheme.primary,
    },
    secondary: {
      borderRadius,
      borderWidth: 1,
      backgroundColor: appTheme.transparent,
      borderColor: buttonTintColor,
    },
    tertiary: {
      borderWidth: 0,
      backgroundColor: appTheme.transparent,
    },
  };

  return (
    <View style={[styles.container, containerStyle, {borderRadius}]}>
      <Touchable
        delayPressIn={0}
        activeOpacity={0.5}
        accessibilityRole="button"
        disabled={disabled}
        onPress={onPress}
        testID={testID}
        {...rest}>
        <View
          style={StyleSheet.flatten([
            styles.button,
            buttonTypeStyle[type],
            styles[size],
            buttonStyle,
            disabled && disabledStyle,
          ])}>
          <Label
            labelType="bodyMedium"
            style={StyleSheet.flatten([
              {
                color: buttonTintColor,
              },
              disabled && disabledTitleStyle,
              textStyle,
            ])}
            numberOfLines={1}>
            {title}
          </Label>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    overflow: 'hidden',
  },
});

Button.displayName = 'AppButton';
