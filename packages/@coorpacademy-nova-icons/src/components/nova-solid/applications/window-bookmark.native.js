import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2a2 2 0 0 0-2-2H2C.897 0 0 .896 0 2v2.002h20V2zM3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM20 8.003V5.002H0V16c0 1.103.897 2 2 2h11.682A6.948 6.948 0 0 1 13 15.003a7 7 0 0 1 7-7z" />
      <Path d="M25 15.003c0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.627.793 3.061 2 3.975v4.025a1.002 1.002 0 0 0 1.707.707L20 22.417l1.293 1.293a.996.996 0 0 0 1.09.217c.374-.156.617-.52.617-.924v-4.025c1.207-.914 2-2.348 2-3.975zm-5 3c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
