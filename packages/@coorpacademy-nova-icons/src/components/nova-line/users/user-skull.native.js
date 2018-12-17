import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18.001 2a4 4 0 0 0-4 4c0 1.477.81 2.752 2 3.445V11h4V9.445c1.19-.693 2-1.969 2-3.445a4 4 0 0 0-4-4zm-2 5a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM7.001 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM9.001 22h-4a1 1 0 0 1-1-1v-4h-1a1 1 0 0 1-1-1v-3c0-2.757 2.243-5 5-5s5 2.243 5 5v3a1 1 0 0 1-1 1h-1v4a1 1 0 0 1-1 1zm-3-2h2v-4a1 1 0 0 1 1-1h1v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3v2h1a1 1 0 0 1 1 1v4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
