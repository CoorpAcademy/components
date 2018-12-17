import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.334 16.333h1.332v-.7A1.67 1.67 0 0 0 10 14a1.67 1.67 0 0 0-1.666-1.667h-.668c-.184 0-.332-.149-.332-.333s.148-.333.332-.333H10v-1.334H8.666v-.666H7.334v.7A1.67 1.67 0 0 0 6 12c0 .919.748 1.667 1.666 1.667h.668c.184 0 .332.149.332.333s-.148.333-.332.333H6v1.334h1.334v.666z" />
      <Path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM4 5h16v1H4V5zm15 13H5V8h14v10z" />
      <Path d="M12 12h2v5h-2zM15 10h2v7h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
