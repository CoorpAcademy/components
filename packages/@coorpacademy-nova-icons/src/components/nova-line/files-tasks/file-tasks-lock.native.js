import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 5h-2V3h-1.142c-.447-1.719-2-3-3.858-3S8.589 1.281 8.142 3H7v2H5c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7c0-1.102-.897-2-2-2zm-7-3c.739 0 1.385.402 1.731 1h-3.463c.347-.598.993-1 1.732-1zM9 5h6v2H9V5zm10 16H5V7h2v2h10V7h2v14z" />
      <Path d="M12 10c-1.654 0-3 1.346-3 3H8v6h8v-6h-1c0-1.654-1.346-3-3-3zm0 2c.551 0 1 .449 1 1h-2c0-.551.449-1 1-1zm2 5h-4v-2h4v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
