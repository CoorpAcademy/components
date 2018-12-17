import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.523 9.002H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.23a9.002 9.002 0 0 1-6.477-5.77zm2.477 9.5a1.5 1.5 0 1 1-1.5-1.5v-2.771L7 15.372v4.13a1.5 1.5 0 1 1-1.5-1.5v-3.174c0-.326.209-.613.518-.713l5-1.632a.753.753 0 0 1 .983.713v5.306z" />
      <Path d="M18 .002c-3.309 0-6 2.692-6 6h2c0-2.205 1.794-4 4-4s4 1.795 4 4c0 2.206-1.794 4-4 4-1.078 0-2.065-.44-2.811-1.188L17 7.002h-5v5l1.761-1.761A5.94 5.94 0 0 0 18 12.002c3.309 0 6-2.691 6-6 0-3.308-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
