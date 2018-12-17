import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <G fill="currentColor">
      <Path d="M18.998.998h-14c-1.104 0-2 .897-2 2v18a2 2 0 0 0 2 2h11c2.757 0 5-2.243 5-5v-15c0-1.103-.896-2-2-2zm-3 20h-11v-18h14v15c0 1.654-1.346 3-3 3z" />
      <Path d="M9.998 13.998h-2v2h-2v2h2v2h2v-2h2v-2h-2z" />
      <Circle cx={16.998} cy={15.998} r={1} />
      <Circle cx={14.998} cy={17.998} r={1} />
      <Path d="M16.998 3.998h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-1 7h-8v-5h8v5z" />
    </G>
  </Svg>
);

export default SvgComponent;
