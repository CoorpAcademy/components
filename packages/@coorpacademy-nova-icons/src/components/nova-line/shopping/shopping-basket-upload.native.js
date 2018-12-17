import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3.246 9h13.508l-.667 3h2.048l.667-3H20V7h-3.42L12.868.503l-1.736.992L14.277 7H5.723l3.146-5.504L7.132.503 3.42 7H0v2h1.198l1.825 8.217A1 1 0 0 0 4 18h8v-2H4.803L3.246 9zM23.707 19.292L19 14.585l-4.707 4.707 1.414 1.414L18 18.413V24h2v-5.587l2.293 2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
