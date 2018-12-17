import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 8.002a1 1 0 0 0-1-1h-6v6.414h-4V7.002H4a1 1 0 0 0-1 1v9h18v-9zM21.345 18.001H2.655l-1.288 3.734c-.186.557-.109 1.129.208 1.57s.837.696 1.425.696h18c.588 0 1.107-.254 1.425-.695s.394-1.014.208-1.57l-1.288-3.735zm-7.345 4h-4v-2h4v2z" />
    </G>
    <Path
      fill="currentColor"
      d="M16.707 4.708L12 .002 7.293 4.708l1.414 1.415L11 3.83v8.586h2V3.83l2.293 2.293z"
    />
  </Svg>
);

export default SvgComponent;
