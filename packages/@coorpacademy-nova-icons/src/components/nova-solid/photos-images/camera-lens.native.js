import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 2l2 8h10l2-8zM7 18a2 2 0 0 0 2 2v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a2 2 0 0 0 2-2v-2H7v2zM7 12h10v2H7z" />
    </G>
  </Svg>
);

export default SvgComponent;
