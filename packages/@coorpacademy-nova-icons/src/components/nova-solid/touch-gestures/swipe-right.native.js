import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 8.001h-2v7H9l3 6h6v-6l-4-2zM12.5 3.001c-2.644 0-5.242.682-7.538 1.962L3 3.001v5h5L6.438 6.438A13.52 13.52 0 0 1 12.5 5.001c2.893 0 5.65.901 7.975 2.606l1.183-1.613A15.383 15.383 0 0 0 12.5 3.001z" />
    </G>
  </Svg>
);

export default SvgComponent;
