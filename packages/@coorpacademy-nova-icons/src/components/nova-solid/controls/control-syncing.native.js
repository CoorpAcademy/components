import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16 18v-2c2.205 0 4-1.795 4-4s-1.795-4-4-4h-5a.998.998 0 0 1-.943-.669.998.998 0 0 1 .318-1.112l5-4 1.25 1.562L13.851 6H16c3.309 0 6 2.691 6 6s-2.691 6-6 6zM8.625 21.781l-1.25-1.562L10.149 18H8c-3.309 0-6-2.691-6-6s2.691-6 6-6v2c-2.205 0-4 1.795-4 4s1.795 4 4 4h5c.425 0 .803.268.943.669a.998.998 0 0 1-.318 1.112l-5 4z"
    />
  </Svg>
);

export default SvgComponent;
