import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 2.002c1.667 6.666-2 8.75-2 8.75V7.369c-1.707.742-3 2.535-3 4.633 0 2.762 2.238 5 5 5s5-2.238 5-5c0-2.576 0-5-5-10z" />
      <Path d="M11 12.002c0-1.156.285-2.243.781-3.204L9.6 7.162a.999.999 0 0 0-1.2 0l-8 6a1 1 0 0 0 .6 1.8h2v8.04h4v-5h4v5h4v-4.683a6.992 6.992 0 0 1-4-6.317z" />
    </G>
  </Svg>
);

export default SvgComponent;
