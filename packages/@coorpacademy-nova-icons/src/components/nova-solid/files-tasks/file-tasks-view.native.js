import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 4h-2a2 2 0 0 0-4 0H8v3h8V4z" />
      <Path d="M19 5h-1v3H6V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-2.228 14.773c-.331.331-.77.513-1.237.513-.467 0-.907-.182-1.237-.513l-1.108-1.108A4.468 4.468 0 0 1 11.5 19 4.505 4.505 0 0 1 7 14.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .599-.123 1.167-.335 1.69l1.108 1.108c.331.33.513.77.513 1.237a1.743 1.743 0 0 1-.514 1.238z" />
      <Circle cx={11.5} cy={14.5} r={2.5} />
    </G>
  </Svg>
);

export default SvgComponent;
