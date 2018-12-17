import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 2.999H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-14c0-1.103-.897-2-2-2zm-14 16v-14h14l.001 14H5z" />
      <Path d="M9 8.999v6a1 1 0 0 0 1 1h5v-2h-4v-1h3v-2h-3v-1h4v-2h-5a1 1 0 0 0-1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
