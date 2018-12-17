import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M20 3h-4a1 1 0 0 0-1 1V12.499A3.504 3.504 0 0 1 11.499 16a3.479 3.479 0 0 1-2.475-1.025A3.476 3.476 0 0 1 8 12.5V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8.5c0 5.238 4.261 9.5 9.499 9.5a9.44 9.44 0 0 0 6.718-2.782A9.439 9.439 0 0 0 21 12.5V4a1 1 0 0 0-1-1zm-1 2v3h-2V5h2zM6 5v3H4V5h2zm10.803 12.803A7.452 7.452 0 0 1 11.499 20C7.364 20 4 16.636 4 12.5V10h2v2.5c0 1.469.571 2.85 1.61 3.89A5.467 5.467 0 0 0 11.499 18 5.508 5.508 0 0 0 17 12.499V10h2v2.5c0 2.003-.78 3.887-2.197 5.303z" />
      <Path d="M11 12l4-5h-3V3L8 8h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
