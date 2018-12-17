import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 7c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0 7a2 2 0 1 1 .001-4.001A2 2 0 0 1 14 14z" />
      <Circle cx={14} cy={12} r={1} />
      <Path d="M20 4H4c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.102-.897-2-2-2zM4 6h2v12H4V6zm4 12V6h12l.001 12H8z" />
    </G>
  </Svg>
);

export default SvgComponent;
