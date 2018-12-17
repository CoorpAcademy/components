import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M17 6h-5v2h5c1.654 0 3 1.346 3 3s-1.346 3-3 3H6.414l2.293-2.293-1.414-1.413L2.586 15l4.707 4.706 1.414-1.413L6.414 16H17c2.757 0 5-2.243 5-5s-2.243-5-5-5z"
    />
  </Svg>
);

export default SvgComponent;
