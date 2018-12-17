import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.001 18c0-2.301 1.449-3.75 3.75-3.75s3.75 1.449 3.75 3.75h-7.5z" />
      <Circle cx={11.751} cy={10.5} r={2.5} />
      <Path d="M19.001 4h-1v2h1l.001 14H5.001V6h1V4h-1c-1.103 0-2 .896-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.104-.897-2-2-2z" />
      <Path d="M14.001 3a2 2 0 0 0-4 0h-2v3h8V3h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
