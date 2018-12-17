import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.104-.897-2-2-2zM2 18V2h2v2h2V2h8l.001 16H2z" />
      <Path d="M6 4h2v2H6zM4 6h2v2H4zM6 8h2v2H6zM4 10h2v2H4zM20 14h2v6h-2z" />
      <Circle cx={21} cy={22} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
