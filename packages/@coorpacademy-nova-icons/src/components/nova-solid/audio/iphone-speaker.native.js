import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 12.003l5-3-5-3z" />
      <Path d="M21 14.003h-3V3.002a1.998 1.998 0 0 0-1.999-1.999H8a2 2 0 0 0-2 2v11H3c-1.1 0-2 .9-2 2v5c0 1.099.9 2 2 2h18c1.1 0 2-.901 2-2v-5c0-1.1-.9-2-2-2zm-13-10h8v10H8v-10zm-3 17c-1.103 0-2-.896-2-2s.897-2 2-2 2 .896 2 2-.897 2-2 2zm5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 0a2 2 0 1 1 .001-4.001A2 2 0 0 1 19 21.003z" />
    </G>
  </Svg>
);

export default SvgComponent;
