import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 4l-1-2h-5v9h11V4zM16 13h-5v9h11v-7h-5z" />
      <Circle cx={3} cy={3} r={1} />
      <Circle cx={3} cy={7} r={1} />
      <Circle cx={3} cy={11} r={1} />
      <Circle cx={3} cy={15} r={1} />
      <Circle cx={3} cy={19} r={1} />
      <Circle cx={7} cy={19} r={1} />
      <Circle cx={7} cy={7} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
