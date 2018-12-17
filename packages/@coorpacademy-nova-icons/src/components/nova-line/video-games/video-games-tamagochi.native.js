import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <G fill="currentColor">
      <Path d="M11.998 1.998c-5.384 0-9 6.206-9 12 0 3.65 1.562 8 9 8s9-4.35 9-8c0-5.795-3.616-12-9-12zm0 18c-4.842 0-7-1.85-7-6 0-4.192 2.433-10 7-10s7 5.808 7 10c0 4.15-2.158 6-7 6z" />
      <Path d="M15.998 7.998h-8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-1 5h-6v-3h6v3z" />
      <Circle cx={11.998} cy={17.998} r={1} />
      <Circle cx={14.998} cy={16.998} r={1} />
      <Circle cx={8.998} cy={16.998} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
