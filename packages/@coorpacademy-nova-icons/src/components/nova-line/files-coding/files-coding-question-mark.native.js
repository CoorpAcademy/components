import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.293 9.3l-3.707 3.707 3.707 3.707L8.707 15.3l-2.293-2.293 2.293-2.293zM9.293 10.714l2.293 2.293L9.293 15.3l1.414 1.414 3.707-3.707L10.707 9.3z" />
      <Path d="M2 2.004h10v4h4V10h2V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h12v-2H2v-18z" />
      <Path d="M20 12.004c-2.206 0-4 1.794-4 4h2c0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2h-1v3h2v-1.126a4.008 4.008 0 0 0 3-3.874c0-2.205-1.794-4-4-4z" />
      <Circle cx={20} cy={23.004} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
