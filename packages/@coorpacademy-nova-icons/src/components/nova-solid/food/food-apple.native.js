import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.001h24.001V24H-.002z" />
    <G fill="currentColor">
      <Path d="M11 5v1h2V5c0-1.654-1.346-3-3-3H8v2h2c.551 0 1 .449 1 1zM18 2s-2 0-3 1-1 3-1 3 2 0 3-1 1-3 1-3zM15.371 6.367c-1.15 0-2.301.444-3.371 1.293-1.07-.849-2.221-1.293-3.371-1.293C5.312 6.367 3 9.863 3 13c0 4.542 3.467 9 7 9 .262 0 .518-.106.704-.29.291-.286.904-.71 1.296-.71.391 0 1.004.423 1.295.709A.997.997 0 0 0 14 22c3.533 0 7-4.458 7-9 0-3.137-2.312-6.633-5.629-6.633z" />
    </G>
  </Svg>
);

export default SvgComponent;
