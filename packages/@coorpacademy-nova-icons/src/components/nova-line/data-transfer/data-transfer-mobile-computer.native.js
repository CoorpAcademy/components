import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 12.002h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1zm-1 2v6h-4v-6h4zM19 10.002h2v-6a1 1 0 0 0-1-1h-6v2h5v5zM7 14.002H5v6a1 1 0 0 0 1 1h8v-2H7v-5zM2 10.002v2h8v-2H7v-1h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4v1H2zm8-8v4H2v-4h8z" />
    </G>
  </Svg>
);

export default SvgComponent;
