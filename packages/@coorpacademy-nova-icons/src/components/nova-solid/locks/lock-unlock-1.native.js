import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M17 11H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2V7c0-2.757-2.243-5-5-5S7 4.243 7 7v4c-1.103 0-2 .896-2 2v7c0 1.103.897 2 2 2h10c1.104 0 2-.897 2-2v-7a2 2 0 0 0-2-2zm-5 7a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 18z" />
  </Svg>
);

export default SvgComponent;
