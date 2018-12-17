import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 10V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h9.079A7.952 7.952 0 0 1 10 18a8 8 0 0 1 8-8zm-6-9l5 5h-5V1zM3 9h9v2H3V9zm6 6H3v-2h6v2z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.078 0-2.065-.44-2.811-1.188L17 19h-5v5l1.761-1.761A5.94 5.94 0 0 0 18 24c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
