import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
      <Path d="M12 4c4.411 0 8 3.59 8 8h2c0-5.514-4.486-10-10-10S2 6.486 2 12c0 5.515 4.486 10 10 10v-2c-4.411 0-8-3.589-8-8 0-4.41 3.589-8 8-8z" />
    </G>
  </Svg>
);

export default SvgComponent;
