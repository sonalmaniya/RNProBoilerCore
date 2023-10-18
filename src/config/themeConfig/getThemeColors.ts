import {blendColor} from '@src/helpers';
import {Colors} from './colors';
import {ThemeColors, ThemeData} from './type';

const getThemeColors = (themeColors: ThemeColors): ThemeData => {
  const {
    backgroundColor,
    accentColor,
    primaryColor,
    primaryFontColor,
    secondaryColor,
    secondaryFontColor,
  } = themeColors;

  const LIGHT_COLOR = Colors.white;
  const DARK_COLOR = Colors.black;

  return {
    transparent: Colors.transparent,

    background: backgroundColor || primaryColor, // app State main backgroundColor
    primary: primaryColor, // app State primaryColor
    accent: accentColor, // app State accentColor
    primaryFont: primaryFontColor, // app State primaryFontColor
    secondaryFont: secondaryFontColor, // app State secondaryFontColor
    secondary: secondaryColor, // app State secondaryColor

    // Derived Color
    accentDarked10: blendColor(accentColor, DARK_COLOR, 0.1), // 10% of Accent Color - Dark
    accentLighter10: blendColor(accentColor, LIGHT_COLOR, 0.9), // 10% of Accent  Color - Light
    accentLighter20: blendColor(accentColor, LIGHT_COLOR, 0.75), // 75% of Accent  Color - Light
    body: blendColor(primaryFontColor, LIGHT_COLOR, 0.2), // 20% of Primary Font Color - Light
    caption: blendColor(primaryFontColor, LIGHT_COLOR, 0.25), //  25% of Primary Font color - Light
    ghost: blendColor(primaryFontColor, LIGHT_COLOR, 0.45), // 45% of Primary Font color - Light
    disabled: blendColor(primaryFontColor, LIGHT_COLOR, 0.5), //  50% of Primary font - Light
    stroke: blendColor(primaryFontColor, LIGHT_COLOR, 0.8), // 80% of Primary font - Light
    hover: blendColor(primaryFontColor, LIGHT_COLOR, 0.9), // 90% of Primary font - Light
    subHover: blendColor(primaryFontColor, LIGHT_COLOR, 0.95), // 95% of Primary font - Light
    focused: blendColor(primaryFontColor, LIGHT_COLOR, 0.4), // 40% of disabled - Light

    // Fix Semantic Colors
    success: Colors.success,
    error: Colors.error,
    warning: Colors.warning,
    info: Colors.info,
    success05: Colors.success05,
    error05: Colors.error05,
    warning05: Colors.warning05,
    info05: Colors.info05,
    toasts: Colors.toasts,
  };
};

export {getThemeColors};
