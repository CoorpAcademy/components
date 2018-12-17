import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M8.251 17c0-2.301 1.449-3.75 3.75-3.75s3.75 1.449 3.75 3.75h-7.5z"
      fill="currentColor"
    />
    <Circle cx={12.001} cy={9.5} r={2.5} fill="currentColor" />
    <Path
      d="M20.001 22h-4v-2h4v-4h2v4c0 1.103-.897 2-2 2zM22.001 8h-2V4h-4V2h4c1.103 0 2 .896 2 2v4zM4.001 8h-2V4c0-1.104.897-2 2-2h4v2h-4v4zM8.001 22h-4c-1.103 0-2-.897-2-2v-4h2v4h4v2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
