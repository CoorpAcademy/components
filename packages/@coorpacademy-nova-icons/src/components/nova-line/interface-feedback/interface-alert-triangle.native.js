import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M21 22H3a1.003 1.003 0 0 1-.895-1.448l9-18c.339-.677 1.45-.677 1.789 0l9 18A1.003 1.003 0 0 1 21 22zM4.618 20h14.764L12 5.237 4.618 20z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M11 10h2v6h-2z" />
    <Circle cx={12} cy={18} r={1.25} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
