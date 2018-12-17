import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 5h-8l-1.447-1.894A2 2 0 0 0 8.764 2H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h7v3H8v2h8v-2h-3v-3h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
      <Circle cx={19} cy={21} r={1} />
      <Circle cx={5} cy={21} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
