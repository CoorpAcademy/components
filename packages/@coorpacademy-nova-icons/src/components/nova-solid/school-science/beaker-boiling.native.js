import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 0h8v2h-8zM18 6.342V3h-4v3.342c-2.36.836-4 3.098-4 5.658 0 3.309 2.691 6 6 6s6-2.691 6-6c0-2.56-1.64-4.822-4-5.658zM14.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3.5-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      <Path d="M7 16.639V6h4V4H6a1 1 0 0 0-1 1v11.639L.232 22.36A1 1 0 0 0 1 24h10a.998.998 0 1 0 .768-1.64L7 16.639z" />
    </G>
  </Svg>
);

export default SvgComponent;
