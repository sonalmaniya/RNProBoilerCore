import {Dimensions, Platform} from 'react-native';

// Screen Constant
export const {width, height} = Dimensions.get('screen');
export const {width: windowWidth, height: windowHeight} =
  Dimensions.get('window');
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// Default guideline sizes are based on standard ~6" screen mobile device
const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 667;

export const scale = (size: number): number =>
  (shortDimension / guidelineBaseWidth) * size;

export const verticalScale = (size: number): number =>
  (longDimension / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor: number = 0.1): number =>
  Math.round(size + (scale(size) - size) * factor);

export const moderateVerticalScale = (
  size: number,
  factor: number = 0.2,
): number => size + (verticalScale(size) - size) * factor;

export const FONT_SIZES = {
  h1: moderateScale(26),
  h2: moderateScale(24),
  h3: moderateScale(22),
  h4: moderateScale(20),
  h5: moderateScale(18),
  h6: moderateScale(16),
  normal: moderateScale(14),
  small: moderateScale(12),
  xSmall: moderateScale(10),
};

export const FONT_LINE_HEIGHT = {
  h1: moderateScale(39),
  h2: moderateScale(36),
  h3: moderateScale(33),
  h4: moderateScale(30),
  h5: moderateScale(27),
  h6: moderateScale(27),
  normal: moderateScale(21),
  small: moderateScale(18),
  xSmall: moderateScale(15),
};

export const SPACING = {
  m0: 0,
  m1: moderateScale(2),
  m2: moderateScale(8),
  m3: moderateScale(12),
  m4: moderateScale(16),
  m5: moderateScale(20),
  m6: moderateScale(24),
};

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const THEME_SPACING: ThemeSpacing = {
  xs: SPACING.m1,
  sm: SPACING.m2,
  md: SPACING.m3,
  lg: SPACING.m4,
  xl: SPACING.m5,
};

export const THEME_V_SPACING: ThemeSpacing = {
  xs: 2,
  sm: 3,
  md: 4,
  lg: 8,
  xl: 10,
};

export const ICON_VIEW_SIZES = {
  sm: moderateScale(32),
  md: moderateScale(40),
  lg: moderateScale(50),
};

// 60% of icon View size
export const ICON_SIZES = {
  sm: moderateScale(19),
  md: moderateScale(24),
  lg: moderateScale(30),
};

const dialog = Math.round(width * 0.85);
export let CARD_WIDTH: number = (dialog > 550 && 550) || dialog;

export const RATING_IMAGE = (isAndroid && 20) || moderateScale(22);

export const BORDER_RADIUS = 12;
