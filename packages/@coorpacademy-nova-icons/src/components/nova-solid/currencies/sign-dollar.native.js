import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M10 7.003h7v-2h-4v-2h-2v2h-1c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3h4c.551 0 1 .449 1 1v2c0 .552-.449 1-1 1H7v2h4v2h2v-2h1c1.654 0 3-1.346 3-3v-2c0-1.654-1.346-3-3-3h-4c-.551 0-1-.448-1-1v-2c0-.551.449-1 1-1z"
    />
  </Svg>
);

export default SvgComponent;
