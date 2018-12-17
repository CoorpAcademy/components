import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.293.295L8 6.588 1.707.295.293 1.709l6.293 6.293-6.293 6.293 1.414 1.414L8 9.415l6.293 6.294 1.414-1.414-6.293-6.293 6.293-6.293zM23 21.002a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v2h4v1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5v-2h-4v-1h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
