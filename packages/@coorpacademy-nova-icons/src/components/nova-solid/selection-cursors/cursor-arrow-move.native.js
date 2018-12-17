import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 3l4 10 1-5 5-.999zM18 12v2h-2v-2h2l-3-3-3 3h2v2h-2v-2l-3 3 3 3v-2h2v2h-2l3 3 3-3h-2v-2h2v2l3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
