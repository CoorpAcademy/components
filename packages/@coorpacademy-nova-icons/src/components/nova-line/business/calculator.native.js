import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 2H7c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h10c1.104 0 2-.897 2-2V4c0-1.102-.896-2-2-2zm0 2l-.001 4H7V4h10zM7 20V10h9.999l-.002 10H7z" />
      <Circle cx={9} cy={12} r={1} />
      <Circle cx={12} cy={12} r={1} />
      <Circle cx={15} cy={12} r={1} />
      <Path d="M14 5h2v2h-2z" />
      <Circle cx={9} cy={15} r={1} />
      <Circle cx={12} cy={15} r={1} />
      <Circle cx={15} cy={15} r={1} />
      <Circle cx={9} cy={18} r={1} />
      <Circle cx={12} cy={18} r={1} />
      <Circle cx={15} cy={18} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
