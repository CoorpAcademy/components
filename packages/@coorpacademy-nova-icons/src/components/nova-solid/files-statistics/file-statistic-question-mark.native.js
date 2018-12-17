import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.808 19H3V8h2v5.586l2.293-2.293a.999.999 0 0 1 1.414 0L11 13.586l2.293-2.293 1.414 1.413-3 3a.999.999 0 0 1-1.414 0L8 13.414l-3 3V17h9.093a5.976 5.976 0 0 1-.093-.999 5.997 5.997 0 0 1 4-5.651V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.104.897 2.001 2 2.001h14c.366 0 .705-.105 1-.278v-.531A6.046 6.046 0 0 1 14.808 19zM12 1l5 5h-5V1z" />
      <Path d="M20 12.001c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2c0 1.104-.897 2-2 2h-1v3.001h2v-1.128a4.004 4.004 0 0 0 3-3.873c0-2.206-1.794-4-4-4z" />
      <Circle cx={20} cy={22.995} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
