import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M24 16V5c0-1.103-.897-2-2-2H2C.897 3 0 3.897 0 5v11h24zM0 17v1c0 1.103.897 2 2 2h9v2H7v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2v-1H0z" />
    </G>
  </Svg>
);

export default SvgComponent;
