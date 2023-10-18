import type {StyleProp, TextProps, TextStyle} from 'react-native';

export interface LabelProps extends TextProps {
  /**  Add additional styling for Text. */
  style?: StyleProp<TextStyle>;

  labelType?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'bodyRegular'
    | 'bodyMedium'
    | 'caption'
    | 'xSmall';
}
