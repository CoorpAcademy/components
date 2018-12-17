import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.87.322-.975.776L18.05 9H16v2h1.589l-1.384 6H7.781l-.25-1H5.469l.561 2.243A1 1 0 0 0 7 19h10a1 1 0 0 0 .975-.775l2.821-12.227H24v-2h-4z" />
      <Path d="M14 7c0-3.86-3.14-7-7-7S0 3.14 0 7s3.14 7 7 7 7-3.14 7-7zM2 7c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z" />
      <Path d="M10 6H8V3H6v5h4z" />
    </G>
  </Svg>
);

export default SvgComponent;
