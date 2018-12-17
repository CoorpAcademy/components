import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 2.008h10v3.981h6V4.594L13.414.009H2c-1.103 0-2 .896-2 2v18c0 1.102.897 2 2 2h5v-2H2V2.008z" />
      <Path d="M16 8c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
      <Circle cx={16} cy={14} r={2} />
      <Path d="M16 16a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
