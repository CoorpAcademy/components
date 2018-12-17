import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.215 12c.497.91.783 1.926.783 3 0 3.86-3.589 7-8 7H3.291l1.328-1.43a1 1 0 0 0 .021-1.338C3.566 18 2.998 16.537 2.998 15c0-3.859 3.589-7 8-7V6c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.573 4.836L.265 22.32A.999.999 0 0 0 .998 24h10c5.514 0 10-4.037 10-9 0-1.053-.212-2.06-.583-3h-2.2z" />
      <Path d="M22.705 5.292L17.998.585l-4.707 4.707 1.414 1.414 2.293-2.293V10h2V4.413l2.293 2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
