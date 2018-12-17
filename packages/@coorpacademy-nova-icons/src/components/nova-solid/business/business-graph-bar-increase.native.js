import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 22h20v2H2zM10 13h4v8h-4zM16 9h4v12h-4zM4 17h4v4H4zM3.707 14.708L15 3.415V6h2V0h-6v2h2.586L2.293 13.294z" />
    </G>
  </Svg>
);

export default SvgComponent;
