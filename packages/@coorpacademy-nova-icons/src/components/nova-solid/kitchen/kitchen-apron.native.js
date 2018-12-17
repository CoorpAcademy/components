import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24H-.001z" />
    <G fill="currentColor">
      <Path d="M20 6v2c0 1.343-.455 1.781-.768 1.927l.486 1.947C20.752 11.558 22 10.528 22 8V6h-2zM4 8V6H2v2c0 2.528 1.248 3.558 2.281 3.873l.487-1.947C4.455 9.781 4 9.343 4 8zM16 2a2 2 0 0 0-2 2v3a2 2 0 0 1-4 0V4a2 2 0 0 0-4 0S5 16 5 22h14c0-6-1-18-1-18a2 2 0 0 0-2-2zm-1 14a3 3 0 0 1-6 0v-1h6v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
