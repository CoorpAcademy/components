import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 17h-3V7c0-1.103-.897-2-2-2H7V2H5v3H2v2h3v10c0 1.103.897 2 2 2h10v3h2v-3h3v-2zM7 17V7h10v10H7z" />
      <Circle cx={12} cy={12} r={3} />
    </G>
  </Svg>
);

export default SvgComponent;
