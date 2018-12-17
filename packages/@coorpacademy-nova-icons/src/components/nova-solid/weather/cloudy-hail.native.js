import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={18.005} r={1} />
      <Circle cx={6} cy={21.005} r={1} />
      <Circle cx={11.5} cy={18.005} r={1} />
      <Circle cx={9.5} cy={21.005} r={1} />
      <Circle cx={15} cy={18.005} r={1} />
      <Circle cx={13} cy={21.005} r={1} />
      <Path d="M15 2.005a6.964 6.964 0 0 0-5.979 3.356c.966.458 1.996 1.264 2.971 2.647l-.817.575C9.678 6.459 8.393 6.005 7 6.005c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c3.86 0 7-3.14 7-7 0-3.861-3.14-7-7-7z" />
    </G>
  </Svg>
);

export default SvgComponent;
