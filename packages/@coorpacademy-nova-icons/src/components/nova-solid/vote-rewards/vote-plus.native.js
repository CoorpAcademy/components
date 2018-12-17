import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 3H6C4.346 3 3 4.346 3 6v13c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2V6c0-1.654-1.346-3-3-3zm-8 2h4v2h-4V5zM8 7H5V6c0-.552.449-1 1-1h2v2zm7 8h-2v2h-2v-2H9v-2h2v-2h2v2h2v2zm4-8h-3V5h2c.551 0 1 .448 1 1v1z"
    />
  </Svg>
);

export default SvgComponent;
