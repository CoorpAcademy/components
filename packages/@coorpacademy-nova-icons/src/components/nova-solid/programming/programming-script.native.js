import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19 2H9C7.346 2 6 3.346 6 5v9c-2.206 0-4 1.794-4 4s1.794 4 4 4h9c1.654 0 3-1.346 3-3V8h3a1 1 0 0 0 1-1V5c0-1.654-1.345-3-3-3zm-6.006 18H6c-1.103 0-2-.897-2-2 0-1.102.897-2 2-2h7a2 2 0 0 0-.006 4zM15 11H9V9h6v2zm0-4H9V5h6v2zm5-1h-2V5c0-.551.449-1 1-1s1 .449 1 1v1z"
    />
  </Svg>
);

export default SvgComponent;
