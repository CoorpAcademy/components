import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 4h-2a2 2 0 0 0-4 0H8v3h8V4z" />
      <Path d="M19 5h-1v3H6V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-7 15l-4-4h3v-5h2v5h3l-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
