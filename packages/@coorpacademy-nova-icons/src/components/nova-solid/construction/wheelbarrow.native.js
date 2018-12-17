import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Circle cx={7} cy={18} r={3} />
      <Path d="M22.707 6.707l-1.414-1.413L16.586 10H2a1.001 1.001 0 0 0-.919 1.393l2.847 4.073A3.976 3.976 0 0 1 7 14a3.99 3.99 0 0 1 3.858 3h1.98l4.521 3.768a1.003 1.003 0 0 0 1.065.139c.351-.166.576-.518.576-.907v-9.586l3.707-3.707zm-8.473 8.854L17 12.334v5.531l-2.766-2.304z" />
      <Path d="M5 7h4v2H5zM11 7h4v2h-4zM8 4h4v2H8z" />
    </G>
  </Svg>
);

export default SvgComponent;
