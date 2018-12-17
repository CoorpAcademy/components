import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20 12.5a2 2 0 0 0 2-2c0-1.104-2-3-2-3s-2 1.896-2 3a2 2 0 0 0 2 2zM4 12.5a2 2 0 0 0 2-2c0-1.104-2-3-2-3s-2 1.896-2 3a2 2 0 0 0 2 2z" />
      <Path d="M15 10.185c.615-.477 1-1.178 1-2.185 0-2.209-4-5-4-5S8 5.791 8 8c0 1.007.385 1.708 1 2.185V13H2v9h8v-3l2-2 2 2v3h8v-9h-7v-2.815zM7 20H5v-2a1 1 0 0 1 2 0v2zm10-2a1 1 0 0 1 2 0v2h-2v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
