import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24.001v24H.001z" />
    <G fill="currentColor">
      <Path d="M10 19h4v3h-4zM12 3C8.691 3 6 5.691 6 9h12c0-3.309-2.691-6-6-6zM6 10h12v2H6z" />
      <Path d="M20 11c0 1.44-.56 2-2 2H6c-1.439 0-2-.56-2-2H2c0 2.542 1.458 4 4 4h12c2.542 0 4-1.458 4-4h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
