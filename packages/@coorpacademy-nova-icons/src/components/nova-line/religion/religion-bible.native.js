import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Path d="M21 2H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM5 4h1v16H5V4zm15 16H8V4h12v16z" />
      <Path d="M10 12h3v5h2v-5h3v-2h-3V7h-2v3h-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
