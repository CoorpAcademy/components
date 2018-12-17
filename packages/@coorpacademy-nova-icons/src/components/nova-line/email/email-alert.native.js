import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <Path
      d="M14 12H2c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zm-2.121 2L8 16.77 4.121 14h7.758zM2 22v-7.057l5.419 3.87a1 1 0 0 0 1.162 0L14 14.943 14.001 22H2zM19 3h2v6h-2z"
      fill="currentColor"
    />
    <Circle cx={20} cy={11} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
