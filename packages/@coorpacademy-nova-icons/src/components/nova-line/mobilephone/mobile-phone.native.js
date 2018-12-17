import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 3V1h-2v2H8c-1.103 0-2 .896-2 2v15c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2V5c0-1.104-.897-2-2-2zm0 2v4H8V5h8zM8 20v-9h8l.001 9H8z" />
      <Circle cx={10} cy={14} r={1} />
      <Circle cx={14} cy={14} r={1} />
      <Circle cx={10} cy={17} r={1} />
      <Circle cx={14} cy={17} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
