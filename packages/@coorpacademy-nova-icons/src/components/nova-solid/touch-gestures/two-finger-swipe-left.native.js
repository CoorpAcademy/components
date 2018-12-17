import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 8.001h-2v6h-1v-5h-2v7H8l3 6h8v-6l-3-2z" />
      <Path d="M12.5 4.001c-2.644 0-5.242.682-7.538 1.962L3 4.001v5h5L6.438 7.438A13.52 13.52 0 0 1 12.5 6.001c2.893 0 5.65.901 7.975 2.606l1.183-1.613A15.383 15.383 0 0 0 12.5 4.001z" />
    </G>
  </Svg>
);

export default SvgComponent;
