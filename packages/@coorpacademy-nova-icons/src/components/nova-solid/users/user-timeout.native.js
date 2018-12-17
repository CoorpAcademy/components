import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M17.294 11.707l-2.293-2.293V6h2v2.586l1.707 1.707z"
    />
    <Path
      fill="currentColor"
      d="M16.001 16v-2c2.757 0 5-2.242 5-5 0-2.756-2.243-5-5-5a5.002 5.002 0 0 0-3.293 1.236l-1.316-1.505A6.998 6.998 0 0 1 16.001 2c3.86 0 7 3.141 7 7 0 3.86-3.14 7-7 7z"
    />
    <G fill="currentColor">
      <Circle cx={7.001} cy={5} r={3} />
      <Path d="M7.001 8c-2.757 0-5 2.243-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3c0-2.757-2.243-5-5-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
