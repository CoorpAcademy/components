import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 3h18v2H3zM5 7h14v2H5zM2 11h20v2H2zM5 15h14v2H5zM3 19h18v2H3z" />
    </G>
  </Svg>
);

export default SvgComponent;
