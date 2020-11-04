import type { RGB } from 'color-name'

export const RGBtorgba = (rgb: RGB | string, a?: number): string => {
  if (typeof rgb == 'string') return rgb;
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}${a ? `, ${a}` : ''})`;
};
