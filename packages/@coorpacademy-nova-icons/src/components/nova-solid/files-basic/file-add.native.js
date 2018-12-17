import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 14.349V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h12.349A5.966 5.966 0 0 1 14 20a5.996 5.996 0 0 1 4-5.651zM9 15H3v-2h6v2zm3-4H3V9h9v2zm0-5V1l5 5h-5zM21 19v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
