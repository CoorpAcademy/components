import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 10h4v4h-4zM4 10h4v4H4z" />
      <Path d="M16 22H2V8h10.683a6.925 6.925 0 0 1-.603-2H0v18h18V11.92a6.964 6.964 0 0 1-2-.602V22z" />
      <Path d="M4 16h4v4H4zM10 16h4v4h-4zM19 .585l-4.707 4.707 1.414 1.414L18 4.414V10h2V4.414l2.293 2.292 1.414-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
