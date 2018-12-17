import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 16h4v4h-4zM10 10h4v4h-4zM4 10h4v4H4zM4 16h4v4H4z" />
      <Path d="M16 22H2V8h11.81a5.94 5.94 0 0 1-.72-2H0v18h18V10.911a5.957 5.957 0 0 1-2-.721V22zM21 2c-1.104 0-2 1-2 2 0-1-.896-2-2-2s-2 .894-2 2c0 3 4 6 4 6s4-3 4-6a2 2 0 0 0-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
