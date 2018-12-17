import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 17v-1.05c1.14-.232 2-1.242 2-2.45 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H16V8h-2V7h-2v1.05c-1.14.232-2 1.242-2 2.45 0 1.378 1.121 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H10v2h2v1h2z" />
      <Path d="M13 3c-4.963 0-9 4.038-9 9H2l3 4 3-4H6c0-3.86 3.141-7 7-7s7 3.14 7 7-3.141 7-7 7v2c4.963 0 9-4.038 9-9s-4.037-9-9-9z" />
    </G>
  </Svg>
);

export default SvgComponent;
