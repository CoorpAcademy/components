import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.47 2.12L13 4h2l-1.806 3.16C15.376 7.697 17 9.652 17 12c0 2.762-2.238 5-5 5a5 5 0 0 1-1-9.899V5H9l.536-2.682C5.207 3.418 2 7.329 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.022-3.706-9.167-8.53-9.88z" />
      <Circle cx={12} cy={12} r={2.5} />
    </G>
  </Svg>
);

export default SvgComponent;
