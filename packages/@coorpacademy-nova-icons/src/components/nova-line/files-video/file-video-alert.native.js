import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 17l7-4-7-4z" />
      <Path d="M2 0C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2V4.586L13.414 0H2zm14.001 20H2V2h10v4h4l.001 14zM20 14h2v6h-2z" />
      <Circle cx={21} cy={22} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
