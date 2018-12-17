import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 9V7h-2V6c0-1.104-.897-2-2-2h-1V2h-2v2h-2V2h-2v2H9V2H7v2H6c-1.103 0-2 .896-2 2v1H2v2h2v2H2v2h2v2H2v2h2v1c0 1.103.897 2 2 2h1v2h2v-2h2v2h2v-2h2v2h2v-2h1c1.103 0 2-.897 2-2v-1h2v-2h-2v-2h2v-2h-2V9h2zM6 18V6h12l.001 12H6z" />
      <Path d="M8 14.535l4 2.666 4-2.666V8H8v6.535zM10 10h2v4.799l-2-1.334V10z" />
    </G>
  </Svg>
);

export default SvgComponent;
