import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M14 11.904a4.995 4.995 0 0 1-1 .102H5c-1.654 0-3-1.346-3-3s1.346-3 3-3c.571 0 1.131.166 1.617.48a1 1 0 0 0 1.518-.613A4.973 4.973 0 0 1 13 2.006c2.757 0 5 2.243 5 5A4.95 4.95 0 0 1 16.979 10h2.339A6.956 6.956 0 0 0 20 7.006c0-3.859-3.141-7-7-7a6.964 6.964 0 0 0-6.438 4.253A4.942 4.942 0 0 0 5 4.006c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c.34 0 .672-.033 1-.08v-2.022zM21 21h-2v-3h1a2 2 0 1 0-2-2h-2c0-2.205 1.795-4 4-4s4 1.795 4 4a4.01 4.01 0 0 1-3 3.874V21z"
      fill="currentColor"
    />
    <Circle cx={20} cy={23} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
