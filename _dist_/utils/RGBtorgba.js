export const RGBtorgba = (rgb, a) => {
  if (typeof rgb == "string")
    return rgb;
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}${a ? `, ${a}` : ""})`;
};
