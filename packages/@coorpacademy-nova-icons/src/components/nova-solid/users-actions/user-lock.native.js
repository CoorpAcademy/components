import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 4.006c0-2.206-1.795-4-4-4-2.207 0-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.102 0 2 .897 2 2h-4c0-1.103.897-2 2-2zm3 9h-6v-5h6v5z" />
      <Circle cx={19} cy={8.006} r={1} />
      <Path d="M8 16.006c2.205 0 4-1.795 4-4s-1.795-4-4-4c-2.206 0-4 1.795-4 4a4.005 4.005 0 0 0 4 4zM8 17.006c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.29-6-8-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
