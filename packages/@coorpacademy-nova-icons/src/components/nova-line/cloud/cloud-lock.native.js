import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 12H5c-1.654 0-3-1.346-3-3s1.346-3 3-3c.571 0 1.131.166 1.617.48a1.003 1.003 0 0 0 1.518-.613A4.973 4.973 0 0 1 13 2c2.757 0 5 2.243 5 5 0 .712-.154 1.387-.424 2h2.129c.19-.635.295-1.305.295-2 0-3.859-3.141-7-7-7a6.964 6.964 0 0 0-6.438 4.253A4.942 4.942 0 0 0 5 4C2.243 4 0 6.243 0 9s2.243 5 5 5h7v-2zM23 15c0-2.205-1.795-4-4-4s-4 1.795-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2zm3 9h-6v-5h6v5z" />
      <Circle cx={19} cy={19} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
