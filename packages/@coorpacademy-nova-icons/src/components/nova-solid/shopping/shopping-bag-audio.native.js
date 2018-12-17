import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 4c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S7 4.243 7 7h2c0-1.654 1.346-3 3-3zM20 8H4L3 22h18L20 8zm-4.367 6.265L13 13.388V17.5a2.499 2.499 0 1 1-5 0 2.5 2.5 0 0 1 3-2.45v-4.438l5.266 1.755-.633 1.898z" />
    </G>
  </Svg>
);

export default SvgComponent;
