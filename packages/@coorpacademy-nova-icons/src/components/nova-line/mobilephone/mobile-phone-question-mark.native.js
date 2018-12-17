import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <Path
      d="M10 0H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2V2c0-1.104-.897-2-2-2zm0 2v2H2V2h8zm0 4v8H2V6h8zM2 18v-2h8.001v2H2zM21 21h-2v-3h1c1.103 0 2-.896 2-2s-.897-2-2-2-2 .896-2 2h-2c0-2.205 1.794-4 4-4s4 1.795 4 4a4.007 4.007 0 0 1-3 3.873V21z"
      fill="currentColor"
    />
    <Circle cx={20} cy={23} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
