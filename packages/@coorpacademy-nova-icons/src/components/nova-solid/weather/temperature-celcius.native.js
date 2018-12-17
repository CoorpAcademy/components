import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2.002c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.478-10-10-10zm-5 5a2 2 0 1 1 4.001.001A2 2 0 0 1 7 7.002zm9 4h-4c-.551 0-1 .449-1 1v4c0 .552.449 1 1 1h4v2h-4c-1.654 0-3-1.346-3-3v-4c0-1.654 1.346-3 3-3h4v2z"
    />
  </Svg>
);

export default SvgComponent;
