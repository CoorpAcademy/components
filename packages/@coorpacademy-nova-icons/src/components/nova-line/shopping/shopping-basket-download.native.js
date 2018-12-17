import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3.246 9h13.508l-.667 3h2.048l.667-3H20V7h-3.42L12.868.503l-1.736.992L14.277 7H5.723l3.146-5.505L7.132.503 3.42 7H0v2h1.198l1.825 8.217A1 1 0 0 0 4 18h8v-2H4.803L3.246 9zM22.293 17.292L20 19.585v-5.586h-2v5.586l-2.293-2.293-1.414 1.414L19 23.413l4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
