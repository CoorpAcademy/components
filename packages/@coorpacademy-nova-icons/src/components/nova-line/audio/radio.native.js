import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 8H6.922l7.557-4.122-.958-1.756-10.834 5.91A1.998 1.998 0 0 0 1 10v10c0 1.103.897 2 2 2h17c1.103 0 2-.897 2-2V10c0-1.104-.897-2-2-2zM3 20V10h17l.001 10H3z" />
      <Path d="M5 12h8v2H5zM5 16h6v2H5z" />
      <Circle cx={16} cy={16} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
