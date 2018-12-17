import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <G fill="currentColor">
      <Path d="M18 2H6c-1.103 0-2 .896-2 2v16c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h12v16z" />
      <Circle cx={8} cy={6} r={1} />
      <Circle cx={16} cy={18} r={1} />
      <Path d="M12 16l3-4-3-4-3 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
