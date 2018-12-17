import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={17} cy={16} r={1} />
      <Circle cx={15} cy={18.5} r={1} />
      <Circle cx={19} cy={18.5} r={1} />
      <Circle cx={17} cy={21} r={1} />
      <Circle cx={13} cy={21} r={1} />
      <Circle cx={21} cy={21} r={1} />
      <Path d="M14 13a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7c0-1.104-.897-2-2-2h-6V3h3V1H6v2h3v2H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11v2zM4 9V7h13v5h-1v-2a1 1 0 0 0-1-1H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
