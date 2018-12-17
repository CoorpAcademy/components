import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 12.294V4.586L13.414.001H2c-1.103 0-2 .897-2 2v18c0 1.102.897 2 2 2h11.683A6.97 6.97 0 0 1 13 19a7 7 0 0 1 5-6.706zM12 1l5 5h-5V1zM5 17V9l8 4.002L5 17zM22 16.002c-1.104 0-2 1-2 2 0-1-.896-2-2-2s-2 .894-2 2c0 3 4 6 4 6s4-3 4-6a2 2 0 0 0-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
