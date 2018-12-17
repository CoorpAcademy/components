import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M21.895 20.553l-9-18c-.339-.678-1.45-.678-1.789 0l-9 18A1 1 0 0 0 3 22h18a1.001 1.001 0 0 0 .895-1.447zM12 18c-2.762 0-5-3-5-3s2.238-3 5-3 5 3 5 3-2.238 3-5 3z" />
      <Circle cx={12} cy={15} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
