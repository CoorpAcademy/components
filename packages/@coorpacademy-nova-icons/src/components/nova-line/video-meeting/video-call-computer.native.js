import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 4.999v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1l3 1v-4l-3 1z" />
      <Circle cx={11} cy={9.999} r={2} />
      <Path d="M19 14.999h-5.145c-.353-1.245-1.379-2-2.855-2s-2.502.755-2.855 2H3v-8h10v-2H3c-1.103 0-2 .896-2 2v11c0 1.104.897 2 2 2h7v2H6v2h10v-2h-4v-2h7c1.103 0 2-.896 2-2v-7h-2v4zm-16 3v-1h16v1H3z" />
    </G>
  </Svg>
);

export default SvgComponent;
