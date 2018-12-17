import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M11 8C4.648 8 0 15 0 15s4.648 7 11 7 11-7 11-7-4.648-7-11-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
      <Circle cx={11} cy={15} r={2} />
      <Path d="M19 4V1h-2v3h-3v2h3v3h2V6h3V4z" />
    </G>
  </Svg>
);

export default SvgComponent;
