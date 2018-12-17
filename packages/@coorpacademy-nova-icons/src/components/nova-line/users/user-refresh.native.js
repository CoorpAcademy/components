import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.251 17c0-2.301 1.449-3.75 3.75-3.75s3.75 1.449 3.75 3.75h-7.5z" />
      <Circle cx={12.001} cy={9.5} r={2.5} />
      <Path d="M20.77 14c-.913 4.002-4.494 7-8.769 7-4.055 0-7.489-2.696-8.611-6.389L6.001 12h-6v6l1.827-1.827C3.476 20.173 7.413 23 12.001 23c5.382 0 9.865-3.888 10.809-9h-2.04zM22.174 7.827C20.526 3.826 16.589 1 12.001 1 6.619 1 2.136 4.887 1.192 10h2.04c.913-4.002 4.494-7 8.769-7 4.055 0 7.489 2.696 8.611 6.39L18.001 12h6V6l-1.827 1.827z" />
    </G>
  </Svg>
);

export default SvgComponent;
