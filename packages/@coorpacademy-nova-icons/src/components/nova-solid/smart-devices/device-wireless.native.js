import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M5.877 5.852l-1.53-1.289A9.987 9.987 0 0 1 12 1.001a9.991 9.991 0 0 1 7.64 3.547l-1.527 1.291A7.996 7.996 0 0 0 12 3.001a7.987 7.987 0 0 0-6.123 2.851z"
    />
    <Path
      fill="currentColor"
      d="M15.202 8.602A3.972 3.972 0 0 0 12 7.001c-1.27 0-2.436.584-3.2 1.6L7.2 7.4A5.954 5.954 0 0 1 12 5.001a5.95 5.95 0 0 1 4.802 2.402l-1.6 1.199zM13.993 10.001h-4c-1.654 0-3 1.346-3 3v6c0 1.654 1.346 3 3 3h4c1.654 0 3-1.346 3-3v-6c0-1.654-1.345-3-3-3zm-2 8.248a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
    />
  </Svg>
);

export default SvgComponent;
