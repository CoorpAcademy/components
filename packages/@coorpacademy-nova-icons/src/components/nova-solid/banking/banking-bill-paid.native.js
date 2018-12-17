import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 .999a1.003 1.003 0 0 0-1.448-.896l-3.48 1.743L8.555.168a1.003 1.003 0 0 0-1.109 0L4.928 1.847 1.448.104A1.003 1.003 0 0 0 0 .999v18A1.003 1.003 0 0 0 1 20a.992.992 0 0 0 .447-.106l3.48-1.74 2.518 1.678a1 1 0 0 0 1.109 0l2.517-1.678 1.183.592L16 15V.999zm-5 7H7.5A.502.502 0 0 0 7.5 9h1c1.379 0 2.5 1.122 2.5 2.5 0 1.208-.86 2.217-2 2.45V15H7v-1H5v-2h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 5 8.5c0-1.208.86-2.217 2-2.45V4.999h2v1h2v2zM22.293 16.294L18 20.586l-2.293-2.292-1.414 1.412L18 23.414l5.707-5.708z" />
    </G>
  </Svg>
);

export default SvgComponent;
