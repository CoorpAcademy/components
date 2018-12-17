import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Circle cx={14} cy={12.001} r={1} />
      <Circle cx={10} cy={12.001} r={1} />
      <Path d="M19 6.001c-3.44 0-6.174-3.566-6.201-3.601-.378-.5-1.22-.5-1.598 0C11.174 2.436 8.44 6.001 5 6.001a1 1 0 0 0-1 1v7c0 3.807 6.763 7.478 7.533 7.885a1.002 1.002 0 0 0 .934 0c.771-.407 7.533-4.078 7.533-7.885v-7a1 1 0 0 0-1-1zm-4 8.63v1.37a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.37a3.984 3.984 0 0 1-1-2.63c0-2.206 1.795-4 4-4s4 1.794 4 4c0 .968-.359 1.902-1 2.63z" />
    </G>
  </Svg>
);

export default SvgComponent;
