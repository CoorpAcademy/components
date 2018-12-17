import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.293 9.3l-3.707 3.707 3.707 3.707L8.707 15.3l-2.293-2.293 2.293-2.293zM10.707 16.714l3.707-3.707L10.707 9.3l-1.414 1.414 2.293 2.293L9.293 15.3z" />
      <Path d="M2 2.004h10v4h4L16.001 12H18V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h10v-2H2v-18zM19 14.59l-4.707 4.706 1.414 1.414L18 18.417v5.587h2v-5.587l2.293 2.293 1.414-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
