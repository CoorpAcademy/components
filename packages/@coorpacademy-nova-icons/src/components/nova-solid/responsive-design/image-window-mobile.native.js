import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 4H2C.897 4 0 4.897 0 6v2.002h13V4zM13 12V9.002H0V22c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2v-8h-7a2 2 0 0 1-2-2zm-7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-2 9l3-4 2 2 3-4 4 6H4z" />
      <Path d="M22 0h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm-1 2v6h-4V2h4z" />
    </G>
  </Svg>
);

export default SvgComponent;
