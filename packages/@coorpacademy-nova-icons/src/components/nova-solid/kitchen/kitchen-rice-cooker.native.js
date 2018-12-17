import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M4.051 21.316A1 1 0 0 0 5 22h14a1 1 0 0 0 .949-.684L20.388 20H3.612l.439 1.316zM21 9c0-3.859-4.037-7-9-7S3 5.141 3 9h18zM9 5h6v2H9V5zM10 14h4v2h-4z" />
      <Path d="M20 10H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4 8H8v-6h8v6z" />
    </G>
  </Svg>
);

export default SvgComponent;
