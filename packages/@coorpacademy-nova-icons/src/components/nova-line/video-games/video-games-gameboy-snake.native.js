import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <G fill="currentColor">
      <Path d="M17.998 1.998h-12c-1.104 0-2 .897-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-16c0-1.103-.896-2-2-2zm0 18h-12v-16h12v16z" />
      <Path d="M8.998 18.998h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
      <Circle cx={15.998} cy={14.998} r={1} />
      <Circle cx={14.998} cy={16.998} r={1} />
      <Path d="M9.998 8.998h4v-2h-2v-1h3v4h-4v2h6v-7h-10v7h3v-3zm-1-3h1v1h-1v-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
