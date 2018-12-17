import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={1} cy={3} r={1} />
      <Path d="M4 2h14v2H4z" />
      <Circle cx={1} cy={7} r={1} />
      <Path d="M4 6h14v2H4z" />
      <Circle cx={1} cy={11} r={1} />
      <Path d="M4 10h14v2H4z" />
      <Circle cx={1} cy={15} r={1} />
      <Path d="M4 14h11v2H4zM17 17h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
