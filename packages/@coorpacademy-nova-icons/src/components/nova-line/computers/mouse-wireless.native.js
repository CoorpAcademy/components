import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M6.765 4.439l-1.53-1.287A8.83 8.83 0 0 1 12.005 0a8.834 8.834 0 0 1 6.758 3.138l-1.527 1.291A6.837 6.837 0 0 0 12.005 2a6.839 6.839 0 0 0-5.24 2.439z"
      fill="currentColor"
    />
    <Path
      d="M14.695 6.832a3.338 3.338 0 0 0-2.689-1.345c-1.066 0-2.046.49-2.687 1.344l-1.6-1.2a5.316 5.316 0 0 1 4.287-2.144c1.703 0 3.266.781 4.289 2.146l-1.6 1.199zM12 24c-3.309 0-6-2.691-6-6v-7c0-1.104.897-2 2-2h8c1.103 0 2 .896 2 2v7c0 3.309-2.691 6-6 6zM8 11v7c0 2.205 1.794 4 4 4s4-1.795 4-4v-7H8z"
      fill="currentColor"
    />
    <Circle cx={12} cy={14} r={1.25} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
