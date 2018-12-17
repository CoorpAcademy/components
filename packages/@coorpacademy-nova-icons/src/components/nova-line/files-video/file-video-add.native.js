import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 17.004l7-4-7-4z" />
      <Path d="M2 2.004h10v4h4v8.003h2V4.59L13.414.004H2c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h12v-2H2v-18zM21 19.007v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
