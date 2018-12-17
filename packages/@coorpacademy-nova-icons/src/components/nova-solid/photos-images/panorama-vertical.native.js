import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.835 4.001A28.331 28.331 0 0 1 9 12c0 2.685-.4 5.424-1.165 8h8.33A28.328 28.328 0 0 1 15 12c0-2.685.4-5.424 1.165-8h-8.33z" />
      <Path d="M20 1H4c2.667 7.335 2.667 14.667 0 22h16c-2.667-7.333-2.667-14.665 0-22zm-2.459 20H6.459A27.133 27.133 0 0 0 8 12c0-3.063-.53-6.146-1.541-9h11.082A27.133 27.133 0 0 0 16 12c0 3.062.53 6.146 1.541 9z" />
    </G>
  </Svg>
);

export default SvgComponent;
