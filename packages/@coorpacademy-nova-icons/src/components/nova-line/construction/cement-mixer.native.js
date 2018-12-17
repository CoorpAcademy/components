import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M21 5h-5a1 1 0 0 0-1 1v1h-1a1 1 0 0 0-.051-.316l-1-3A1 1 0 0 0 12 3H6a1 1 0 0 0-.949.684l-1 3A1 1 0 0 0 4 7H3V5H1v17h2v-2h17v2h2V6a1 1 0 0 0-1-1zm-9 4c0 1.654-1.346 3-3 3s-3-1.346-3-3h6zM6.721 5h4.559l.667 2H6.054l.667-2zM4 9c0 2.757 2.243 5 5 5s5-2.243 5-5h1v6H3V9h1zm-1 8h13a1 1 0 0 0 1-1V7h3v2h-2v2h2v7H3v-1z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
