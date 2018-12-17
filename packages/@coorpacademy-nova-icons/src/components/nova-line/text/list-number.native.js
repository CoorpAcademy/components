import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 4h14v2H8zM8 11h14v2H8zM8 18h14v2H8zM4.32 3.869V7.47h1.094V2.548a.55.55 0 0 0-.338-.506.544.544 0 0 0-.596.119L3 3.642l.773.773.547-.546zM4.5 9C3.673 9 3 9.673 3 10.5v.5h1v-.5a.5.5 0 0 1 1.001 0c0 .489-.963 1.754-1.854 2.646a.499.499 0 0 0-.108.545A.497.497 0 0 0 3.5 14H6v-1H4.638C5.261 12.266 6 11.238 6 10.5 6 9.673 5.328 9 4.5 9zM4.5 16.442l-1.5.001.001 1 1.499-.001a.5.5 0 0 1 0 1H4v1h.5a.5.5 0 0 1 0 1H3l.001 1H4.5a1.502 1.502 0 0 0 1.117-2.5 1.502 1.502 0 0 0-1.117-2.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
