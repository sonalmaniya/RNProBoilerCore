import type React from 'react';
import type {
  StyleProp,
  TextProps,
  TextStyle,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export interface HDSButtonProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  /** Add button title. */
  title?: string;

  /** Add additional props for Text component. */
  titleProps?: TextProps;

  /** Add additional styling for button component. */
  buttonStyle?: StyleProp<ViewStyle>;

  /** Add additional styling for button text. */
  textStyle?: StyleProp<TextStyle>;

  /** Type of button. */
  type?: 'primary' | 'secondary' | 'tertiary';

  /** Button size */
  size?: 'lg' | 'md' | 'sm';

  /** border radius of Button */
  borderRadius?: number;

  /** Color of Button */
  color?: string;

  /** Color of Button Title, icon, border */
  tintColor?: string;

  /** Styling for Component container. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Component for user interaction. */
  TouchableComponent?: typeof React.Component;

  /** Disables user interaction. */
  disabled?: boolean;

  /** Style of the button when disabled. */
  disabledStyle?: StyleProp<ViewStyle>;

  /** Style of the title when disabled. */
  disabledTitleStyle?: StyleProp<TextStyle>;

  /** test ID of button */
  testID?: string;
}
