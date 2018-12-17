import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 17.333c0-1.103-.897-2-2-2s-2 .897-2 2V18h1.333v-.667a.668.668 0 0 1 1.334 0c0 .653-1.283 2.34-2.472 3.529a.669.669 0 0 0-.145.727.668.668 0 0 0 .617.411H23v-1.333h-1.816c.831-.979 1.816-2.349 1.816-3.334zM22 10.5v-3C22 5.019 19.981 3 17.5 3S13 5.019 13 7.5v3c0 2.482 2.019 4.5 4.5 4.5s4.5-2.018 4.5-4.5zm-2 0c0 1.379-1.122 2.5-2.5 2.5S15 11.879 15 10.5v-3C15 6.121 16.122 5 17.5 5S20 6.121 20 7.5v3zM3 8v2c0 2.757 2.243 5 5 5h4v-2H8c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h4V3H8C5.243 3 3 5.243 3 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
