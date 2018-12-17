import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 9h8v2H4zM4 13h6v2H4z" />
      <Path d="M2 2h10v4h4l.001 11H18V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h13v-2H2V2zM17 19h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
