import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={16.5} r={1.5} />
      <Path d="M17 11H9V8c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2V8c0-2.757-2.243-5-5-5S7 5.243 7 8v3c-1.103 0-2 .898-2 2v7c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2zM7 20v-7h10l.001 7H7z" />
    </G>
  </Svg>
);

export default SvgComponent;
