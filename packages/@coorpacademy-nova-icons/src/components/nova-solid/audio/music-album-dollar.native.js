import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 12.002v-3H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8c-1.1 0-2-.9-2-2zm-2 6.5a1.5 1.5 0 1 1-1.5-1.5v-2.771L7 15.372v4.13a1.5 1.5 0 1 1-1.5-1.5v-3.174c0-.326.209-.613.518-.713l5-1.632a.753.753 0 0 1 .983.713v5.306zM21 5.002h-2a1 1 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.347-3 3 0 1.655 1.346 3 3 3h2a1.001 1.001 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.345 3-3 0-1.653-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
