import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20 4v13c0 .551-.449 1-1 1h-6.184A2.996 2.996 0 0 0 10 16c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.996 2.996 0 0 0 2.816-2H19c1.654 0 3-1.346 3-3V4h-2zM10 20c-.551 0-1-.449-1-1 0-.551.449-1 1-1s1 .449 1 1c0 .551-.449 1-1 1z" />
      <Path d="M8.456 14.633l.504-1.84a1.077 1.077 0 0 1 2.08 0l.504 1.84A2 2 0 0 0 13.441 16H16a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2.559a2 2 0 0 0 1.897-1.367z" />
    </G>
  </Svg>
);

export default SvgComponent;
