import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 7c0-3.859-3.141-7-7-7a6.962 6.962 0 0 0-6.438 4.254A4.924 4.924 0 0 0 5 4C2.243 4 0 6.243 0 9s2.243 5 5 5h8c3.859 0 7-3.14 7-7zm-7 5H5c-1.654 0-3-1.346-3-3s1.346-3 3-3c.568 0 1.129.167 1.619.482a1 1 0 0 0 1.516-.615A4.973 4.973 0 0 1 13 2c2.757 0 5 2.243 5 5s-2.243 5-5 5zM18 14.613v4.438A2.5 2.5 0 1 0 19.949 22H20v-4.613l2.633.879.633-1.898L18 14.613z" />
    </G>
  </Svg>
);

export default SvgComponent;
