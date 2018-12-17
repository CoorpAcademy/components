import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M10 7h7V5h-4V3h-2v2h-1C8.346 5 7 6.347 7 8v2c0 1.654 1.346 3 3 3h4c.551 0 1 .449 1 1v2c0 .552-.449 1-1 1H7v2h4v2h2v-2h1c1.654 0 3-1.346 3-3v-2c0-1.654-1.346-3-3-3h-4c-.551 0-1-.448-1-1V8c0-.551.449-1 1-1z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
