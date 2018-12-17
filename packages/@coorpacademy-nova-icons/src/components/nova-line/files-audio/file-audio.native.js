import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={14.005} r={1} />
      <Path d="M12 9.005c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      <Path d="M16.414 1.003H5c-1.103 0-2 .897-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.589l-4.586-4.586zM5 21.003v-18h10v4h4l.001 14H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
