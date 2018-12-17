import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.293 9.3l-3.707 3.707 3.707 3.707L8.707 15.3l-2.293-2.293 2.293-2.293zM10.707 16.714l3.707-3.707L10.707 9.3l-1.414 1.414 2.293 2.293L9.293 15.3z" />
      <Path d="M18 4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h12v-2H2v-18h10v4h4L16.001 17H18V4.59zM17 19.004h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
