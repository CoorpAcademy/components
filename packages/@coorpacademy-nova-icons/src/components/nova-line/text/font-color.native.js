import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 18v5h18v-5H3zm14 4l-2-3h4l-2 3zM10 15H8.456l1.154-3h4.78l1.154 3H14v2h5v-2h-1.313L12.934 2.641a1.001 1.001 0 0 0-1.868 0L6.313 15H5v2h5v-2zm2-9.214L13.621 10H10.38L12 5.786z" />
    </G>
  </Svg>
);

export default SvgComponent;
