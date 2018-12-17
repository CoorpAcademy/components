import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M5.883 5.853l-1.53-1.289a9.988 9.988 0 0 1 7.654-3.563 9.991 9.991 0 0 1 7.64 3.547L18.12 5.839a7.992 7.992 0 0 0-6.112-2.838 7.988 7.988 0 0 0-6.125 2.852z"
      fill="currentColor"
    />
    <Path
      d="M15.209 8.603a3.97 3.97 0 0 0-3.202-1.602c-1.27 0-2.437.584-3.2 1.601L7.207 7.4a5.956 5.956 0 0 1 4.8-2.399 5.95 5.95 0 0 1 4.802 2.402l-1.6 1.2zM14 22.001h-4c-1.654 0-3-1.346-3-3v-6c0-1.654 1.346-3 3-3h4c1.654 0 3 1.346 3 3v6c0 1.654-1.346 3-3 3zm-4-10c-.551 0-1 .449-1 1v6c0 .551.449 1 1 1h4c.551 0 1-.449 1-1v-6c0-.551-.449-1-1-1h-4z"
      fill="currentColor"
    />
    <Circle cx={12} cy={16.999} r={1.25} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
