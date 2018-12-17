import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 16.333c0-1.103-.896-2-2-2-1.103 0-2 .897-2 2V17h1.334v-.667a.667.667 0 0 1 1.332 0c0 .653-1.282 2.34-2.471 3.529A.668.668 0 0 0 16.666 21H20v-1.333h-1.816c.831-.979 1.816-2.349 1.816-3.334zM16 8.5C16 6.019 13.981 4 11.5 4S7 6.019 7 8.5v3c0 2.482 2.019 4.5 4.5 4.5s4.5-2.018 4.5-4.5v-3zm-2 3c0 1.379-1.122 2.5-2.5 2.5S9 12.879 9 11.5v-3C9 7.121 10.122 6 11.5 6S14 7.121 14 8.5v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
