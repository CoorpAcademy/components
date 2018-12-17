import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 9h17V7h-3.42L12.868.503l-1.736.992L14.277 7H5.723l3.146-5.504L7.132.504 3.42 7H0v2h1.197l1.826 8.217A1 1 0 0 0 4 18h8v-2H4.803L3 9z" />
      <Path d="M23 15c0-2.206-1.795-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.104 0 2 .898 2 2h-4c0-1.102.896-2 2-2zm3 9h-6v-5h6v5z" />
      <Circle cx={19} cy={19} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
