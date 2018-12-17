import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      d="M13 13h1V8h2c.304 0 .591-.139.781-.375l4-5c.24-.301.287-.712.121-1.059A1.004 1.004 0 0 0 20 1H6a1.001 1.001 0 0 0-.78 1.625l4 5A1 1 0 0 0 10 8h2v3.102A5.007 5.007 0 0 0 8 16c0 2.757 2.243 5 5 5s5-2.243 5-5h-2c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3zm-2.52-7l-2.4-3h9.839l-2.4 3H10.48z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
