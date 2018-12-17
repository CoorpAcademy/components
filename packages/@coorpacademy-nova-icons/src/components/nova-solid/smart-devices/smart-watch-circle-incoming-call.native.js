import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.611 13.668h-1.556a.39.39 0 0 0-.389.39v.759a3.682 3.682 0 0 1-3.481-3.48h.758a.39.39 0 0 0 .389-.39V9.391a.389.389 0 0 0-.389-.389H8.389A.389.389 0 0 0 8 9.391v1.945h.019a4.847 4.847 0 0 0 4.648 4.646v.02h1.944a.389.389 0 0 0 .389-.389v-1.556a.39.39 0 0 0-.389-.389z" />
      <Path d="M12 12.002h3l-3-3z" />
      <Path d="M16.318 5.274L15 .002H9L7.682 5.274a7.987 7.987 0 0 0 0 13.455L9 24.002h6l1.318-5.273a7.987 7.987 0 0 0 0-13.455zM12 18.002a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
