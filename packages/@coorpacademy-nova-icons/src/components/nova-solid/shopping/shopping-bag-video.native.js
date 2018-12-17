import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 4c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S7 4.243 7 7h2c0-1.654 1.346-3 3-3zM20 8H4L3 22h18L20 8zM8 20v-8l8 4-8 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
