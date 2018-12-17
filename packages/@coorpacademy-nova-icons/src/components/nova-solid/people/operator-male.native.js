import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 16c-4.71 0-8 2.467-8 6v2h16v-2c0-3.533-3.29-6-8-6zM19 7v2a4.001 4.001 0 0 1-2 3.463V11h-3v4h1c3.309 0 6-2.691 6-6V7h-2z" />
      <Path d="M12 4C9.243 4 7 6.243 7 9s2.243 5 5 5v-2c-1.654 0-3-1.346-3-3 0-.503.136-.971.356-1.388a12.624 12.624 0 0 0 4.773 1.352c.288.022.579.03.871.032V9h2c0-2.757-2.243-5-5-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
