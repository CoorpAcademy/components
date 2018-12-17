import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 4.985a1.002 1.002 0 0 0-.658-.924l-11-4A1 1 0 0 0 .061 1.342l4 11a1 1 0 0 0 .924.658h.016c.408 0 .776-.248.929-.629L7.77 7.77l4.602-1.841c.384-.154.634-.53.628-.944zM6.629 6.072a1.004 1.004 0 0 0-.558.557L5.045 9.197 2.672 2.673l6.524 2.372-2.567 1.027zM16 8c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6c0 3.31-2.691 6-6 6z" />
      <Path d="M16.999 12h-2v3H12v2h2.999v3h2v-3H20v-2h-3.001z" />
    </G>
  </Svg>
);

export default SvgComponent;
