import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.884 2.884l-1.767-1.768L18 4.232l-3.116-3.116-1.767 1.768L16.233 6l-3.116 3.116 1.767 1.768L18 7.768l3.117 3.116 1.767-1.768L19.768 6z" />
      <Path d="M18 15h-4a2.002 2.002 0 0 0-1.998 1.922c-2.543-.404-4.473-2.34-4.91-4.924A2.003 2.003 0 0 0 9 10V6a2 2 0 0 0-2-2H3c-1.103 0-2 .896-2 2v5c0 6.617 5.383 12 12 12h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-5 6C7.487 21 3 16.514 3 11V6h4v4H6a.997.997 0 0 0-1 1.016C5.073 15.567 8.512 19 13 19a1 1 0 0 0 1-1v-1h4l.002 4H13z" />
    </G>
  </Svg>
);

export default SvgComponent;
