import {StyleSheet, TextStyle} from 'react-native';
import {FONT_LINE_HEIGHT, FONT_SIZES} from '@src/helpers';

export const fontSizeH1: TextStyle = {
  fontSize: FONT_SIZES.h1,
  lineHeight: FONT_LINE_HEIGHT.h1,
};

export const fontSizeH2: TextStyle = {
  fontSize: FONT_SIZES.h2,
  lineHeight: FONT_LINE_HEIGHT.h2,
};

export const fontSizeH3: TextStyle = {
  fontSize: FONT_SIZES.h3,
  lineHeight: FONT_LINE_HEIGHT.h3,
};

export const fontSizeH4: TextStyle = {
  fontSize: FONT_SIZES.h4,
  lineHeight: FONT_LINE_HEIGHT.h4,
};

export const fontSizeH5: TextStyle = {
  fontSize: FONT_SIZES.h5,
  lineHeight: FONT_LINE_HEIGHT.h5,
};

export const fontSizeH6: TextStyle = {
  fontSize: FONT_SIZES.h6,
  lineHeight: FONT_LINE_HEIGHT.h6,
};

export const fontSizeRegular: TextStyle = {
  fontSize: FONT_SIZES.normal,
  lineHeight: FONT_LINE_HEIGHT.normal,
};

export const fontSizeCaption: TextStyle = {
  fontSize: FONT_SIZES.small,
  lineHeight: FONT_LINE_HEIGHT.small,
};

export const fontSizeXSmall: TextStyle = {
  fontSize: FONT_SIZES.xSmall,
  lineHeight: FONT_LINE_HEIGHT.xSmall,
};

export const fontWeightNormal: TextStyle = {
  fontWeight: '400',
};

export const fontWeight400: TextStyle = {
  fontWeight: '400',
};

export const fontWeight500: TextStyle = {
  fontWeight: '500',
};

export const fontWeight600: TextStyle = {
  fontWeight: '600',
};

export const fontWeightBold: TextStyle = {
  fontWeight: 'bold',
};

export const center: TextStyle = {
  textAlign: 'center',
};

export const underline: TextStyle = {
  textDecorationLine: 'underline',
};

export const transformToUppercase: TextStyle = {
  textTransform: 'uppercase',
};

export const TextStyles = StyleSheet.create({
  fontSizeH1,
  fontSizeH2,
  fontSizeH3,
  fontSizeH4,
  fontSizeH5,
  fontSizeH6,
  fontSizeRegular,
  fontSizeCaption,
  fontSizeXSmall,
  fontWeightNormal,
  fontWeight400,
  fontWeight500,
  fontWeight600,
  fontWeightBold,
  underline,
  center,
  transformToUppercase,
});
