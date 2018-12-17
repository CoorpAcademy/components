import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1.003H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.59l-4.586-4.587zM5 21.003v-18h10v4h4l.001 14H5z" />
      <Path d="M10 11.006v5a1.001 1.001 0 0 1-2 0H6c0 1.655 1.346 3 3 3s3-1.345 3-3v-5h-2zM12 13.506c0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H12v2h3.5c1.378 0 2.5-1.122 2.5-2.5 0-1.379-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H18v-2h-3.5a2.503 2.503 0 0 0-2.5 2.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
