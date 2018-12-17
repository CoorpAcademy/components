import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.947 12.998c-.252 2.247-2.137 4-4.449 4-2.314 0-4.197-1.754-4.449-4H2.023c.262 5.006 4.405 9 9.475 9 5.068 0 9.211-3.994 9.474-9h-5.025zM7.049 11.998c.252-2.246 2.135-4 4.449-4 2.312 0 4.197 1.754 4.449 4h5.024c-.263-5.005-4.405-9-9.474-9s-9.213 3.995-9.475 9h5.027z" />
      <Path d="M11.498 8.998a3.5 3.5 0 1 0 .001 7.001 3.5 3.5 0 0 0-.001-7.001zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
