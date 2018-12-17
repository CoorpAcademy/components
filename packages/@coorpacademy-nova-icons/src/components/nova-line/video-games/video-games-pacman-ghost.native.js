import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.998 8.998h-2v4h3v-2h-1zM13.998 8.998h-2v4h3v-2h-1z" />
      <Path d="M11.998-.002c-4.963 0-9 4.038-9 9v14c0 .405.244.769.617.925.373.154.803.069 1.09-.217l3.293-3.293 3.293 3.293a1 1 0 0 0 1.414 0l3.293-3.293 3.293 3.293a1 1 0 0 0 1.707-.708v-14c0-4.963-4.037-9-9-9zm7 20.586l-2.293-2.293a1 1 0 0 0-1.414 0l-3.293 3.293-3.293-3.293a.997.997 0 0 0-1.414 0l-2.293 2.293V8.998c0-3.858 3.141-7 7-7s7 3.142 7 7v11.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
