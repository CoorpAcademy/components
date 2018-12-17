import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 9.005h-2l-1 5h-1l-2-5H7l2 7H6l3 6h8v-6l-3-2zM7 8.005l3-3-3-3v2H2v2h5zM15 4.005v-2l-3 3 3 3v-2h5v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
