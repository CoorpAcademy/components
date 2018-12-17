import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 13c.341 0 .674.036 1 .09V2H2v18h11.09a5.998 5.998 0 0 1-.09-1 6 6 0 0 1 6-6z" />
      <Path d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
