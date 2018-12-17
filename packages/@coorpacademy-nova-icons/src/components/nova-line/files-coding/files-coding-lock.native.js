import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.293 9.3l-3.707 3.707 3.707 3.707L8.707 15.3l-2.293-2.293 2.293-2.293zM10.707 9.3l-1.414 1.414 2.293 2.293L9.293 15.3l1.414 1.414L13 14.422v-2.829z" />
      <Path d="M2 2.004h10v4h4V9h2V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h10v-2H2v-18z" />
      <Path d="M23 15.004c0-2.206-1.795-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2a2 2 0 0 1 2 2h-4c0-1.103.896-2 2-2zm3 9h-6v-5h6v5z" />
      <Circle cx={19} cy={19.004} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
