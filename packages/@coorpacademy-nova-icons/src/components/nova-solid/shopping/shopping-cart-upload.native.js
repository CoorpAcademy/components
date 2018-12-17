import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H10.74A6.986 6.986 0 0 1 5 12c-.182 0-.359-.014-.537-.027l1.567 6.27A1 1 0 0 0 7 19h10a1 1 0 0 0 .975-.775l2.821-12.226H24v-2h-4zM6 10V4.413l2.293 2.293 1.414-1.414L5 .585.293 5.292l1.414 1.414L4 4.413V10z" />
    </G>
  </Svg>
);

export default SvgComponent;
