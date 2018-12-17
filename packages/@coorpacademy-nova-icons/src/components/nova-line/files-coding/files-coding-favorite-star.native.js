import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.293 9.3l-3.707 3.707 3.707 3.707L8.707 15.3l-2.293-2.293 2.293-2.293zM12.425 14.998l1.989-1.991L10.707 9.3l-1.414 1.414 2.293 2.293-1.989 1.991z" />
      <Path d="M2 2.004h10v4h4V10h2V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h8v-2H2v-18z" />
      <Path d="M24 16.291h-4.286L18 12.004l-1.715 4.287H12l3.708 3.129-1.994 4.584L18 21.17l4.285 2.834-1.993-4.584z" />
    </G>
  </Svg>
);

export default SvgComponent;
