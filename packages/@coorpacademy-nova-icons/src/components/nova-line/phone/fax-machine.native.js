import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 7h-4v2h-6V7H8V6c0-.737-.405-1.375-1-1.722V1H5v3H2C.897 4 0 4.896 0 6v15a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h2v3h10v-3h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM2 21V6h4v15H2zm16 1h-6v-4h6v4zm2-3v-3H10v3H8V9h2v2h10V9h2l.002 10H20z" />
      <Path d="M12 3h6v2h2V1H10v4h2z" />
      <Circle cx={12} cy={14} r={1} />
      <Circle cx={15} cy={14} r={1} />
      <Circle cx={18} cy={14} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
