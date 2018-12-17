import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM12 17s-3-3-3-5a3.001 3.001 0 0 1 6 0c0 2-3 5-3 5zm8-11H4V5h16v1z" />
      <Circle cx={12} cy={12} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
