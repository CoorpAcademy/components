import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 10.002h-4v-1H7v3h1v4H7v3h3v-1h4v1h3v-3h-1v-4h1v-3h-3v1zm0 6h-4v-4h4v4z" />
      <Path d="M16.414 1.002H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.587l-4.586-4.585zM5 21.002v-18h10v4h4l.001 14H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
