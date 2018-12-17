import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <Path
      d="M14 12H2c-1.104 0-2 .897-2 2v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-8c0-1.103-.896-2-2-2zm-2.12 2L8 16.77 4.12 14h7.76zM2 22v-7.057l5.419 3.87a1.002 1.002 0 0 0 1.162 0L14 14.943 14.002 22H2zM21 9h-2V6h1c1.104 0 2-.897 2-2s-.896-2-2-2-2 .897-2 2h-2c0-2.205 1.795-4 4-4s4 1.795 4 4a4.008 4.008 0 0 1-3 3.874V9z"
      fill="currentColor"
    />
    <Circle cx={20} cy={11} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
