import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <Path
      fill="currentColor"
      d="M20 6h-3.5V5c0-1.654-1.346-3-3-3h-3c-1.654 0-3 1.346-3 3v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM9.5 5c0-.551.449-1 1-1h3c.551 0 1 .449 1 1v1h-5V5zM11 18H5v-2h6v2zm4.5-4a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
    />
  </Svg>
);

export default SvgComponent;
