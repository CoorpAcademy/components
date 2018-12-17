import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M2 2.784V21h20.645L2 2.784zm2 4.433l2.322 2.048-1.029 1.028 1.414 1.414 1.117-1.117 2.216 1.956-1.248 1.247 1.414 1.414 1.336-1.335 2.216 1.956-1.466 1.466 1.414 1.414 1.555-1.554L17.355 19H4V7.217z"
      fill="#767676"
    />
  </Svg>
);

export default SvgComponent;
