import Color from 'color';

/**
 *
 * @param baseColor Base Color Code
 * @param mixWih Color to mix with base color
 * @param ratio Ration from 0 to 1, Default value is 1
 * @returns Hex color code
 */
export const blendColor = (
  baseColor: string,
  mixWih: string,
  ratio: number = 1,
): string => {
  try {
    const colorToAdd = Color(mixWih);
    return Color(baseColor).mix(colorToAdd, ratio).hex();
  } catch (e) {
    console.log({e});
  }
  return baseColor;
};

// 0.32 for Ripple Effect
export const colorWithAlpha = (color: string, alpha: number = 0.32) => {
  return Color(color).alpha(alpha).rgb().string();
};
