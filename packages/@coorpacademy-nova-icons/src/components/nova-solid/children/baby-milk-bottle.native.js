import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Path d="M13.997 4.998v-1s0-2-2-2-2 2-2 2v1s-2 1-2 3h8c0-2-2-3-2-3zM15.997 8.998h-8a1.5 1.5 0 1 0 0 3h8a1.5 1.5 0 1 0 0-3zM6.998 19.998c0 1.1.9 2 2 2h5.999c1.101 0 2-.9 2-2v-1h-3.999v-1h3.999v-2h-3.999v-1h3.999v-2H6.998v7z" />
    </G>
  </Svg>
);

export default SvgComponent;
