import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 18c0-3.727 2.551-6.849 6-7.738v-2.9c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h8.262A7.998 7.998 0 0 1 10 18zM5 7H3V4h2v3zm3 0H6V4h2v3z" />
      <Path d="M18 12l1.714 4.286H24l-3.708 3.13L22.285 24 18 21.166 13.714 24l1.994-4.584L12 16.286h4.285z" />
    </G>
  </Svg>
);

export default SvgComponent;
