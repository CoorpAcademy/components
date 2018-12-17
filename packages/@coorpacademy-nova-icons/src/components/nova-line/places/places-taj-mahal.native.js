import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21 12.999h-6v-2.632c1.283-.662 2-1.821 2-3.369 0-2.599-3.688-5.303-4.428-5.819a1.004 1.004 0 0 0-1.145 0C10.688 1.695 7 4.4 7 6.999c0 1.547.717 2.707 2 3.369V13H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1.586l.999-1 1.002 1V21a1 1 0 0 0 1 .999H21a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-9-9.756c1.396 1.091 3 2.739 3 3.755 0 .495 0 2-3 2s-3-1.505-3-2c0-1.016 1.604-2.664 3-3.755zm-1 7.756h2v2h-2v-2zm9 9h-5v-1.001c0-.264-.106-.519-.293-.706l-2.002-2a.997.997 0 0 0-1.414.001l-1.998 2a.99.99 0 0 0-.293.706v1H4v-5h16v5z" />
      <Path d="M16 15.999h2v2h-2zM6 15.999h2v2H6zM3 8.999h2v3H3zM19 8.999h2v3h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
