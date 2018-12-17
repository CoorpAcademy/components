import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M22 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-5c0-1.654-1.346-3-3-3h-4c-.551 0-1-.449-1-1V6h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v1c0 1.654 1.346 3 3 3h4c.551 0 1 .449 1 1h-5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v1h-5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-5v-1h5zM3 2h10v2H3V2zm18 20H11v-2h10v2zm-10-9h10v2H11v-2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
