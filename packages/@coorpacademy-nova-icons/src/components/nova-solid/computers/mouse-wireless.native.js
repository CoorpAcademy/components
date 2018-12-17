import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M6.765 4.439l-1.53-1.287A8.83 8.83 0 0 1 12.005 0a8.834 8.834 0 0 1 6.758 3.138l-1.527 1.291A6.837 6.837 0 0 0 12.005 2a6.839 6.839 0 0 0-5.24 2.439z"
    />
    <Path
      fill="currentColor"
      d="M14.695 6.832a3.338 3.338 0 0 0-2.689-1.345c-1.066 0-2.046.49-2.687 1.344l-1.6-1.2a5.318 5.318 0 0 1 4.287-2.144c1.703 0 3.266.781 4.289 2.146l-1.6 1.199zM16 9H8c-1.103 0-2 .896-2 2v7c0 3.309 2.691 6 6 6s6-2.691 6-6v-7c0-1.104-.897-2-2-2zm-4 6.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
    />
  </Svg>
);

export default SvgComponent;
