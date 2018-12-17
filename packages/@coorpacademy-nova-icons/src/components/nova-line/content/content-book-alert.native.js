import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M17 0H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM2 2h2v16H2V2zm14 16H6V2h10v16zM20 14h2v6h-2z"
      fill="currentColor"
    />
    <Circle cx={21} cy={22} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
