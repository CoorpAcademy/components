import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Path d="M16.998 17.998h-10a2 2 0 0 0 0 4h10a2 2 0 1 0 0-4zM7.998 16.998h8a2 2 0 1 0 0-4h-8a2 2 0 0 0 0 4zM8.998 11.998h6a2 2 0 1 0 0-4h-6a2 2 0 0 0 0 4zM10.998 1.998h2v5h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
