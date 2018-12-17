import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.293 9.3l-3.707 3.707 3.707 3.707L8.707 15.3l-2.293-2.293 2.293-2.293zM10.708 9.3l1.996 1.996-1.414 1.414-1.997-1.996z" />
      <Path d="M2 2.004h10v4h4V11h2V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h7v-2H2v-18zM19 22.004h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z" />
      <Path d="M17.707 12.298a.997.997 0 0 0-1.414 0l-6 6 1.414 1.413L17 14.419l5.293 5.292 1.414-1.413-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
