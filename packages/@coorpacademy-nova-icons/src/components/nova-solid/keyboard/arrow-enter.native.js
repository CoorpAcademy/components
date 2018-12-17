import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 4h-8v2h7v10H5.414l2.293-2.293-1.414-1.413L1.586 17l4.707 4.706 1.414-1.413L5.414 18H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
    />
  </Svg>
);

export default SvgComponent;
