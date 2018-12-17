import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 5.005h6v2h-6zM14 9.002H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2zm-2 9.5a1.5 1.5 0 1 1-1.5-1.5v-2.771L7 15.372v4.13a1.5 1.5 0 1 1-1.5-1.5v-3.174c0-.326.209-.613.518-.713l5-1.632a.753.753 0 0 1 .983.713v5.306z" />
    </G>
  </Svg>
);

export default SvgComponent;
