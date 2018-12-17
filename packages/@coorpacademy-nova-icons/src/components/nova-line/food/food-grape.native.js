import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <G fill="currentColor">
      <Circle cx={12} cy={21.5} r={2.5} />
      <Circle cx={12} cy={9.5} r={2.5} />
      <Circle cx={18.5} cy={9.5} r={2.5} />
      <Circle cx={5.5} cy={9.5} r={2.5} />
      <Circle cx={15.5} cy={15.5} r={2.5} />
      <Circle cx={8.5} cy={15.5} r={2.5} />
      <Path d="M11 0h2v5h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
