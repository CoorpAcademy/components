import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <G fill="currentColor">
      <Path d="M17.998 1.998h4v10h-4zM12.998 5.998h-7v-2h-4v6h11zM8.998 16.998h4v-6h-11v4h7z" />
      <Path d="M17.998 13.998h-4v4h-5v4h13v-4h-4zM1.998 15.998h6v6h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
