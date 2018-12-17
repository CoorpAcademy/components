import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M22 17h-2.275c.167-.471.275-.971.275-1.5a4.5 4.5 0 0 0-4.5-4.5h-2l-1.224-2.447A.998.998 0 0 0 11.382 8H7a1 1 0 0 0-1 1v2.051c-2.247.251-4 2.135-4 4.449A4.5 4.5 0 0 0 6.5 20h9a4.46 4.46 0 0 0 2.797-1H22v-2zm-15.5-.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM8 7h2c0-1.654-1.346-3-3-3H6v2h1c.551 0 1 .449 1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
