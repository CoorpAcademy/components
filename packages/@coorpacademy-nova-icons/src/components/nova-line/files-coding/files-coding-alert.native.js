import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.293 9.3l-3.707 3.707 3.707 3.707L8.707 15.3l-2.293-2.293 2.293-2.293zM9.293 10.714l2.293 2.293L9.293 15.3l1.414 1.414 3.707-3.707L10.707 9.3z" />
      <Path d="M2 .004c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2V4.59L13.414.004H2zm14.001 20H2v-18h10v4h4l.001 14zM20 14.004h2v6h-2z" />
      <Circle cx={21} cy={22.004} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
