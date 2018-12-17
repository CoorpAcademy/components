import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 19H7v-4H5v4c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h-2v4zM18 4c-2.757 0-5 2.243-5 5 0 .712.154 1.387.424 2h-2.848c.27-.613.424-1.288.424-2 0-2.757-2.243-5-5-5S1 6.243 1 9s2.243 5 5 5c1.13 0 2.162-.39 3-1.025V13h6v-.025A4.947 4.947 0 0 0 18 14c2.757 0 5-2.243 5-5s-2.243-5-5-5zM6 12c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm12 0c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
      <Circle cx={18} cy={9} r={2} />
      <Circle cx={6} cy={9} r={2} />
      <Path d="M9 15h2v2H9zM13 15h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
