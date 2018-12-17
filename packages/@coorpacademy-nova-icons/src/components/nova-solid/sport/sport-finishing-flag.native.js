import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Path d="M10 7h3v3h-3z" />
      <Path d="M2 2v20h2v-7h17V2H2zm17 5h-3v3h3v3h-3v-3h-3v3h-3v-3H7v3H4v-3h3V7H4V4h3v3h3V4h3v3h3V4h3v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
