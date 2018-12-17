import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1.003H5c-1.103 0-2 .896-2 2v5h2v-5h10v4h4v1h2V5.59l-4.586-4.587zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM18 10.003c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3s3-1.346 3-3v-2c0-1.654-1.346-3-3-3zm1 5a1.001 1.001 0 0 1-2 0v-2c0-.55.449-1 1-1s1 .45 1 1v2zM11.5 16.003H8v2h3.5c1.378 0 2.5-1.121 2.5-2.5 0-1.378-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H14v-2h-3.5a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1zM7 16.003H6v-4h1v-2H3v2h1v4H3v2h4z" />
    </G>
  </Svg>
);

export default SvgComponent;
