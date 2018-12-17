import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Path d="M7 10.129V7c0-.551.449-1 1-1h8c.551 0 1 .449 1 1v3.129c.904.447 1.611.992 2 1.571V7c0-1.654-1.346-3-3-3H8C6.346 4 5 5.346 5 7v4.7c.389-.579 1.096-1.124 2-1.571z" />
      <Circle cx={21.5} cy={11.5} r={1.5} />
      <Circle cx={2.5} cy={11.5} r={1.5} />
      <Path d="M20 13h-2c0-1.495-3-3-6-3s-6 1.506-6 3H4a2 2 0 0 0-2 2v5h1a2 2 0 0 0 4 0h10a2 2 0 0 0 4 0h1v-5a2 2 0 0 0-2-2zM5.5 17.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm5.5.5H9v-6h2v6zm4 0h-2v-6h2v6zm3.5-.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
