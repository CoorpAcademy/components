import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Circle cx={12} cy={6} r={1} />
      <Circle cx={18} cy={6} r={1} />
      <Circle cx={18} cy={12} r={1} />
      <Path d="M20 2H10c-1.103 0-2 .896-2 2v3h2V4h10v10h-3v2h3c1.104 0 2-.897 2-2V4a2 2 0 0 0-2-2z" />
      <Path d="M14 8H4a2 2 0 0 0-2 2v10c0 1.103.896 2 2 2h10c1.104 0 2-.897 2-2V10a2 2 0 0 0-2-2zm0 12H4V10h10v10z" />
      <Circle cx={7} cy={12} r={1} />
      <Circle cx={11} cy={12} r={1} />
      <Circle cx={7} cy={15} r={1} />
      <Circle cx={11} cy={15} r={1} />
      <Circle cx={7} cy={18} r={1} />
      <Circle cx={11} cy={18} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
