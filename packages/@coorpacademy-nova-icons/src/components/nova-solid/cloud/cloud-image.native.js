import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 11s0-1 1-1h8.315c.435-.91.685-1.925.685-3 0-3.859-3.141-7-7-7-2.51 0-4.74 1.31-5.978 3.357.965.458 1.996 1.263 2.97 2.647l-.817.576C7.678 4.454 6.393 4 5 4 2.243 4 0 6.243 0 9s2.243 5 5 5h5v-3z" />
      <Path d="M23 12H13a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1zm-8 2a1 1 0 1 1 .002 1.998A1 1 0 0 1 15 14zm7 8h-8v-2l2-2 2 2 2-4 2 3v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
