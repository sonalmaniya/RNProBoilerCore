import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  fontSizeCaption,
  fontSizeH1,
  fontSizeH2,
  fontSizeH3,
  fontSizeH4,
  fontSizeH5,
  fontSizeH6,
  fontSizeRegular,
  fontSizeXSmall,
  fontWeight400,
  fontWeight500,
  fontWeightBold,
} from '@src/core-ui';
import {useTheme} from '@src/hooks';
import type {LabelProps} from './types';

const labelStyles = {
  bodyRegular: StyleSheet.flatten([fontSizeRegular, fontWeight400]),
  h1: StyleSheet.flatten([fontSizeH1, fontWeightBold]),
  h2: StyleSheet.flatten([fontSizeH2, fontWeightBold]),
  h3: StyleSheet.flatten([fontSizeH3, fontWeightBold]),
  h4: StyleSheet.flatten([fontSizeH4, fontWeightBold]),
  h5: StyleSheet.flatten([fontSizeH5, fontWeightBold]),
  h6: StyleSheet.flatten([fontSizeH6, fontWeightBold]),
  caption: StyleSheet.flatten([fontSizeCaption, fontWeightBold]),
  xSmall: StyleSheet.flatten([fontSizeXSmall, fontWeightBold]),
  bodyMedium: StyleSheet.flatten([fontSizeRegular, fontWeight500]),
};

export const Label: FC<LabelProps> = ({
  style = {},
  labelType = 'bodyRegular',
  children = '',
  ...rest
}) => {
  const {appTheme} = useTheme();

  return (
    <Text
      accessibilityRole="text"
      testID="HDS_LABEL"
      style={StyleSheet.flatten([
        {
          color: appTheme.primaryFont,
          includeFontPadding: false,
        },
        labelStyles[labelType],
        style,
      ])}
      {...rest}>
      {children}
    </Text>
  );
};

Label.displayName = 'Label';
