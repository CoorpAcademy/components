import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.707 16.708l-1.414-1.414L19 17.586l-2.293-2.292-1.414 1.414L17.586 19l-2.293 2.294 1.414 1.414L19 20.414l2.293 2.294 1.414-1.414L20.414 19z" />
      <Path d="M19 13c.256 0 .507.021.755.053A8.964 8.964 0 0 0 20 11c0-4.962-4.037-9-9-9s-9 4.038-9 9 4.037 9 9 9a8.91 8.91 0 0 0 2.053-.246A5.856 5.856 0 0 1 13 19a6 6 0 0 1 6-6zm-5-4h-3.5a.5.5 0 0 0 0 1h1c1.379 0 2.5 1.122 2.5 2.5 0 1.208-.86 2.217-2 2.45V16h-2v-1H8v-2h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 8 9.5c0-1.208.86-2.217 2-2.449V5.999h2v1h2V9z" />
    </G>
  </Svg>
);

export default SvgComponent;
