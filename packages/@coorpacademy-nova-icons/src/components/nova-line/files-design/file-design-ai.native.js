import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1.002H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.587l-4.586-4.585zM5 21.002v-18h10v4h4l.001 14H5z" />
      <Path d="M11 10.002H7a1 1 0 0 0-1 1v7h2v-2h2v2h2v-7a1 1 0 0 0-1-1zm-1 4H8v-2h2v2zM14 12.002h1v4h-1v2h4v-2h-1v-4h1v-2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
