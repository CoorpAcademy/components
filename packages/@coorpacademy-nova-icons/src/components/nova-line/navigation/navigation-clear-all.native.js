import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 16h14v3H3zM5 11h14v3H5zM7 6h14v3H7z" />
    </G>
  </Svg>
);

export default SvgComponent;
