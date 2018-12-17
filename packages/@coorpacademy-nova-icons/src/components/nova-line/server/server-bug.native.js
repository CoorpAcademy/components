import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 17.898c-.615.063-1.277.102-2 .102-4.547 0-7-1.42-7-2v-1.4c1.736.922 4.374 1.4 7 1.4.671 0 1.343-.032 2-.094v-2.008c-.615.063-1.277.102-2 .102-4.547 0-7-1.42-7-2v-1.4c1.736.922 4.374 1.4 7 1.4 1.375 0 2.75-.135 4-.392V9.569c-1.066.253-2.4.431-4 .431-4.547 0-7-1.42-7-2V6.6C3.736 7.522 6.374 8 9 8s5.264-.478 7-1.4V9h2V4c0-2.626-4.527-4-9-4S0 1.374 0 4v12c0 2.626 4.527 4 9 4 .672 0 1.342-.035 2-.096v-2.006zM9 2c4.547 0 7 1.42 7 2s-2.453 2-7 2-7-1.42-7-2 2.453-2 7-2z" />
      <Path d="M18 13a2 2 0 0 1 2 2h2c0-2.205-1.795-4-4-4s-4 1.795-4 4h2a2 2 0 0 1 2-2zM24 18v-2H12v2h2v1h-2v2h2c0 .334.167.646.445.832l3 2c.168.111.362.168.555.168s.387-.057.555-.168l3-2c.278-.186.445-.498.445-.832h2v-2h-2v-1h2zm-4 2.465l-2 1.334-2-1.334V18h4v2.465z" />
    </G>
  </Svg>
);

export default SvgComponent;
